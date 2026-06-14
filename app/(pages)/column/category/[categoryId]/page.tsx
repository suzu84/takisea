import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client, getCategories } from "@/lib/microcms";
import type { ColumnList } from "@/lib/microcms";
import ColumnSidebar from "@/app/_components/ColumnSidebar";
import styles from "../../page.module.css";

type Props = {
  params: Promise<{ categoryId: string }>;
};

async function getCategoryData(categoryId: string) {
  if (!client) return { columns: null, category: null };
  try {
    const [columnsData, categories] = await Promise.all([
      client.getList({
        endpoint: "column",
        queries: {
          filters: `category[contains]${categoryId}`,
          orders: "-publishedAt",
          limit: 100,
        },
      }),
      getCategories(),
    ]);
    const category = categories.find((c) => c.id === categoryId) ?? null;
    return { columns: columnsData as unknown as ColumnList, category };
  } catch {
    return { columns: null, category: null };
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = await params;
  const { category } = await getCategoryData(categoryId);
  if (!category) return { title: "カテゴリー" };
  return {
    title: `${category.name} - コラム`,
    description: `${category.name}に関するコラム一覧です。`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { categoryId } = await params;
  const { columns, category } = await getCategoryData(categoryId);

  if (!category) notFound();

  return (
    <main className={styles.columnMain}>
      <div className={styles.columnList}>
        <h1 className={styles.columnTitle}>{category.name}</h1>

        {!columns || columns.contents.length === 0 ? (
          <div className={styles.noPost}>
            <p>まだ記事がありません。</p>
            <Link href="/column/">コラム一覧に戻る</Link>
          </div>
        ) : (
          <ul className={styles.postList}>
            {columns.contents.map((post) => (
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
                          <Link key={cat.id} href={`/column/category/${cat.id}/`} style={{ textDecoration: "none" }}>
                            <span>{cat.name}</span>
                          </Link>
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

      <ColumnSidebar />
    </main>
  );
}
