<!-- TODO:
    sync last selected field for input content so that user doesn't have to select it next time
    create a selector for which field input should get pasted into
    create a nicer-looking focus selection
-->
<script>
    import { onMount, prevent_default } from "svelte/internal";
    import { slide } from "svelte/transition";
    import {AnkiConnectionError, AnkiResponseError, getDeckNames, getModelFieldNames, getModelNames} from '../ankiConnectUtil'
    import { horizontalSlide } from "../svelteTransition";

    export let parentDocument = document
    export let contentToSave = 'asd'
    let popupNode
    let isPopupBeingDragged = false

    let cardModelSelect
    let deckNameSelect
    
    let cardDecks = []
    let cardModels = []
    let cardModelFields = {}
    let cardModelFieldsShouldSave = {
        'test': {

        }
    }
    // TODO: upon save, sync field content
    // TODO: also, doh, restore it
    // TODO: make field show "Will save field." so that ppl know it
    let fieldSavedData = {}
    let errorType = ''
    let timeUntilRetry = 5

    async function tryAnkiConnectionLoop() {
        try {
            const newCardDecks = await getDeckNames()
            const newCardModels = await getModelNames()
            if (newCardDecks) console.log('yep')
            if (!(newCardDecks && newCardModels)) {
                throw new AnkiResponseError()
            } else {
                cardDecks = newCardDecks
                cardModels = newCardModels
                errorType = ''

                if (cardModels.length > 1) {
                    updateModelFields(cardModels[0])
                }
            }
        } catch (err) {
            console.error(err)
            switch (err.constructor) {
                // TODO: fill these
                case AnkiConnectionError:
                    errorType = 'connection'
                    break
                case AnkiResponseError:
                    errorType = 'response'
                    break
                default:
                    errorType = 'unknown'
                    break
            }

            timeUntilRetry = 5
            let countdown = setInterval(() => {
                timeUntilRetry-= 1
                if (timeUntilRetry == 0) {
                    tryAnkiConnectionLoop()
                    clearInterval(countdown)
                }
            }, 1000)
        }
    }

    onMount(tryAnkiConnectionLoop)

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

    async function onModelSelectChange(e) {
        updateModelFields(e.target.value)
        console.log('a',cardModelFields)
    }

    async function updateModelFields(modelName) {
        const fields = await getModelFieldNames(modelName)
        // TODO: get saved fields from sync
        const savedFields = getSyncModelFieldsValues(modelName)
        // cardModelFields = fields.reduce((obj, field) => {
        //     savedField = savedFields[field]
        //     return (obj[field]={value: savedField || '', save: savedFields ? true : false},obj)
        // }, {})
        // TODO: THIS IS A TEMPORARY REPLACEMENT
        cardModelFields = fields.reduce((obj, field) => (obj[field]={value: '', save: false},obj), {})

    }

    const replacementString = '$replace$'
    function onFieldInput(e) {
        const content = e.target.innerText
        const idxOfReplaceable = content.indexOf(replacementString)
        let newContent
        if (idxOfReplaceable != -1) {
            newContent = content.replaceAll('$replace$', '<span class="replaceable">$replace$</span>') 
            cardModelFieldsShouldSave[e.target.dataset.fieldName] = true
        } else {
            newContent = content
            cardModelFieldsShouldSave[e.target.dataset.fieldName] = false
        }
        console.log('yeah mf', e)
        console.log('yeah mf2', e.target)
        e.target.previousElementSibling.innerHTML = newContent
    }
</script>

<div class="absolute" bind:this={popupNode}>
    <div class="bg-zinc-800 min-w-[20rem] w-[20rem] max-w-[20rem] rounded-[0.3rem] blur-bg">
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
            <!-- TODO: warning dialog -->
            {#if errorType}
            <div class="rounded-[0.3rem] border border-red-400 text-zinc-300 px-2 py-1 mb-3 transition flex flex-col h-max text-xs hyphens-auto"
                transition:horizontalSlide={{axis: 'y'}}
            >
                <div>
                {#if errorType == 'connection'}
                    There has been a connection error. Make sure that Anki is open, and that <a class="text-blue-400 underline" href="https://ankiweb.net/shared/info/2055492159" target="_blank">AnkiConnect</a> is installed & running.
                {:else if errorType == 'response'}
                    There has been a response error. AnkiConnect is responding but is not working properly.
                {:else}
                    There has been an uknown error. ¯\_(ツ)_/¯
                {/if}
                </div>
                <div class="block mx-auto text-xs">retrying in {timeUntilRetry} second(s) . . .</div>
            </div>
            {/if}
            <form action="" class="text-zinc-300" on:submit|preventDefault={handleSubmit}>
                <div class="w-full grid grid-cols-2 mb-3">
                    <div class="pr-2">
                        <label for="deck" class="block mb-0.5 label-on-focus">Card Deck</label>
                        <div class="relative">
                            <select name="deck" id="deck" class="w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600 truncate outline-none focus:border-blue-400"
                            bind:this={deckNameSelect}
                            >
                                {#each cardDecks as deckName}
                                    <option value={deckName} class="bg-zinc-800">{deckName}</option>
                                {/each}
                            </select>  
                            <select disabled class="absolute w-full h-full top-0 left-0 bg-transparent border border-transparent text-zinc-500 pointer-events-none"></select>
                        </div>
                    </div>
                    <div class="pl-2">
                        <label for="model" class="block mb-0.5">Card Model</label>  
                        <div class="relative">
                            <select name="model" id="model" class="w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600 truncate outline-none focus:border-blue-400"
                            on:change={onModelSelectChange}
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
                
    
                {#each Object.entries(cardModelFields) as [fieldTitle, fieldDetails]}
                <!-- TODO: show "will save" small text -->
                    <label for={fieldTitle} class="block mb-0.5">{fieldTitle}</label>
                    <div class="relative w-full rounded bg-zinc-500-trs mb-3" data-fieldName={fieldTitle} id={fieldTitle}>
                        <div class="absolute size-inherit top-0 left-0 pointer-events-none overflow-clip px-1 border border-transparent"></div>
                        <div contenteditable="true" on:input={onFieldInput} class="webkit-text-transparent px-1 border border-zinc-600 rounded-[0.3rem] appearance-none outline-none  focus:border-blue-400 transition-colors"></div>
                    </div>
                {/each}
                <div class="opacity-0 block mb-0.5">yep</div>
                <button type="submit" class="w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600 text-sm py-1 appearance-none outline-none hover:border-blue-400 focus:border-blue-400 transition-colors">Add that thing!</button>        
            </form>
        </div>
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

    :global(.replaceable) {
        @apply text-blue-400;
    }
    
    .size-inherit {
        width: inherit;
        height: inherit;
        word-break: break-all;
    }

    .webkit-text-transparent {
        -webkit-text-fill-color: transparent;
    }

    .focus\:cool-border:focus {
        border-style: solid;
    }
</style>
