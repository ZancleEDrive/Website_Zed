import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || 'main',
  clientId: '<3394f7f0-2fca-4154-809d-4706c1d8a222>',
  token: '<9350cbe0d27eb7c1a0be40716b77b072ebc94682>',
  schema: {
    collections: [
      // Define your collections here
    ],
  },
});
