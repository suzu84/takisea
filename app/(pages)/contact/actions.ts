"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // バリデーション
  if (!name || !email || !message) {
    return { status: "error", message: "すべての項目を入力してください。" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      status: "error",
      message: "正しいメールアドレスを入力してください。",
    };
  }

  // TODO: メール送信の実装
  // 例: Resend, NodeMailer, SendGrid など任意のサービスを使用してください
  // 環境変数 CONTACT_FORM_TO にメール送信先アドレスを設定してください
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'noreply@takisea.co.jp',
  //   to: process.env.CONTACT_FORM_TO!,
  //   subject: `お問い合わせ: ${name}様`,
  //   text: `名前: ${name}\nメール: ${email}\n\n${message}`,
  // });

  console.log("Contact form submission:", { name, email, message });

  return { status: "success" };
}
