import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        background: "#2E5773",
        height: "100vh",
        textAlign: "center",
        paddingTop: "200px",
        color: "#fff",
      }}
    >
      <p
        style={{
          fontSize: "2.6rem",
          marginBottom: "20px",
          letterSpacing: "0.2rem",
        }}
      >
        404
      </p>
      <p
        style={{
          fontSize: "2.6rem",
          marginBottom: "20px",
          letterSpacing: "0.2rem",
        }}
      >
        ページが見つかりませんでした。
      </p>
      <Link
        href="/"
        style={{
          fontSize: "1.6rem",
          display: "block",
          color: "#fff",
          opacity: 0.9,
          textDecoration: "none",
          marginTop: "20px",
        }}
      >
        トップページに戻る
      </Link>
    </div>
  );
}
