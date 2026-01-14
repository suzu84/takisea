import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');

  // 1. 認証情報がない場合にダイアログを表示させる
  if (!basicAuth) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  // 2. 送信された情報を解析
  const authValue = basicAuth.split(' ')[1];
  const [user, pwd] = atob(authValue).split(':');

  // 3. 環境変数（後で設定する値）と比較
  if (
    user === process.env.BASIC_AUTH_USER &&
    pwd === process.env.BASIC_AUTH_PASSWORD
  ) {
    return NextResponse.next();
  }

  // 4. 間違っていたら再度認証を求める
  return new NextResponse('Invalid credentials', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  // 静的ファイル（画像など）を除外して無限ループを防ぐ
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};