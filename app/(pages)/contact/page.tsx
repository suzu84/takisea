import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "TAKISEA PRODUCTIONへのお問い合わせはこちらから。ホームページ・LP制作に関するご相談・お見積もりは無料です。",
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <div className={styles.pageContent}>
        <h1 className={styles.pageTitle}>お問い合わせ</h1>
        <div className={styles.contactTxt}>
          <p>
            ホームページ・LP制作に関するご相談・お見積もりは無料です。
            <br />
            お気軽にお問い合わせください。3営業日以内にご返信いたします。
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
