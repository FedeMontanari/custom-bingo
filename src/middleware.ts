import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the username from cookies
  const userName = request.cookies.get("userName")?.value;

  // Clone the request headers and add the username header
  const requestHeaders = new Headers(request.headers);
  if (userName) {
    requestHeaders.set("x-user-name", userName);
  }

  // Return the response with the new headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: "/game/:path*",
}; 