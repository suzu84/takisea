import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/microcms";
import type { ColumnList } from "@/lib/microcms";
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
      category?: { id: string; name: string }[];
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
            {data.contents.map((post) => (
              <li key={post.id} className={styles.postItem}>
                <Link href={`/column/${post.id}/`}>
                  <div className={styles.postThumbnail}>
                    {post.thumbnail ? (
                      <Image
                        src={post.thumbnail.url}
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
                    {post.category && post.category.length > 0 && (
                      <div className={styles.postCategory}>
                        {post.category.map((cat) => (
                          <span key={cat.id}>{cat.name}</span>
                        ))}
                      </div>
                    )}
                    <div className={styles.postTitle}>
                      <p>{post.title}</p>
                    </div>
                    <div className={styles.postDate}>
                      <time dateTime={post.publishedAt.split("T")[0]}>
                        {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
                      </time>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* サイドバー */}
      <aside className={styles.sidebar}>
        <section>
          <div className={styles.author}>
            <div className={styles.authorContent}>
              <Image
                src="/author.jpg"
                alt="Taki"
                width={120}
                height={120}
                className={styles.authorProfileImg}
              />
              <p className={styles.authorName}>
                Taki<span>運用者</span>
              </p>
              <p className={styles.authorDesc}>
                TAKISEA PRODUCTION運用者のTakiです。
                <br />
                独学でWeb制作を学び、IT企業の制作部門で実務経験を経て、現在は独立しWebサイト制作を手がけています。
              </p>
              <p className={styles.authorDesc}>
                Webサイトの運用やマーケティングについて発信をしています。
              </p>
            </div>
          </div>
        </section>
      </aside>
    </main>
  );
}
