# NextAuth Session Access Outside API Route

This example demonstrates a common issue when working with NextAuth.js sessions: attempting to access the session using `unstable_getServerSession` outside of an API route.

The `unstable_getServerSession` function requires the `ctx` object, which is only available within API routes. Accessing it in a page component will result in undefined behavior.