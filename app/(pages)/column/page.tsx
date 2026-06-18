import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/microcms";
import type { ColumnList } from "@/lib/microcms";
import ColumnSidebar from "@/app/_components/ColumnSidebar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "コラム",
  description:
    "TAKISEA PRODUCTIONでは様々WEBサイトに関する記事を発信しております。WEBサイトを作るかどうか悩んでいる方はぜひ記事をのぞいてみてください。",
};

async function getColumns(): Promise<ColumnList | null> {
  try {
    if (!client) return null;
    const data = await client.getList<{
      title: string;
      content: string;
      thumbnail?: { url: string; width: number; height: number };
      category1?: { id: string; name: string }[];
      mv?: { url: string; width: number; height: number };
    }>({
      endpoint: "column",
      queries: { limit: 100, orders: "-publishedAt" },
    });
    return data as unknown as ColumnList;
  } catch {
    return null;
  }
}

export default async function ColumnPage() {
  const data = await getColumns();

  return (
    <main className={styles.columnMain}>
      <div className={styles.columnList}>
        <h1 className={styles.columnTitle}>記事一覧</h1>

        {!data || data.contents.length === 0 ? (
          <div className={styles.noPost}>
            <p>まだ記事がありません。</p>
            <Link href="/">トップページに戻る</Link>
          </div>
        ) : (
          <ul className={styles.postList}>
            {data.contents.map((post) => {
              const cardImage = post.mv ?? post.thumbnail;
              return (
                <li key={post.id} className={styles.postItem}>
                  <div className={styles.postThumbnail}>
                    {cardImage ? (
                      <Image
                        src={cardImage.url}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 769px) 100vw, 33vw"
                      />
                    ) : (
                      <div className={styles.noThumbnail}>No Image</div>
                    )}
                  </div>
                  <div className={styles.postMeta}>
                    {post.category1 && post.category1.length > 0 && (
                      <div className={styles.postCategory}>
                        {post.category1.map((cat) => (
                          <Link key={cat.id} href={`/column/category/${cat.id}/`} className={styles.categoryLink}>
                            <span>{cat.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                    <div className={styles.postTitle}>
                      <p>{post.title}</p>
                    </div>
                    <div className={styles.postDate}>
                      <time dateTime={(post.publishedAt ?? post.updatedAt).split("T")[0]}>
                        {new Date(post.publishedAt ?? post.updatedAt).toLocaleDateString("ja-JP")}
                      </time>
                    </div>
                  </div>
                  <Link href={`/column/${post.id}/`} className={styles.cardLink} aria-label={post.title} />
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <ColumnSidebar />
    </main>
  );
}
