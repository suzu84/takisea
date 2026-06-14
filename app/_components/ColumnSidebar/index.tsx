import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/lib/microcms";
import styles from "./index.module.css";

export default async function ColumnSidebar() {
  const categories = await getCategories();

  return (
    <aside className={styles.sidebar}>
      <section className={styles.section}>
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

      {categories.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sideTitle}>カテゴリー</h2>
          <div className={styles.categoryBox}>
            <ul className={styles.categoryList}>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/column/category/${cat.id}/`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </aside>
  );
}
