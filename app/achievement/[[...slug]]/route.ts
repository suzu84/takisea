import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".eot": "application/vnd.ms-fontobject",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug?: string[] }> }
) {
  const { slug = [] } = await params;
  if (slug.length === 0) return new NextResponse(null, { status: 404 });

  const ext = path.extname(slug[slug.length - 1]).toLowerCase();

  const fsPath = ext
    ? path.join(process.cwd(), "public", "achievement", ...slug)
    : path.join(process.cwd(), "public", "achievement", ...slug, "index.html");

  try {
    const buf = fs.readFileSync(fsPath);
    return new NextResponse(buf, {
      headers: {
        "Content-Type": MIME[ext || ".html"] ?? "application/octet-stream",
        "Cache-Control": ext
          ? "public, max-age=86400"
          : "public, max-age=0, must-revalidate",
      },
    });
  } catch {
    return new NextResponse(null, { status: 404 });
  }
}
