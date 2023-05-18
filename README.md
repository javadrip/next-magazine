This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Development server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

### Sanity Studio

Since Sanity Studio has been embedded into the app, there's no need to start a development server, build static bundle and preview production build on [localhost:3333](http://localhost:3333).

Although Sanity Studio can still be accessed with ```sanity dev```, ```sanity build``` and ```sanity start```, we can simply access Sanity Studio with this URL [http://localhost:3000/admin](http://localhost:3000/admin) after running one of the npm commands (```npm run dev```, ```npm run build``` or ```npm start```) on the app.

### Production Build
After finishing all the customization, you can create a production build by running this command.

```npm run build```
