import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import webExtension from "@samrum/vite-plugin-web-extension";
import { getManifest } from "./src/manifest.js";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const browser = process.env.TARGET_BROWSER
  if (browser !== "chrome" 
    && browser !== "firefox"
  ) {console.error("provide a valid TARGET_BROWSER environment variable."); process.exit(1)};
  const manifest_version = browser === 'firefox' ? 2 : 3

  return {
    plugins: [
      svelte(),
      webExtension({
        manifest: getManifest(manifest_version),
      }),
    ], 
    resolve: {
      alias: {
        "~": new URL("./src", import.meta.url).pathname,
      },
    },
    build: {
      sourcemap: mode === "development",
      outDir: `dist-${browser}`,
      rollupOptions: {
        output: {
          // this is basically the default, except w/o hashes, so we don't have
          // to reload the manifest on the browser
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`
        }
      } 
    }
  };
});
