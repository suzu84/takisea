import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(req: NextRequest) {
  const host = req.headers.get('host') || '';

  // 本番環境: www → non-www リダイレクト、takisea.com以外 → takisea.com
  if (process.env.VERCEL_ENV === 'production') {
    if (!host.includes('takisea.com') || host.startsWith('www.')) {
      const url = req.nextUrl.clone();
      url.host = 'takisea.com';
      url.protocol = 'https:';
      return NextResponse.redirect(url, 301);
    }
    return NextResponse.next();
  }

  // ローカル開発環境はスキップ
  if (!process.env.VERCEL_ENV) {
    return NextResponse.next();
  }

  // プレビュー環境: Basic認証
  const basicAuth = req.headers.get('authorization');

  if (!basicAuth) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  const authValue = basicAuth.split(' ')[1];
  const [user, pwd] = atob(authValue).split(':');

  if (
    user === process.env.BASIC_AUTH_USER &&
    pwd === process.env.BASIC_AUTH_PASSWORD
  ) {
    return NextResponse.next();
  }

  return new NextResponse('Invalid credentials', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon\\.ico|achievement|.*\\.(?:jpg|jpeg|png|gif|svg|webp|ico|mp4|pdf|woff|woff2|ttf)).*)'],
};
