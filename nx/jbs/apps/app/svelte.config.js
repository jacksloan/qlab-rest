import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    prerender: {
      default: true,
    },
    adapter: adapter({
      assets: '../../dist/apps/app/build',
      pages: '../../dist/apps/app/build',
    }),
  },
};

export default config;
