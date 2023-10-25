## Create NextJs project  
- Use the command ```npx create-next-app```
- For this project, we're specifically using the version 13.4  

## Client and Server Components
- By default, all components in Next.js are server components
- To turn a server component into a client component, we simply
add ```'use client'``` at the top of the code of the component.
- If a client component depends on other components, these also become client components 