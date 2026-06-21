import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  if (
    process.env.NODE_ENV === "production" &&
    !host.includes("takisea.com")
  ) {
    const url = request.nextUrl.clone();
    url.host = "takisea.com";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|achievement).*)",
  ],
};
