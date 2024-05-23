import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import webExtension from '@samrum/vite-plugin-web-extension';
import generateExtensionManifest from './generate_manifest';

const FOLDER_MAP = {
  'content': 'contentScript',
  'background': 'backgroundScript',
  'options': 'optionsPage',
} 

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview}) => {
  const browser = process.env.TARGET_BROWSER
    if (browser !== "chrome" 
    && browser !== "firefox"
  ) {console.error("provide a valid target browser as input."); process.exit(1)};
  
  return {
    plugins: [
      svelte({
        configFile: './svelte.config.js'
      }),
      webExtension({
        manifest: generateExtensionManifest(browser),
      }),
    ],
    publicDir: "assets",
    build: {
      rollupOptions: {
        // input: [
        //   "src/contentScript/contentScript.js",
        //   "src/optionsPage/options.mjs",
        //   "src/backgroundScript/background.mjs",
        // ],
        output: {
            // sourcemap: false,
            // don't use this - we already have lib.fileName for that
            entryFileNames: 'assets/[name].js',
            chunkFileNames: 'assets/[name].js',
            // mainly intended for css file(s)
            assetFileNames: 'assets/[name].[ext]',
        },
      },
      emptyOutDir: true,
      outDir: `dist-${browser}`,
      sourcemap: mode === "development",
      // lib: {
      //   entry: {
      //     content: "./src/contentScript/content.js",
      //     options: "./src/optionsPage/options.mjs",
      //     background: "./src/backgroundScript/background.mjs",
      //   },
      //   fileName: (_, entryName) => {

      //     return `js/${FOLDER_MAP[entryName]}/${entryName}.js`;
      //   },
      //   formats: ["es"],
      // },
  }
}})
