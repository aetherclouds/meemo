<!-- TODO:
    sync last selected field for input content so that user doesn't have to select it next time
    create a selector for which field input should get pasted into
    create a nicer-looking focus selection
-->
<script>
    import { onMount, prevent_default } from "svelte/internal";
    import {AnkiConnectionError, AnkiResponseError, getDeckNames, getModelFieldNames, getModelNames} from '../ankiConnectUtil'

    export let parentDocument = document
    export let contentToSave = 'asd'
    let popupNode
    let isPopupBeingDragged = false

    let cardModelSelect
    let deckNameSelect
    
    let cardDecks = []
    let cardModels = []
    let cardModelFields = ['testing', 'yep']


    let showConnectionError = false

    onMount(async () => {
        try {
            cardDecks = await getDeckNames()
            cardModels = await getModelNames()
            console.log(cardDecks)
        } catch (err) {
            switch (err.constructor) {
                // TODO: fill these
                case AnkiConnectionError:
                    break
                case AnkiResponseError:
                    break
            }
        }

    })

    function handleSubmit(e) {
        // TODO: create card from data
        const formData = new FormData(e.target)

    }

    let initialDragOffsetX, 
        initialDragOffsetY 

    function handleDragMouseDown(e) {
        const popupRect = popupNode.getBoundingClientRect()
        console.log(popupRect.left, popupRect.top, 'yipee')
        initialDragOffsetX = - e.pageX + popupRect.left
        initialDragOffsetY = - e.pageY + popupRect.top 
        document.addEventListener('mousemove', handleDragMouseMove)
        document.addEventListener('mouseup', handleDragMouseUp)
        isPopupBeingDragged = true
    }
    
    function handleDragMouseUp(e) {
        isPopupBeingDragged = false

        document.removeEventListener('mousemove', handleDragMouseMove)
        document.removeEventListener('mouseup', handleDragMouseUp)
    }
    
    function handleDragMouseMove(e) {
        e.preventDefault()
        // TODO: drag could have an animation
        popupNode.style.left = e.pageX + initialDragOffsetX + 'px'
        popupNode.style.top = e.pageY + initialDragOffsetY + 'px'
    }

    async function onModelChange(e) {
        updateModelFields(e.target.value)
        console.log('a',cardModelFields)
    }

    function updateModelFields(modelName) {
        cardModelFields = getModelFieldNames(modelName)
    }
</script>

<div class="absolute bg-zinc-800 min-w-[20rem] w-[20rem] rounded-[0.3rem] blur-bg" bind:this={popupNode}>
    <div draggable class="w-full h-min py-1.5 rounded-[0.3rem] border-zinc-600 box-border flex cursor-move
    hover:bg-zinc-500-trs transition-colors duration-100
    " on:mousedown={handleDragMouseDown} on:mouseup={handleDragMouseUp}>
        <div class="grid grid-rows-2 grid-cols-4 mx-auto w-max justify-center gap-x-1 gap-y-1 my-auto">
            <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem]"></div>
            <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem]"></div>
            <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem]"></div>
            <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem]"></div>
            <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem]"></div>
            <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem]"></div>
            <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem]"></div>
            <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem]"></div>
        </div>
    </div>
    <div class="p-5 flex flex-col max-h-xs h-xs overflow-auto">
        <h1 class="text-blue-gradient font-bold text-xl mx-auto mb-5">
            Add2Anki
        </h1>
        <form action="" class="text-zinc-300" on:submit|preventDefault={handleSubmit}>
            <div class="w-full grid grid-cols-2 mb-3">
                <div class="pr-2">
                    <label for="deck" class="block mb-0.5 label-on-focus">
                        <span class="label">Card Deck</span>
                        <div class="relative">
                            <select name="deck" id="deck" class="w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600 truncate"
                            bind:this={deckNameSelect}
                            >
                                {#each cardDecks as deckName}
                                    <option value={deckName} class="bg-zinc-800">{deckName}</option>
                                {/each}
                            </select>  
                            <select disabled class="absolute w-full h-full top-0 left-0 bg-transparent border border-transparent text-zinc-500 pointer-events-none"></select>
                        </div>
                    </label>  
                </div>
                <div class="pl-2">
                    <label for="model" class="block mb-0.5">Card Model</label>  
                    <div class="relative">
                        <select name="model" id="model" class="w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600 truncate"
                        on:change={onModelChange}
                        bind:this={cardModelSelect}
                        >
                            {#each cardModels as modelName}
                                <option value={modelName} class="bg-zinc-800">{modelName}</option>
                            {/each}
                        </select>
                        <select disabled class="absolute w-full h-full top-0 left-0 bg-transparent border border-transparent text-zinc-500 pointer-events-none"></select>
                    </div>
                </div>
            </div>
            {#each cardModelFields as cardField}
                <label for={cardField} class="block mb-0.5">{cardField}</label>
                <textarea name={cardField} id={cardField} cols="0" rows="3" class="w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600 mb-3">{contentToSave}</textarea>
            {/each}
            <div class="opacity-0 block mb-0.5">yep</div>
            <button type="submit" class="w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600 text-sm py-1">Add that thing!</button>        
        </form>
    </div>

</div>

<style windi:preflights:global windi:safelist:global>
    .blur-bg {
        -webkit-backdrop-filter: blur(3px); 
        backdrop-filter: blur(3px);
    }

    .text-blue-gradient {
        background-image: linear-gradient(to bottom, #63AAE1, #466FDA);
        background-size: 100%;
        background-repeat: repeat;

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }

    .bg-zinc-800-trs {
        background-color: rgba(39, 39, 42, 0.3);
    }

    .hover\:bg-zinc-500-trs:hover {
        background-color: rgba(113, 113, 122, 0.3);
    }

    .bg-zinc-500-trs {
        background-color: rgba(113, 113, 122, 0.3);
    }

    .label {
        transition: padding-left 100ms;
    }

    .label-on-focus:focus-within > .label {
        padding-left: 10px;
    }
</style>
