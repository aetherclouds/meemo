// import sveltePreprocess from "svelte-preprocess";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // https://github.com/sveltejs/svelte-preprocess
  // preprocess: sveltePreprocess(),
  // https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/preprocess.md
  preprocess: vitePreprocess(),

};
