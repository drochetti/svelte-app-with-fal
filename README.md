# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Set with fal.ai

You need to add your `FAL_KEY` to the envinroment before running the server.

1. Go to `https://fal.ai` and get one, in case you haven't done that yet
1. Create a `.env.local` file with `FAL_KEY=YOUR_FAL_API_KEY`. See `.env.example`

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
