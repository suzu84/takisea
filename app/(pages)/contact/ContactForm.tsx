"use client";

import { useState, useTransition, useRef } from "react";
import Link from "next/link";
import { Turnstile } from "@marsidev/react-turnstile";
import type { TurnstileInstance } from "@marsidev/react-turnstile";
import { submitContact } from "./actions";
import styles from "./page.module.css";

type FormValues = { name: string; email: string; message: string };
type Step = "input" | "confirm" | "complete";

const initialValues: FormValues = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [step, setStep] = useState<Step>("input");
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errorMsg, setErrorMsg] = useState("");
  const [isPending, startTransition] = useTransition();
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleToConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.name || !values.email || !values.message) {
      setErrorMsg("すべての項目を入力してください。");
      return;
    }
    if (!emailRegex.test(values.email)) {
      setErrorMsg("正しいメールアドレスを入力してください。");
      return;
    }
    if (!turnstileToken) {
      setErrorMsg("認証が完了していません。しばらく待ってから再度お試しください。");
      return;
    }
    setErrorMsg("");
    setStep("confirm");
  };

  const handleSubmit = () => {
    startTransition(async () => {
      const fd = new FormData();
      fd.set("name", values.name);
      fd.set("email", values.email);
      fd.set("message", values.message);
      fd.set("cfTurnstileResponse", turnstileToken);
      const result = await submitContact({ status: "idle" }, fd);
      if (result.status === "success") {
        setStep("complete");
      } else {
        setErrorMsg(result.message ?? "送信に失敗しました。");
        turnstileRef.current?.reset();
        setTurnstileToken("");
        setStep("input");
      }
    });
  };

  if (step === "complete") {
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

  if (step === "confirm") {
    return (
      <div className={styles.contactContent}>
        <p className={styles.confirmNote}>以下の内容で送信します。ご確認ください。</p>
        <dl className={styles.confirmList}>
          <div className={styles.confirmItem}>
            <dt>お名前</dt>
            <dd>{values.name}</dd>
          </div>
          <div className={styles.confirmItem}>
            <dt>メールアドレス</dt>
            <dd>{values.email}</dd>
          </div>
          <div className={styles.confirmItem}>
            <dt>お問い合わせ内容</dt>
            <dd className={styles.confirmMessage}>{values.message}</dd>
          </div>
        </dl>
        {errorMsg && <span className={styles.errorMsg}>{errorMsg}</span>}
        <div className={styles.confirmBtns}>
          <button
            type="button"
            onClick={() => setStep("input")}
            className={styles.backBtn}
            disabled={isPending}
          >
            戻る
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className={styles.submitBtn}
            disabled={isPending}
          >
            {isPending ? "送信中..." : "送信する"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleToConfirm} className={styles.contactContent}>
      <div className={styles.formGroup}>
        <label htmlFor="name">
          お名前<span className={styles.required}>必須</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="例：山田 太郎"
          value={values.name}
          onChange={handleChange}
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
          value={values.email}
          onChange={handleChange}
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
          value={values.message}
          onChange={handleChange}
        />
      </div>

      <Turnstile
        ref={turnstileRef}
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onSuccess={(token) => setTurnstileToken(token)}
        onExpire={() => setTurnstileToken("")}
        options={{ language: "ja" }}
      />

      {errorMsg && <span className={styles.errorMsg}>{errorMsg}</span>}

      <div className={styles.submitWrap}>
        <button type="submit" className={styles.submitBtn}>
          確認する
        </button>
      </div>
    </form>
  );
}
