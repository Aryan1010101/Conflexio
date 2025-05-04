import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/sign-in(.*)?',
    '/sign-up(.*)?',
    '/_next(.*)?',
    '/favicon.ico',
    '/icons(.*)?',
  ],
});

export const config = {
  matcher: [
    '/((?!_next/static|favicon.ico|icons).*)',
    '/(api|trpc)(.*)',
  ],
};
