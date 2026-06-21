import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/achievement/")) {
    const lastSegment = pathname.split("/").filter(Boolean).pop() ?? "";
    if (lastSegment.includes(".")) {
      return NextResponse.next();
    }
    const base = pathname.endsWith("/") ? pathname : pathname + "/";
    return NextResponse.rewrite(new URL(base + "index.html", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/achievement/:path*",
};
