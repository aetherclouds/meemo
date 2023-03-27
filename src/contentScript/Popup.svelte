<!-- TODO:
    sync last selected field for input content so that user doesn't have to select it next time
    create a selector for which field input should get pasted into
    create a nicer-looking focus selection
-->
<script>
    import { onMount, prevent_default } from "svelte/internal";
    import { slide } from "svelte/transition";
    import {addNote, AnkiConnectionError, AnkiResponseError, getDeckNames, getModelFieldNames, getModelNames} from '../ankiConnectUtil'
    import { EXTENSION_ALIAS } from "../const";
    import { horizontalSlide, horizontalSlideDisconsiderBorder } from "../svelteTransition";

<<<<<<< HEAD
    export let staticHoverNode
=======
>>>>>>> parent of a21d6f5 (fixed readme (yep), progress on popup)
    export let parentDocument = document
    
    export let contentToSave

    export let initialX = 0
    export let initialY = 0
    let popupNode
    let isPopupBeingDragged = false

    let cardModelSelect
    let deckNameSelect
    
    let cardDecks = ['loading...']
    let cardModels = ['loading...']
    let cardModelFieldsData = {}
    // TODO: upon save, sync field content
    // TODO: also, doh, restore it
    let messageType = ''
<<<<<<< HEAD
    let canSubmit = false
    let warnClose = false
    
    onMount(() => {
        popupNode.style.left = initialX + 'px'
        popupNode.style.top = initialY + 'px'
        tryAnkiConnectionLoop()
        parentDocument.addEventListener('mouseup', handleGeneralMouseUp)
    })
=======
>>>>>>> parent of a21d6f5 (fixed readme (yep), progress on popup)

    async function tryAnkiConnectionLoop(isFirstTime = true) {
        try {
            const newCardDecks = await getDeckNames()
            const newCardModels = await getModelNames()
            if (!(newCardDecks && newCardModels)) {
                throw new AnkiResponseError()
            } else {
                cardDecks = newCardDecks
                cardModels = newCardModels

                canSubmit = true

                if (cardModels.length > 1) {
                    updateModelFields(cardModels[0])
                }

                if (!isFirstTime) {
                    messageType = 'success'
                  setTimeout(() => {messageType = ''}, 5000)
                } else {
                    messageType = ''
                }
          }
        } catch (err) {
            handleAnkiConnError(err, () => tryAnkiConnectionLoop(false))
            
        }
    }

    onMount(() => {
        popupNode.style.left = initialX + 'px'
        popupNode.style.top = initialY + 'px'
        tryAnkiConnectionLoop()
    })

    function handleAnkiConnError(error, callback) {
        console.error(error)
<<<<<<< HEAD
        switch (error.constructor) {
            case AnkiConnectionError:
            messageType = 'connection'
            break
        case AnkiResponseError:
            messageType = 'response'
            break
        default:
            messageType = 'unknown'
            break
        }
=======
            switch (error.constructor) {
                // TODO: fill these
                case AnkiConnectionError:
                    messageType = 'connection'
                    break
                case AnkiResponseError:
                    messageType = 'response'
                    break
                default:
                    messageType = 'unknown'
                    break
            }
>>>>>>> parent of a21d6f5 (fixed readme (yep), progress on popup)

            let secsUntilRetry = 5
            let countdown = setInterval(() => {
                secsUntilRetry-= 1
                if (secsUntilRetry == 0) {
                    if (callback) callback()
                    clearInterval(countdown)
                }
            }, 1000)
    }

    async function handleSubmit(e) {
        const formData = new FormData(e.target)
        const fieldsData = Object.keys(cardModelFieldsData).reduce((obj, fieldName) => (
            obj[fieldName]=cardModelFieldsData[fieldName].value.replaceAll('$replace$', contentToSave),
            obj
            ), {})
        try {
            const callbackResult = await addNote(formData.get('deckName'), formData.get('modelName'), fieldsData)
        } catch (err) {
            handleAnkiConnError(err)
        }
        console.log('result', callbackResult)
        // sync selections
        syncDeckAndModelChoices(formData.get('deckName'), formData.get('modelName'))
        syncFields(fieldsData)
    }

    function syncDeckAndModelChoices(deckName, modelName) {
        chrome.storage.sync.set({selectedDeck: deckName, selectedModel: modelName})
    }
    function syncFields(fieldsData) {
        /* 
        I suppose there's no documentation, but for Array.reduce(), if you return 2 items then 1st value should be the "accumulation function",
        and the 2nd should be the accumulation itself. so for an object, an assignment and the object itself.
        if you only return 1 object, it should be the accumulation. quirky, huh?
        */
        Object.keys(fieldsData).reduce((obj, fieldName) => {
            if (fieldsData[fieldName].shouldSave) {
                return (obj[fieldName],obj)
            } else {
                return obj
            }
        }, {})
        chrome.storage.sync.set({savedFields: fieldsData})
    }

    let initialDragOffsetX, 
        initialDragOffsetY
    function handleDragMouseDown(e) {
        const popupRect = popupNode.getBoundingClientRect()
        initialDragOffsetX = - e.pageX + popupRect.left
        initialDragOffsetY = - e.pageY + popupRect.top 
        parentDocument.addEventListener('mousemove', handleDragMouseMove)
        parentDocument.addEventListener('mouseup', handleDragMouseUp)
        isPopupBeingDragged = true
    }
    
    function handleDragMouseUp(e) {
        isPopupBeingDragged = false

        parentDocument.removeEventListener('mousemove', handleDragMouseMove)
        parentDocument.removeEventListener('mouseup', handleDragMouseUp)
    }

    function handleGeneralMouseUp(e) {
        if (e.target.id != EXTENSION_ALIAS+'-root') {
            if (warnClose) {
                removePopup()
            } else {
                warnClose = true
            }
        }
    }
    
    function handleDragMouseMove(e) {
        e.preventDefault()
        // TODO: drag could have an animation
        popupNode.style.left = e.pageX + initialDragOffsetX + 'px'
        popupNode.style.top = e.pageY + initialDragOffsetY + 'px'
    }

    function removePopup() {
        parentDocument.removeEventListener('mouseup', handleGeneralMouseUp)
        popupNode.parentNode.removeChild(popupNode)
    }

    async function onModelSelectChange(e) {
        updateModelFields(e.target.value)
    }

    async function updateModelFields(modelName) {
        const fields = await getModelFieldNames(modelName)
        // TODO: get saved fields from sync
        // const savedFields = getSyncModelFieldsValues(modelName)
        // cardModelFields = fields.reduce((obj, field) => {
        //     savedField = savedFields[field]
        //     return (obj[field]={value: savedField || '', shouldSave: savedFields ? true : false},obj)
        // }, {})
        // TODO: THIS IS A TEMPORARY REPLACEMENT
        cardModelFieldsData = fields.reduce((obj, fieldName) => (obj[fieldName]={value: '', shouldSave: false},obj), {})

    }

    const replacementString = '$replace$'
    function handleFieldInput(e) {
        const content = e.target.innerText
        const idxOfReplaceable = content.indexOf(replacementString)
        let newContent
        if (idxOfReplaceable != -1) {
            newContent = content.replaceAll('$replace$', '<span class="replaceable">$replace$</span>') 
        
            cardModelFieldsData[e.target.dataset.fieldname].shouldSave = true
        } else {
            newContent = content
            cardModelFieldsData[e.target.dataset.fieldname].shouldSave = false
        }
        e.target.previousElementSibling.innerHTML = newContent
    }
</script>

<<<<<<< HEAD
<dialog open bind:this={popupNode} class="fixed p-0 m-0 bg-transparent">
        <div class="bg-zinc-800-trs w-[20rem] max-w-[20rem] rounded-[0.3rem] blur-bg relative">
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
            <div class="p-5 flex flex-col max-h-xs overflow-auto bg-transparent">
                <h1 class="text-blue-gradient font-bold text-xl mx-auto mb-5">
                    Add2Anki
                </h1>
                {#if messageType}
                <div class="rounded-[0.3rem] border {messageType == 'success' ? 'border-green-400' : 'border-red-400'} text-zinc-300 px-2 py-1 mb-3 flex flex-col h-max text-xs hyphens-auto" style="transition: border-color 500ms, height 500ms;"
                    transition:horizontalSlideDisconsiderBorder={{axis: 'y', duration: 500}}
                >
                    <div>
                    {#if messageType == 'connection'}
                        There has been a connection error. Make sure that Anki is open, and that <a class="text-blue-400 underline" href="https://ankiweb.net/shared/info/2055492159" target="_blank">AnkiConnect</a> is installed & running.
                    {:else if messageType == 'response'}
                        There has been a response error. AnkiConnect is responding but is not working properly.
                    {:else if messageType == 'unknown'}
                        There has been an uknown error. ¯\_(ツ)_/¯
                    {:else if messageType == 'success'}
                        Successfully reconnected with Anki!
                    {/if}
                    </div>
                    {#if messageType != 'success'}
                    <div class="block  text-[0.5rem] text-zinc-400 my-1">retrying in {secsUntilRetry} second(s) . . .</div>
                    {/if}
                </div>
=======
<div class="absolute" bind:this={popupNode}>
    <div class="bg-zinc-800 w-[20rem] max-w-[20rem] rounded-[0.3rem] blur-bg">
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
        <div class="p-5 flex flex-col max-h-xs overflow-auto">
            <h1 class="text-blue-gradient font-bold text-xl mx-auto mb-5">
                Add2Anki
            </h1>
            <!-- TODO: warning dialog -->
            {#if messageType}
            <div class="rounded-[0.3rem] border {messageType == 'success' ? 'border-green-400' : 'border-red-400'} text-zinc-300 px-2 py-1 mb-3 transition flex flex-col h-max text-xs hyphens-auto"
                transition:horizontalSlideDisconsiderBorder={{axis: 'y', duration: 500}}
            >
                <div>
                {#if messageType == 'connection'}
                    There has been a connection error. Make sure that Anki is open, and that <a class="text-blue-400 underline" href="https://ankiweb.net/shared/info/2055492159" target="_blank">AnkiConnect</a> is installed & running.
                {:else if messageType == 'response'}
                    There has been a response error. AnkiConnect is responding but is not working properly.
                {:else if messageType == 'unknown'}
                    There has been an uknown error. ¯\_(ツ)_/¯
                {:else if messageType == 'success'}
                    Successfully reconnected with Anki!
                {/if}
                </div>
                {#if messageType != 'success'}
                <div class="block  text-[0.5rem] text-zinc-400 my-1">retrying in {timeUntilRetry} second(s) . . .</div>
>>>>>>> parent of a21d6f5 (fixed readme (yep), progress on popup)
                {/if}
                {#if contentToSave}
                <div class="text-xs text-zinc-400 mb-3 flex mx-auto">
                    <span class="replaceable">$replace$</span>
                    &nbsp;&rarr;&nbsp;
                    <span class="text-zinc-300">{contentToSave}</span>
                </div>
                {/if}
                <form action="" class="text-zinc-300 text-sm" on:submit|preventDefault={handleSubmit} id="leForm">
                    <div class="w-full grid grid-cols-2 mb-3">
                        <div class="pr-2">
                            <label for="deckName" class="block mb-0.5 label-on-focus">Card Deck</label>
                            <div class="relative">
                                <select name="deckName" id="deckName" class="w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600 truncate outline-none focus:border-blue-400"
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
                            <label for="modelName" class="block mb-0.5">Card Model</label>  
                            <div class="relative">
                                <select name="modelName" id="modelName" class="w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600 truncate outline-none focus:border-blue-400"
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
                    
        
                    {#each Object.entries(cardModelFieldsData) as [fieldTitle, fieldDetails]}
                    <!-- TODO: show "will save" small text -->
                        <div class="flex align-middle mb-0.5 items-center">
                            <label for={fieldTitle} class="mr-2">{fieldTitle}</label>
                            <small class="text-[0.6rem] text-zinc-400">{#if fieldDetails.shouldSave}This field will stay saved{/if}</small>
                        </div>
<<<<<<< HEAD
                        <div class="relative w-full rounded bg-zinc-500-trs mb-3" data-fieldName={fieldTitle} id={fieldTitle}>
                            <div class="absolute size-inherit top-0 left-0 pointer-events-none overflow-clip px-1 border border-transparent hyphens-auto"></div>
                            <div contenteditable="true" bind:innerHTML={cardModelFieldsData[fieldTitle].value} on:input={handleFieldInput} data-fieldName={fieldTitle} class="break-all relative top-0 left-0 webkit-text-transparent px-1 border border-zinc-600 rounded-[0.3rem] appearance-none outline-none focus:border-blue-400 transition-colors"></div>
                        </div>
                    {/each}
                    <div class="opacity-0 block mb-0.5">&nbsp;</div>
                    <button type="submit" class="w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600 text-sm py-1 appearance-none outline-none hover:border-blue-400 focus:border-blue-400 transition-colors">Add that thing!</button>        
                </form>
            </div>
=======
                    </div>
                </div>
                
    
                {#each Object.entries(cardModelFieldsData) as [fieldTitle, fieldDetails]}
                <!-- TODO: show "will save" small text -->
                    <div class="flex align-middle mb-0.5 items-center">
                        <label for={fieldTitle} class="mr-2">{fieldTitle}</label>
                        <small class="text-[0.6rem] text-zinc-400">{#if fieldDetails.shouldSave}This field will stay saved{/if}</small>
                    </div>
                    <div class="relative w-full rounded bg-zinc-500-trs mb-3" data-fieldName={fieldTitle} id={fieldTitle}>
                        <div class="absolute size-inherit top-0 left-0 pointer-events-none overflow-clip px-1 border border-transparent hyphens-auto break-words"></div>
                        <div contenteditable="true" bind:innerHTML={cardModelFieldsData[fieldTitle].value} on:input={handleFieldInput} data-fieldName={fieldTitle} class="break-words relative top-0 left-0 webkit-text-transparent px-1 border border-zinc-600 rounded-[0.3rem] appearance-none outline-none hyphens-auto focus:border-blue-400 transition-colors"></div>
                    </div>
                {/each}
                <div class="opacity-0 block mb-0.5">yep</div>
                <button type="submit" class="w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600 text-sm py-1 appearance-none outline-none hover:border-blue-400 focus:border-blue-400 transition-colors">Add that thing!</button>        
            </form>
>>>>>>> parent of a21d6f5 (fixed readme (yep), progress on popup)
        </div>
</dialog>

<style>
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
        background-color: rgba(39, 39, 42, 0.9);
    }

    .hover\:bg-zinc-500-trs:hover {
        background-color: rgba(113, 113, 122, 0.2);
    }

    .bg-zinc-500-trs {
        background-color: rgba(113, 113, 122, 0.2);
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
