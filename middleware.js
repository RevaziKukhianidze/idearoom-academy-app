import { NextResponse } from "next/server";

export function middleware(request) {
  try {
    // Log all requests for debugging
    console.log(
      `${new Date().toISOString()} - ${request.method} ${request.url}`
    );

    // Add security headers
    const response = NextResponse.next();

    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("Referrer-Policy", "origin-when-cross-origin");

    return response;
  } catch (error) {
    console.error("Middleware error:", error);

    // Return error response
    return new NextResponse(
      JSON.stringify({
        error: "სერვერის შეცდომა - გთხოვთ სცადოთ მოგვიანებით",
        timestamp: new Date().toISOString(),
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export const config = {
  matcher: [
    // Match all API routes
    "/api/:path*",
    // Match all pages except static files
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
