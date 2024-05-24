import renderContent from "../renderContent";
import App from "./App.svelte";

renderContent(import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS, (appContainer, shadowRoot) => {
  new App({
    target: shadowRoot,
    props: {	
			containerNode: appContainer,
			parentDocument: document,
		},
  });
});
