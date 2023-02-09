import App from './Content.svelte';

const EXTENSION_ALIAS = 'genderio'

const rootNode = document.createElement('div')
rootNode.id = EXTENSION_ALIAS + '-root'
const shadowRoot = rootNode.attachShadow({mode: 'open'})
// load svelte app
const app = new App({
	target: shadowRoot,
	props: {
		rootNode,
		parentDocument: document
	}
});

export default app;