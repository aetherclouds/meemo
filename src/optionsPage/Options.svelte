<script>		
	let settings = {
		UISize: 1,
		distanceToMouse: 8,
	}
	
	chrome.runtime.sendMessage({type: 'getSettings'}, response => {
        if (response.settings) {
			settings = response.settings
        }
    })
</script>

<main class="w-full">
	<p>testing!!!</p>
	<button onclick={() => {
		chrome.runtime.sendMessage({type: 'saveSettings', data: settings}, response => {
			// TODO: saving was succesfull
		})
	}}>

	</button>
</main>


<style windi:preflights:global windi:safelist:global>
</style>
