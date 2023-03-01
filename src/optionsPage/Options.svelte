<script>		
	import {AVAILABLE_LANGUAGES, DEFAULT_OPTIONS} from '../const'
	let options = DEFAULT_OPTIONS
	// load options
	chrome.storage.sync.get('options').then(result => {
		options = result.options || DEFAULT_OPTIONS
	})

	function updateOptions(option, value) {
		options[option].value = value

		// save options object to storage
		chrome.storage.sync.set({options})

		// let update scripts know that options have changed
		chrome.runtime.sendMessage({type: 'updateOptions'})
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<main class="h-full">
	<div class="w-md mx-6 mb-6">
		<div class="flex">
			<h1 class="font-extrabold text-3xl my-2 px-4 text-center text-zinc-900">OPTIONS</h1>
			<!-- <div>
				<button on:click={() => {
					
				}}>save</button>
				<button on:click={() => {
					options=DEFAULT_OPTIONS
				}}>reset</button>
			</div> -->
		</div>
		<div class="bg-zinc-50 border-zinc-900 border-1.5 rounded">
			<!-- option entries -->
			{#each Object.entries(options) as [optionTitle, optionDetails], i}
			<div class="px-4 py-3 border-zinc-900 {i+1<Object.keys(options).length ? 'border-b-1.5' : ''}">
				<!-- top bar -->
				<div class="w-full flex">
					<div class="my-auto">
						<h2 class="text-xl font-medium text-zinc-900">{optionTitle}</h2>
						<h3 class="text-xs text-zinc-500">{optionDetails.description}</h3>
					</div>
					{#if optionDetails.type != 'languageSelection'}
					<input type="number" 
					class="appearance-none outline-none border-zinc-900 bg-transparent my-auto ml-auto min-w-8 w-0 max-w-max border-1.5 rounded 
					placeholder-zinc-500 font-medium text-xl text-zinc-900 text-center py-0.5
					ring-0 hover:ring-2 focus:ring-offset-1 focus:ring-2 ring-zinc-400 transition duration-100
					"
					on:input={(e) => {
						console.log(e)
						e.target.style.width = `calc(${e.target.value.length}ch + 1rem)`
					}}
					value={optionDetails.value}>
					{/if}
				</div>
				<!-- bottom bar - only needed for certain types of options -->
				{#if (optionDetails.type == 'languageSelection')}
				<div class="mt-3 flex">
					<div class="border-1.5 relative max-w-full rounded border-zinc-900 p-0.5 flex font-medium text-xl cursor-pointer ring-0 hover:ring-2 ring-zinc-400 transition duration-100">
							<div class="absolute h-full w-full left-0 top-0 flex">

								<!-- TODO: hide select behind `+` symbol -->
								 <!-- TODO: make this onselect work -->
								<select name="yep" id="" class="absolute h-full w-full left-0 top-0 display-none transparent"
								on:select={}
								>
									<option hidden disabled selected></option>
									{#each AVAILABLE_LANGUAGES as languageCode}
									<option value={languageCode}>{languageCode}</option>
									{/each}
								</select>
								<div class="m-auto align-middle pointer-events-none z-50">
									+
								</div>
							</div>
							<!-- added these just so we get the right sizing -->
							<img src="../data/flags/PT.svg" class="h-4.5 block mr-1 invisible"/>
							<p class="invisible">de</p>
					</div>
					{#each optionDetails.value as selectedLanguage}
					<div class="border-1.5 relative overflow-hidden max-w-full rounded border-zinc-900 p-0.5 flex font-medium text-xl text-center">
						<img src="../data/flags/{selectedLanguage.toUpperCase()}.svg" class="rounded w-full h-4.5 block mr-1"/>
						<p class="align-middle my-auto">{selectedLanguage.toLowerCase()}</p>
					</div>
					{/each}
					
				</div>
				{/if}
			</div>
			{/each}
		</div>
	</div>
</main>


<style windi:preflights:global windi:safelist:global>
	:global(body) {
		@apply bg-zinc-100;
		font-family: 'Rubik', sans-serif;
	}
	.border-1\.5 {	
		border-width: 1.5px;
	}
	.border-b-1\.5 {
		border-bottom-width: 1.5px;
	}

	.text-xl {
		font-size: 1.1rem;
		line-height: .8rem;
	}

	.text-xs {
		font-size: 0.55rem;
		line-height: 0.8rem;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		/* display: none; <- Crashes Chrome on hover */
		-webkit-appearance: none;
		margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
	}

	select::-ms-expand {
    	display: none;
	}

	input[type=number] {
		-moz-appearance:textfield; /* Firefox */
	}
</style>
