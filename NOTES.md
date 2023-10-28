### Create NextJs project  
- Use the command ```npx create-next-app```
- For this project, we're specifically using the version 13.4  

### Client and Server Components
- By default, all components in Next.js are server components
- To turn a server component into a client component, we simply
add ```'use client'``` at the top of the code of the component.
- If a client component depends on other components, these also become client components 

### Routing and Navigation  

Next.js has a few special files:  
- page.tsx: publicly available, the router looks for this file in a page directory,
- layout.tsx: defines a common layout for all pages
- loading.tsx: shows loading UIs
- route.tsx: creates APIs
- not-found.tsx: shows custom errors
- error.tsx: shows general custom error pages

Catch-all segment makes use of ```slug``` to capture an array of parameters  
Using ```[[...slug]]``` makes the parameters optional.  
Using ```[...slug]``` without parameters yields a 404 error page.