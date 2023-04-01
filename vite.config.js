import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

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
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: {
        content: "./src/contentScript/content.js",
        options: "./src/optionsPage/options.mjs",
        background: "./src/backgroundScript/background.mjs",
      },
      fileName: (_, entryName) => {
        console.log('entryName:', entryName)
        const folderMap = {
          'content': 'contentScript',
          'background': 'backgroundScript',
          'options': 'optionsPage',
        } 
        return `js/${folderMap[entryName]}/${entryName}.js`;
      },
      formats: ["es"],
    },
  }
})
