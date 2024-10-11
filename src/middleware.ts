import { getToken } from "next-auth/jwt";
import withAuth from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "../i18nConfig";
enum authRoutes {
  signIn = "/signIn",
  signUp = "/signUp",
}

// next auth
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
  matcher: [
    "/profile/:path*",
    "/signIn",
    "/signUp",
    "/((?!api|static|.*\\..*|_next).*)",
  ],
};

// i18next
// <<<<<<< Tabnine <<<<<<<
export function middleware(request: NextRequest) {
  // return i18nRouter(request, i18nConfig);//-
  return i18nRouter(request, {
    //+
    ...i18nConfig, //+
    serverSetCookie: "always", // or "if-empty", "never"//+
  }); //+
}
// >>>>>>> Tabnine >>>>>>>// {"conversationId":"2b868d5e-f687-44f4-b0e1-7c8fe4737483","source":"instruct"}
