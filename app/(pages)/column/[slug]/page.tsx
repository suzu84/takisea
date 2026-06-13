import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/microcms";
import type { Column } from "@/lib/microcms";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getColumn(slug: string): Promise<Column | null> {
  try {
    const data = await client.getListDetail<Column>({
      endpoint: "column",
      contentId: slug,
    });
    return data;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getColumn(slug);

  if (!post) {
    return { title: "記事が見つかりません" };
  }

  return {
    title: post.title,
    description: post.content.replace(/<[^>]*>/g, "").slice(0, 120),
    openGraph: {
      title: `${post.title} - TAKISEA PRODUCTION`,
      images: post.thumbnail ? [{ url: post.thumbnail.url }] : [],
    },
  };
}

export default async function ColumnDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getColumn(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.columnMain}>
      <article className={styles.postArticle}>
        <div className={styles.postHeader}>
          <h1 className={styles.postTitle}>{post.title}</h1>

          <div className={styles.postMeta}>
            {post.category && post.category.length > 0 && (
              <div className={styles.postCategory}>
                {post.category.map((cat) => (
                  <span key={cat.id}>{cat.name}</span>
                ))}
              </div>
            )}
            <div className={styles.postDate}>
              <time dateTime={post.publishedAt.split("T")[0]}>
                {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
              </time>
            </div>
          </div>

          {post.thumbnail && (
            <div className={styles.postThumbnail}>
              <Image
                src={post.thumbnail.url}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 769px) 100vw, 70vw"
                priority
              />
            </div>
          )}
        </div>

        {/* 記事本文（microCMSのリッチテキストHTMLをそのままレンダリング） */}
        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

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

      {/* サイドバー */}
      <aside className={styles.sidebar}>
        <section>
          <div className={styles.sidebarAuthor}>
            <div className={styles.sidebarAuthorContent}>
              <Image
                src="/author.jpg"
                alt="Taki"
                width={120}
                height={120}
                className={styles.sidebarProfileImg}
              />
              <p className={styles.sidebarAuthorName}>
                Taki<span>運用者</span>
              </p>
              <p className={styles.sidebarAuthorDesc}>
                TAKISEA PRODUCTION運用者のTakiです。
                <br />
                独学でWeb制作を学び、IT企業の制作部門で実務経験を経て、現在は独立しWebサイト制作を手がけています。
              </p>
              <p className={styles.sidebarAuthorDesc}>
                Webサイトの運用やマーケティングについて発信をしています。
              </p>
            </div>
          </div>
        </section>
      </aside>
    </main>
  );
}
