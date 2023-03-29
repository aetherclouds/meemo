(async () => {

	const { EXTENSION_ALIAS } = await import('../const')
	const App = (await import('./Content.svelte')).default
	
	let app
	// https://stackoverflow.com/a/326076
	// avoids loading in iframes and anything that's not on the main window
	if (window.self === window.top) {
		const rootNode = document.createElement('div')
		rootNode.id = EXTENSION_ALIAS + '-root'
		const shadowRootNode = rootNode.attachShadow({mode: 'open'})
	
		const cssNode = document.createElement('link')
		cssNode.rel = 'stylesheet'	
		cssNode.href = chrome.runtime.getURL('js/style.css')
		shadowRootNode.appendChild(cssNode)
	
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
	})()