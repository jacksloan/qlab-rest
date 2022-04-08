import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

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
    paths: {
      base: dev ? '' : '/voice-cmd',
    },
    adapter: adapter({
      assets: '../qlab-rest/public/voice-cmd',
      pages: '../qlab-rest/public/voice-cmd',
    }),
  },
};

export default config;
