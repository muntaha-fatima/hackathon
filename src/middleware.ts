// import { clerkMiddleware } from "@clerk/nextjs/server";


// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };




// import { clerkMiddleware, getAuth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// export default clerkMiddleware((req) => {
//   const { userId } = getAuth(req); // 

//   // Agar user logged in nahi hai toh usay /sign-in page pr bhej do
//   if (!userId) {
//     return NextResponse.redirect(new URL("/sign-in", req.url));
//   }

//   return NextResponse.next();
// });

// // Middleware har page pr chalega
// export const config = {
//   matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
// };



// import { clerkMiddleware } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// export default clerkMiddleware((req) => {
//   console.log("Middleware Running...");

//   // Agar user logged in nahi hai toh usay /sign-in page pr bhej do
//   if (!userId) {
//     return NextResponse.redirect(new URL("/sign-in", req));
//   }



//   return NextResponse.next();
// });

// export const config = {
//   matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
// };

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// // ✅ Public Routes Define Karein
// const isPublicRoute = createRouteMatcher(["/", "/login", "/signup"]);

// export default clerkMiddleware((auth, req) => {
//   if (!auth.userId && !isPublicRoute(req)) {
//     return NextResponse.redirect(new URL("/login", req.url)); // Agar login nahi toh redirect
//   }
// });

// // ✅ Middleware Ka Matcher
// export const config = {
//   matcher: ["/((?!_next|.*\\..*).*)"], // Ensure ke har route middleware se guzre
// };








import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// ✅ Public Routes Define Karein
const isPublicRoute = createRouteMatcher(["/", "/login", "/signup"]);

export default clerkMiddleware(async (auth, req) => {
  console.log("Auth Object:", auth); // Debugging ke liye check karein

  // ✅ User logged in hai ya nahi, yeh naya tareeqa hai
  if (!(await auth()).userId && !isPublicRoute(req)) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect if not logged in
  }
});

// ✅ Middleware Ka Matcher
export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // Ensure ke har route middleware se guzre
};