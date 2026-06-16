import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { client } from "@/lib/microcms";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const draftKey = searchParams.get("draftKey");
  const contentId = searchParams.get("contentId");

  if (!draftKey || !contentId) {
    return new Response("contentId と draftKey が必要です", { status: 400 });
  }

  if (!client) {
    return new Response("microCMS client が初期化されていません", { status: 500 });
  }

  try {
    await client.getListDetail({
      endpoint: "column",
      contentId,
      queries: { draftKey },
    });
  } catch {
    return new Response("無効なプレビューリンクです", { status: 401 });
  }

  (await draftMode()).enable();
  redirect(`/column/${contentId}/?draftKey=${draftKey}`);
}
