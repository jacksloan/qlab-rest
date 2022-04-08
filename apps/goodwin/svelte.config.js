import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: true,
  }),

  kit: {
    prerender: {
      default: true,
    },
    adapter: adapter({
      assets: '../qlab-rest/public/goodwin',
      pages: '../qlab-rest/public/goodwin',
    }),
  },
};

export default config;
