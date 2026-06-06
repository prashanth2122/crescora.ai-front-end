import { NextRequest, NextResponse } from "next/server";

import { getLocaleFromPath } from "@/lib/locales";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const locale = getLocaleFromPath(request.nextUrl.pathname);

  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-current-path", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|.*\\..*).*)"],
};

