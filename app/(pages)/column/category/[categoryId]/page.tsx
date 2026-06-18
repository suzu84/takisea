import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client, getCategories } from "@/lib/microcms";
import type { Column, ColumnList } from "@/lib/microcms";
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
          filters: `category1[contains]${categoryId}`,
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
            {columns.contents.map((post) => {
              const cardImage = (post as Column).mv ?? post.thumbnail;
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
