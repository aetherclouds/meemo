import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const FOLDER_MAP = {
  'content': 'contentScript',
  'background': 'backgroundScript',
  'options': 'optionsPage',
} 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      configFile: './svelte.config.js'
    })
  ],
  build: {
    rollupOptions: {
      output: {
          sourcemap: false,
          // don't use this - we already have lib.fileName for that
          // entryFileNames: 'js/[name].js',
          chunkFileNames: 'js/[name].js',
          // mainly intended for css file(s)
          assetFileNames: '[ext]/[name].[ext]',
      },
    },
    emptyOutDir: false,
    outDir: "dist/contents",
    sourcemap: true,
    lib: {
      entry: {
        content: "./src/contentScript/content.js",
        options: "./src/optionsPage/options.mjs",
        background: "./src/backgroundScript/background.mjs",
      },
      fileName: (_, entryName) => {

        return `js/${FOLDER_MAP[entryName]}/${entryName}.js`;
      },
      formats: ["es"],
    },
  }
})
