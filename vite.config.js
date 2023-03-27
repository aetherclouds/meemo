import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: {
        content: "./src/content.js",
        logger: "./src/logger.js",
      },
      formats: ["es", "cjs"],
    },
  }
})
