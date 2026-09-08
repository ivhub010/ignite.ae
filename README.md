# IGNITE — Next.js 16.3

App Router + React 19 + TypeScript. Turbopack is the default dev/build bundler in Next 16.

## Requirements
Node.js 20.9+ (22 LTS recommended)

## Getting started

    npm install
    npm run dev

Open http://localhost:3000

## Routes

| Route | Page |
|---|---|
| /              | Homepage |
| /about         | Who we are |
| /events        | Events |
| /blog          | News & insights |
| /contact       | Contact |
| /pink-is-punk  | Pink is Punk |
| /fitness       | Fitness & Wellness |
| /consultancy   | Consultancy |
| /surface       | Surface |
| /homespa       | Homespa |

## External divisions

These routes redirect to their own sites (see next.config.ts):

| Route | Destination |
|---|---|
| /corporate-wellness | https://ignite-wellness.com/ |
| /team-building      | https://igniteteambuilding.com/ |
| /water-sports       | https://ignitewatersports.com/ |
| /kids               | https://ignitekids.com/ |

The header overlay and footer link the same four divisions directly, opening in a new tab.

## Notes for Next 16
- params / searchParams are Promises. No page here uses them; await them if you add a dynamic route.
- Fonts load via next/font/google in app/layout.tsx.
- Brand fonts (Aaux Pro, Kelson Sans) go in public/assets/fonts/ with @font-face added to app/globals.css, or wire them through next/font/local.
