import { getToken } from "next-auth/jwt";
import withAuth from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

enum authRoutes {
  signIn = "/signIn",
  signUp = "/signUp",
}

export default withAuth(
  async function middleware(request: NextRequest) {
    const pathName = request.nextUrl.pathname;
    const isAuth = await getToken({ req: request });
    const protectedRoutes = ["/profile"];
    const isAuthRoute =
      pathName.startsWith(authRoutes.signIn) ||
      pathName.startsWith(authRoutes.signUp);
    const isProtectedRoute = protectedRoutes.some((route) =>
      pathName.startsWith(route)
    );
    if (!isAuth && isProtectedRoute) {
      return NextResponse.redirect(new URL(authRoutes.signIn, request.url));
    }

    if (isAuth && isAuthRoute) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/profile/:path*", authRoutes.signIn, authRoutes.signUp],
};
