import { NextResponse } from "next/server";
import { auth } from "./lib/auth/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const { pathname } = request.nextUrl;

  const isAuthPage =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  const isPrivateRoute =
    pathname.startsWith("/add-room") ||
    pathname.startsWith("/my-bookings") ||
    pathname.startsWith("/my-listing") ||
    pathname.startsWith("/room-detailes");

  if (user && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!user && isPrivateRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/room-detailes/:path*",
    "/add-room",
    "/my-bookings",
    "/my-listing",
    "/login",
    "/register",
  ],
};
