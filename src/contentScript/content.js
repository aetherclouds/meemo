import { EXTENSION_ALIAS } from '../const';
import App from './Content.svelte';

let app
// https://stackoverflow.com/a/326076
// avoids loading in iframes and anything that's not on the main window
if (window.self === window.top) {
	const rootNode = document.createElement('div')
	rootNode.id = EXTENSION_ALIAS + '-root'
	const shadowRootNode = rootNode.attachShadow({mode: 'open'})
	// load svelte app
	app = new App({
		target: shadowRootNode,
		props: {	
			rootNode,
			shadowRootNode,
			parentDocument: document,
		},
	})
}


export default app