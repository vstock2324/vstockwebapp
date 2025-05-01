import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { jwtDecode, JwtPayload } from "jwt-decode";
interface ExtendedJwtPayload extends JwtPayload {
  user_role?: string;
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: DO NOT REMOVE auth.getUser()
  //////////////////////////////////////////////////////////////

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    if (
      request.nextUrl.pathname.startsWith("/admin/dashboard")
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    } else if (request.nextUrl.pathname.startsWith("/pages/projects")) {
      const url = request.nextUrl.clone();
      url.pathname = "/pages/login";
      return NextResponse.redirect(url);
    }
  } else if (user) {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw new Error(error.message);
    if (!data?.session) throw new Error("No Session found");
    const jwt = jwtDecode<ExtendedJwtPayload>(data?.session.access_token);
    if (
      jwt?.user_role !== "admin" &&
      request.nextUrl.pathname.startsWith("/admin")
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/pages/home";
      return NextResponse.redirect(url);
    } else if (
      jwt?.user_role !== "admin" &&
      (request.nextUrl.pathname.startsWith("/pages/login") ||
        request.nextUrl.pathname.startsWith("/pages/auth"))
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/pages/projects";
      return NextResponse.redirect(url);
    } else if (
      jwt?.user_role === "admin" &&
      (request.nextUrl.pathname.startsWith("/admin/login") ||
        request.nextUrl.pathname.startsWith("/admin/signup"))
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/dashboard/users";
      return NextResponse.redirect(url);
    } else if (
      jwt?.user_role === "admin" &&
      (request.nextUrl.pathname.startsWith("/pages/login") ||
        request.nextUrl.pathname.startsWith("/pages/auth"))
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/pages/home";
      return NextResponse.redirect(url);
    }
  }
  ///////////////////////////////////////////////////////

  // IMPORTANT: You *must* return the supabaseResponse object as it is.
  // If you're creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!

  return supabaseResponse;
}
