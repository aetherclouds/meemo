<script>
    import { onMount, prevent_default } from "svelte/internal";
    import {getDeckNames, getModelNames} from '../ankiConnectUtil'

    export let parentDocument = document;
    let popupNode
    let isPopupBeingDragged = false
        // TODO: gather data from ankiconnect
    let ankiCardDecks = []
    let ankiCardModels = []
    let cardModelFields = ['testing', 'yep']

    onMount(async () => {
        ankiCardDecks = await getDeckNames()
        console.log(ankiCardDecks.body)
    })

    function handleSubmit(e) {
        // TODO: create card from data
        const formData = new FormData(e.target)

    }

    let initialDragOffsetX, 
        initialDragOffsetY 

    function handleDragMouseDown(e) {
        console.log('hell yeah')
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
</script>

<div class="absolute bg-zinc-800 min-w-[20rem] rounded-[0.3rem] blur-bg" bind:this={popupNode}>
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
                    <label for="deck" class="block">Card Deck</label>  
                    <div class="relative">
                        <select name="deck" id="deck" class="w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600">
                            {#each ankiCardDecks as deckName}
                                <option value={deckName}>{deckName}</option>
                            {/each}
                        </select>  
                        <select disabled class="absolute w-full h-full top-0 left-0 bg-transparent border border-transparent text-zinc-500 pointer-events-none"></select>
                    </div>
                </div>
                <div class="pl-2">
                    <label for="model" class="block">Card Model</label>  
                    <div class="relative">
                        <select name="model" id="model" class="w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600">
                            {#each ankiCardModels as modelName}
                                <option value={modelName}>{modelName}</option>
                            {/each}
                        </select>
                        <select disabled class="absolute w-full h-full top-0 left-0 bg-transparent border border-transparent text-zinc-500 pointer-events-none"></select>
                    </div>
                </div>
            </div>
            {#each cardModelFields as cardField}
                <label for={cardField} class="block">{cardField}</label>
                <textarea name={cardField} id={cardField} cols="0" rows="3" class="w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600 mb-3"></textarea>
            {/each}
            <div class="opacity-0 block">yep</div>
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
</style>
