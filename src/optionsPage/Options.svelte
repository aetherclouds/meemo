<!-- 
 -->
<script>		
	import {AVAILABLE_LANGUAGES, DEFAULT_OPTIONS, OPTION_ORDER} from '../const'
	import {horizontalSlideDisconsiderBorder} from '../svelteTransition'

	let options = DEFAULT_OPTIONS
	let availableLanguages = AVAILABLE_LANGUAGES
	// load options
	chrome.storage.sync.get('options').then(result => {
			options = result.options || DEFAULT_OPTIONS
	})
	
	function updateOptions() {
		options = options

	}
	
	function syncOptions(newOptions) {
		if (newOptions) options = structuredClone(newOptions)
		// save options object to storage
		chrome.storage.sync.set({options})

		// let update scripts know that options have changed
		chrome.runtime.sendMessage({type: 'updateOptions', data: options})
	}

	function handleAddLanguage(target) {
		const languageCode = target.value
		// reset select so that it doesn't fall back to the only option available when there's only 1
		target.value = ''

		let selectedLanguages = options.selectedLanguages.value
		if (selectedLanguages.indexOf(languageCode) === -1) {
			selectedLanguages.push(languageCode)

			// svelte will only react to (re)assignments
			options.selectedLanguages.value = selectedLanguages
			availableLanguages = availableLanguages
	
			updateOptions()
		}
		
	}

	function handleFloatInput(target, optionTitle, type) {
		let value = target.value
		switch (type) {
			case 'number': {
				let parsedValue = parseFloat(value)
				value = parsedValue ? parsedValue : 1
			}
		}
		options[optionTitle].value = value
		updateOptions()
	}

	function handleRemoveLanguage(languageCode) {
		let selectedLanguages = options.selectedLanguages.value
		const indexOfLanguage = selectedLanguages.indexOf(languageCode)
		if (indexOfLanguage != -1) {
			selectedLanguages[indexOfLanguage] = undefined
			selectedLanguages.splice(indexOfLanguage, 1)

			options.selectedLanguages.value = selectedLanguages
			availableLanguages = availableLanguages
	
			updateOptions()
		}
	}

	function playOutlineEffect(type) {
		const typeToColor = {
			'save': '34d399',
			'reset': 'f87171'
		}
		const selectedColor = typeToColor[type]
		let outlineNode = document.createElement('div')
		outlineNode.style.cssText = `--fancy-outline-color: #${selectedColor};`
		outlineNode.classList.add('fancy-outline')
		document.body.appendChild(outlineNode)
		setTimeout(() => {
			document.body.removeChild(outlineNode)
		}, 2000)
	}


</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<!-- <Popup></Popup> -->
<main class="h-full">
	<div class="w-md mx-6 mb-6">
		<div class="flex w-full my-2 relative">
			<h1 class="font-extrabold text-3xl px-4 text-center text-zinc-900">OPTIONS</h1>
			<!-- cool technique i learned: make this absolute -->
			<div class="right-6 absolute h-full py-1 flex">
				<button 
				class="bg-green-400 bg-opacity-50 border-zinc-900 border-[1.5px] rounded-l py-1 px-1 h-full
				cursor-pointer ring-0 hover:ring-[1.5px] ring-zinc-400 transition-ring duration-100
				z-[2]"
				on:click={() => {
					syncOptions()
					playOutlineEffect('save')
				}}>
					<img src="../icons/save.svg" class="h-full" alt="save icon">
				</button>
				<button 
				class="bg-zinc-50 border-zinc-900 border-[1.5px] border-l-0 rounded-r py-1 px-1 h-full
				cursor-pointer ring-0 hover:ring-[1.5px] ring-zinc-400 transition-ring duration-100 
				z-[2] hover:[z-1]"
				on:click={() => {
					options = structuredClone(DEFAULT_OPTIONS)
					playOutlineEffect('reset')
				}}>
					<img src="../icons/reset.svg" class="h-full" alt="reset icon">
				</button>
			</div>
		</div>
		<div class="bg-zinc-50 border-zinc-900 border-[1.5px] rounded relative">
			<!-- option entries -->
			{#each OPTION_ORDER as option, i}
			<div class="px-4 py-3 border-zinc-900 {i+1<Object.keys(options).length ? 'border-b-[1.5px]' : ''}">
				<!-- top bar -->
				<div class="w-full flex">
					<div class="my-auto">
						<h2 class="text-xl font-medium text-zinc-900">{option}</h2>
						<h3 class="text-xs text-zinc-500 pr-2">{options[option].description}</h3>
					</div>
					{#if options[option].type == 'float'}
						<input type="number" required
						class="appearance-none outline-none border-zinc-900 bg-transparent my-auto ml-auto min-w-8 w-0 max-w-max border-[1.5px] rounded 
						placeholder-zinc-500 font-medium text-xl text-zinc-900 text-center py-0.5
						ring-0 ring-offset-0 hover:ring-[1.5px] focus:ring-offset-1 focus:ring-[1.5px] ring-zinc-400 ring-offset-zinc-50 transition-input-field duration-100" 
						style={`width: calc(${options[option].value.toString().length}ch + 1rem);`}
						on:input={(e) => {
							e.target.style.width = `calc(${e.target.value.length}ch + 1rem)`
						}}
						on:change={(e) => {
							handleFloatInput(e.target, option, 'number')
						}}
						value={options[option].value}>
					{:else if options[option].type == 'bool'}
						<input type="checkbox" required
						class="outline-none border-zinc-900 bg-transparent my-auto ml-auto border-[1.5px] rounded w-6 h-6
						ring-0 ring-offset-0 hover:ring-[1.5px] focus:ring-offset-1 focus:ring-[1.5px] ring-zinc-400 duration-100" 	
						bind:checked={options[option].value}>
					{/if}
				</div>
				<!-- bottom bar - only needed for certain types of options -->
				{#if (options[option].type == 'languageSelection')}
				<div class="mt-3 flex">
					{#if (options.selectedLanguages.value.length < availableLanguages.length)}
					<div class="focus-within:ring-offset-1 focus-within:ring-[1.5px] border-[1.5px] rounded border-zinc-900 relative max-w-full p-0.5 flex font-medium text-xl 
					cursor-pointer ring-0 hover:ring-[1.5px] ring-zinc-400 transition-ring duration-100"
					transition:horizontalSlideDisconsiderBorder={{axis: 'x', duration: 200}}
					>
							<!-- TODO: stop this hackery and use set fixed size -->
							<!-- added these just so we get the right sizing -->
							<img src="../data/flags/PT.svg" class="h-4.5 block mr-1 invisible"/>
							<p class="invisible">de</p>
							<div class="absolute h-full w-full left-0 top-0 ">

								<select name="yep" id="" class="absolute h-full w-full left-0 top-0 opacity-0"
								on:change={(e) => {
									handleAddLanguage(e.target)
								}}
								>
									<option hidden disabled selected></option>
									{#each AVAILABLE_LANGUAGES as languageCode}
									{#if !options.selectedLanguages.value.includes(languageCode)}
									<option value={languageCode}>{languageCode}</option>
									{/if}
									{/each}
								</select>
								<div class="h-full w-full relative flex pointer-events-none brounded">
									<span class="m-auto pointer-events-none">+</span>
								</div>
							</div>	
					</div>
					{/if}
					{#each AVAILABLE_LANGUAGES as language}
					{#if options[option].value.includes(language)}
					<button class="border-[1.5px] relative overflow-hidden max-w-full rounded border-zinc-900 p-0.5 flex font-medium text-xl text-center ml-1 language-box 
					cursor-pointer hover:ring-[1.5px] ring-red-400 ring-opacity-50 transition-ring duration-100"
					on:click={() => handleRemoveLanguage(language)}
					transition:horizontalSlideDisconsiderBorder={{axis: 'x', duration: 200}}
					>
						<img src="../data/flags/{language.toUpperCase()}.svg" class="rounded w-full h-4.5 block mr-0.5"/>
						<p class="align-middle my-auto lowercase">{language}</p>
					</button>
					{/if}
					{/each}
					
				</div>
				{/if}
			</div>
			{/each}
			<!-- TODO: credits & social media links -->

			<div class="absolute w-full h-full left-0 top-0 rounded bg-zinc-500 -z-[1] translate-x-1.5 translate-y-1.5 transform-gpu"></div>
		</div>
	</div>
</main>


<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(body) {
		@apply bg-zinc-100 relative overflow-x-hidden;
		font-family: 'Rubik', sans-serif;
	}	

	:global(.fancy-outline) {
		z-index: 3;
		position: fixed;
		pointer-events: none;
		border-color: var(--fancy-outline-color);
		/* bro. this css code used to work fine without this line. then SUDDENLY border wasn't showing
		 up and I had to add border-style. and I think it's not because of TW. WHAT?? */
		border-style: solid;
		border-radius: 8px;
		/* border-width: 3px; */
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation: 1s fancy-animation;
		animation-fill-mode: forwards;
	}

	@keyframes fancy-animation {
		from {
			border-width: 3px;
			width: 100vw;
			height: 100vh;
			opacity: 100%;
		}
		to {
			border-width: 0px;
			width: 90vw;
			height: 90vh;
			opacity: 0%;
		}
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

	/* select::-ms-expand {
    	display: none;
	} */

	input[type=number] {
		-moz-appearance:textfield; /* Firefox */
	}

	/* inspo: https://moderncss.dev/pure-css-custom-checkbox-style/ */
	input[type="checkbox"] {
		appearance: none;
		display: grid;
		place-content: center;
	}


	input[type="checkbox"]::before {
		transform-origin: center;
		clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);

		content: "";
		width: inherit;
		height: inherit;
		background-color: rgb(24 24 2);
		/* border-radius: 0.25rem;
		border-width: 1.5px;
		border-color: rgb(24 24 2); */
		transform: scale(0);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 100ms;
	}

	input[type="checkbox"]:checked::before {
		transform: scale(.4);
	}


</style>
