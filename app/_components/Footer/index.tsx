import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__content}>
          <ul className={styles.footerNav__list}>
            <li className={styles.footerNav__item}>
              <Link href="/#about">私について</Link>
            </li>
            <li className={styles.footerNav__item}>
              <Link href="/#service">サービス</Link>
            </li>
            <li className={styles.footerNav__item}>
              <Link href="/#achievement">実績</Link>
            </li>
            <li className={styles.footerNav__item}>
              <Link href="/#price">料金</Link>
            </li>
            <li className={styles.footerNav__item}>
              <Link href="/#flow">制作の流れ</Link>
            </li>
            <li className={styles.footerNav__item}>
              <Link href="/column/">コラム</Link>
            </li>
            <li className={styles.footerNav__item}>
              <Link href="/privacy-policy/">プライバシーポリシー</Link>
            </li>
          </ul>
        </div>
        <p className={styles.copy}>
          <small>&copy; TAKISEA PRODUCTION. All rights reserved</small>
        </p>
      </footer>
    </>
  );
}
