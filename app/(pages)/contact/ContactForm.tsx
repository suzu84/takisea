"use client";

import { useActionState } from "react";
import Link from "next/link";
import { submitContact, type ContactState } from "./actions";
import styles from "./page.module.css";

const initialState: ContactState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );

  if (state.status === "success") {
    return (
      <div className={styles.successMessage}>
        <h2>送信完了</h2>
        <p>お問い合わせいただきありがとうございます。</p>
        <p>内容を確認の上、3営業日以内にご返信いたします。</p>
        <Link href="/" className={styles.backLink}>
          トップページに戻る
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className={styles.contactContent}>
      <div className={styles.formGroup}>
        <label htmlFor="name">
          お名前<span className={styles.required}>必須</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="例：山田 太郎"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">
          メールアドレス<span className={styles.required}>必須</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="例：example@email.com"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">
          お問い合わせ内容<span className={styles.required}>必須</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="お問い合わせ内容をご入力ください"
          required
        />
      </div>

      {state.status === "error" && (
        <span className={styles.errorMsg}>{state.message}</span>
      )}

      <div className={styles.submitWrap}>
        <button type="submit" className={styles.submitBtn} disabled={isPending}>
          {isPending ? "送信中..." : "送信する"}
        </button>
      </div>
    </form>
  );
}
