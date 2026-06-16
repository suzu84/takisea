import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { client } from "@/lib/microcms";
import type { Column, Block } from "@/lib/microcms";
import { processContent, processBlocks } from "@/lib/toc";
import TableOfContents from "@/app/_components/TableOfContents";
import ColumnSidebar from "@/app/_components/ColumnSidebar";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ draftKey?: string }>;
};

async function getColumn(slug: string, draftKey?: string): Promise<Column | null> {
  try {
    if (!client) return null;
    const data = await client.getListDetail<Column>({
      endpoint: "column",
      contentId: slug,
      queries: { depth: 2, ...(draftKey ? { draftKey } : {}) },
    });
    return data;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { draftKey } = await searchParams;
  const post = await getColumn(slug, draftKey);

  if (!post) {
    return { title: "記事が見つかりません" };
  }

  const rawBlocks = post.blocks ?? post.add;
  const blocksArray = Array.isArray(rawBlocks) ? rawBlocks : [];
  const description = blocksArray.length > 0
    ? blocksArray
        .filter((b) => b.richText)
        .map((b) => b.richText!.replace(/<[^>]*>/g, ""))
        .join("")
        .slice(0, 120)
    : (post.content ?? "").replace(/<[^>]*>/g, "").slice(0, 120);

  return {
    title: post.title,
    description,
    openGraph: {
      title: `${post.title} - TAKISEA PRODUCTION`,
      images: post.thumbnail ? [{ url: post.thumbnail.url }] : [],
    },
  };
}

export default async function ColumnDetailPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { draftKey } = await searchParams;
  const { isEnabled: isDraft } = await draftMode();
  const post = await getColumn(slug, isDraft ? draftKey : undefined);

  if (!post) {
    notFound();
  }

  const rawBlocks = post.blocks ?? post.add;
  const blocksArray = Array.isArray(rawBlocks) ? rawBlocks : [];
  const hasBlocks = blocksArray.length > 0;

  // ブロック方式 or 旧contentフォールバック
  let tocItems: ReturnType<typeof processContent>["tocItems"] = [];
  let processedContent: string | null = null;
  let renderedBlocks: Block[] = [];

  if (hasBlocks) {
    const richTexts = blocksArray.map((b) => b.richText ?? "");
    const { processedChunks, tocItems: items } = processBlocks(richTexts);
    tocItems = items;
    renderedBlocks = blocksArray.map((block, i) => ({
      ...block,
      richText: processedChunks[i],
    }));
  } else {
    const { processedHtml, tocItems: items } = processContent(post.content ?? "");
    tocItems = items;
    processedContent = processedHtml;
  }

  return (
    <main className={styles.columnMain}>
      {isDraft && (
        <div className={styles.draftBanner}>
          プレビュー中（下書き表示）
          <Link href="/api/draft-disable">プレビューを終了</Link>
        </div>
      )}
      <article className={styles.postArticle}>
        <div className={styles.postHeader}>
          <h1 className={styles.postTitle}>{post.title}</h1>

          <div className={styles.postMeta}>
            {post.category1 && post.category1.length > 0 && (
              <div className={styles.postCategory}>
                {post.category1.map((cat) => (
                  <span key={cat.id}>
                    <Link href={`/column/category/${cat.id}/`}>{cat.name}</Link>
                  </span>
                ))}
              </div>
            )}
            <div className={styles.postDate}>
              <time dateTime={post.publishedAt.split("T")[0]}>
                {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
              </time>
            </div>
          </div>

          {(post.mv ?? post.thumbnail) && (
            <div className={styles.postMv}>
              <Image
                src={(post.mv ?? post.thumbnail)!.url}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 769px) 100vw, 70vw"
                priority
              />
            </div>
          )}
        </div>

        {/* 目次 */}
        <TableOfContents items={tocItems} />

        {/* 記事本文 */}
        {hasBlocks ? (
          renderedBlocks.map((block, i) => {
            if (block.relatedArticle) {
              const article = block.relatedArticle;
              const articleImage = article.mv ?? article.thumbnail;
              return (
                <div key={i} className={styles.relatedArticles}>
                  <p className={styles.relatedLabel}>参考記事</p>
                  <Link href={`/column/${article.id}/`} className={styles.relatedCard}>
                    {articleImage && (
                      <div className={styles.relatedThumbnail}>
                        <Image
                          src={articleImage.url}
                          alt={article.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="120px"
                        />
                      </div>
                    )}
                    <p className={styles.relatedCardTitle}>{article.title}</p>
                  </Link>
                </div>
              );
            }
            if (block.richText) {
              return (
                <div
                  key={i}
                  className={styles.postContent}
                  dangerouslySetInnerHTML={{ __html: block.richText }}
                />
              );
            }
            return null;
          })
        ) : (
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: processedContent! }}
          />
        )}

        {/* 著者プロフィール */}
        <div className={styles.author}>
          <div className={styles.authorTopic}>
            <p>この記事を書いた人</p>
          </div>
          <div className={styles.authorContent}>
            <div className={styles.authorImg}>
              <Image
                src="/author.jpg"
                alt="Taki"
                width={120}
                height={120}
                className={styles.authorProfileImg}
              />
            </div>
            <div className={styles.authorDetail}>
              <p className={styles.authorName}>Taki</p>
              <div className={styles.authorTxt}>
                <p>
                  独学でWeb制作を学び、上場企業のIT部門でWebディレクター兼フロントエンドエンジニアとして、130以上のサイト制作・運用に携わりました。
                  現在は独立をし、会社員時代と同じくWebディレクターとしてサイト制作を行なってます。
                </p>
                <p>Webサイト周りのお仕事はお任せください！</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.postBtn}>
          <Link href="/column/">
            <span>コラム一覧へ戻る</span>
          </Link>
        </div>
      </article>

      <ColumnSidebar />
    </main>
  );
}
