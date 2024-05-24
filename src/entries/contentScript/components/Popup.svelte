<script>
    import { onMount } from 'svelte'
    import { REPLACEMENT_STRING, browserStorageSync } from "~/lib/const";
    import { escapeHtml } from "~/lib/util";
    import {addNote, AnkiConnectionError, AnkiResponseError, getDeckNames, getModelFieldNames, getModelNames} from '~/lib/ankiConnectUtil'
    import { horizontalSlideDisconsiderBorder } from "~/lib/svelteTransition";

    export let staticHoverNode
    export let parentDocument = document
    export let options
    export let contentToSave = undefined    
    export let initialX = 0
    export let initialY = 0
    let popupNode
    let isPopupBeingDragged = false
    let isPopupEnabled = false

    let cardModelSelectNode
    let selectedDeck
    let deckNameSelectNode
    let selectedModel
    
    let savedSyncFields
    
    let cardDecks = []
    let cardModels = []
    let cardModelFieldsData = {}
    let messageType = ''
    let canSubmit = false
    let highlightWarnClose = false
    let highlightSubmitSuccessful = false

    const TRANSITION_DURATION_MS = 300
    

    onMount(() => {
        popupNode.style.left = initialX + 'px'
        popupNode.style.top = initialY + 'px'
        isPopupEnabled = true
        tryAnkiConnectionLoop()
        parentDocument.addEventListener('mouseup', handleDocumentMouseUp)
    })

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

                // load synced options
                selectedDeck = (await browserStorageSync.get('selectedDeck')).selectedDeck
                selectedModel = (await browserStorageSync.get('selectedModel')).selectedModel
                // load synced fields
                savedSyncFields = (await browserStorageSync.get('savedFields')).savedFields || {}
                // console.log('syncFied', savedSyncFields)

          }
        } catch (err) {
            handleAnkiError(err, () => tryAnkiConnectionLoop(false))
            
        }
    }

    let secsUntilRetry = 0
    function handleAnkiError(error, callback) {
        console.error('meemo:', error)
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

        if (callback) {
            secsUntilRetry = 5
            let countdown = setInterval(() => {
                secsUntilRetry-= 1
                // check if popup is enabled to avoid an infinite loop when closed
                if (secsUntilRetry == 0 && isPopupEnabled) {
                    callback()
                    clearInterval(countdown)
                }
            }, 1000)
        }

    }

    async function handleSubmit(e) {
        const formData = new FormData(e.target)
        const fieldsVaues = Object.keys(cardModelFieldsData).reduce((obj, fieldName) => (
            obj[fieldName]= cardModelFieldsData[fieldName].value,
            obj
            ), {})
        const fieldsValuesReplaced = Object.keys(fieldsVaues).reduce((obj, fieldName) => (
            obj[fieldName]=fieldsVaues[fieldName].replaceAll('$replace$', contentToSave),
            obj
            ), {})

        canSubmit = false
        let callbackResult
        try {
            callbackResult = await addNote(formData.get('deckName'), formData.get('modelName'), fieldsValuesReplaced)
        } catch (err) {
            messageType = 'response'
            setTimeout(() => {
                messageType = ''
            }, 5000)
        }    
        if (callbackResult) {
            // console.log('callback:', callbackResult)
            highlightSubmitSuccessful = true
            setTimeout(() => {
                highlightSubmitSuccessful = false
            }, 5000)
            // sync selections
            syncDeckAndModelChoices(formData.get('deckName'), formData.get('modelName'))
            // console.log('fieldData',cardModelFieldsData)
            syncFields(cardModelFieldsData)
        } else {
            handleAnkiError(new AnkiResponseError())
        }
        canSubmit = true
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
        // I wanted to make this save for every field BUT it could eat up the storage for storage.sync so...   
        let serializedFields = Object.keys(fieldsData).reduce((obj, fieldName) => {
            if (fieldsData[fieldName].shouldSave) {
                return (obj[fieldName] = fieldsData[fieldName].value,obj)
            } else {
                return obj
            }
        }, {})
        if (Object.keys(serializedFields).length <= 0) {
            chrome.storage.sync.remove('savedFields')
        } else {
            chrome.storage.sync.set({savedFields: serializedFields})
        }
        // console.log('saving fields:', serializedFields, fieldsData)
    }

    let initialDragOffsetX, 
        initialDragOffsetY
    function handleDragMouseDown(e) {
        const popupRect = popupNode.getBoundingClientRect()
        // offset should be negative because the popup's top-left is always a negative amount offset
        // from the cursor. this is just calculating that offset based on where the cursor is on the popup
        initialDragOffsetX = - e.clientX + popupRect.left
        initialDragOffsetY = - e.clientY + popupRect.top 
        parentDocument.addEventListener('mousemove', handleDragMouseMove)
        parentDocument.addEventListener('mouseup', handleDragMouseUp)
        isPopupBeingDragged = true
        highlightWarnClose = false
        highlightSubmitSuccessful = false
    }
    
    function handleDragMouseUp(e) {
        isPopupBeingDragged = false

        parentDocument.removeEventListener('mousemove', handleDragMouseMove)
        parentDocument.removeEventListener('mouseup', handleDragMouseUp)
    }
        
    function handleDragMouseMove(e) {
        e.preventDefault()
        popupNode.style.left = (options.shouldPopupBePinned.value ? e.clientX : e.pageX) + initialDragOffsetX + 'px'
        popupNode.style.top = (options.shouldPopupBePinned.value ? e.clientY : e.pageY) + initialDragOffsetY + 'px'
    }

    function handleDocumentMouseUp(e) {
        if (e.target.id != 'meemo-root') {
            if (highlightWarnClose) {
                destroyPopup()
            } else {
                highlightWarnClose = true
            }
        } else {
            highlightWarnClose = false
        }
    }

    function destroyPopup() {
        isPopupEnabled = false
        parentDocument.removeEventListener('mouseup', handleDocumentMouseUp)
        setTimeout(() => {
            popupNode.parentNode.removeChild(popupNode)
        }, TRANSITION_DURATION_MS)
    }

    async function handleDeckSelectionChange(e) {
        selectedDeck = e.target.value
    }

    async function handleModelSelectChange(e) {
        selectedModel = e.target.value
        updateModelFields(e.target.value)
    }


    async function updateModelFields(modelName) {
        const fields = await getModelFieldNames(modelName)

        cardModelFieldsData = fields.reduce((obj, field) => { 
            // check if there's a field with the same name in sync - then replace with synced value
            if(savedSyncFields[field]) {
                return (obj[field]={
                    value: savedSyncFields[field], 
                    shouldSave: true, 
                    displayHTML: replaceWithCoolSpan(savedSyncFields[field])
                },obj)
            } else {
                return (obj[field]={
                    value:'', 
                    shouldSave: false, 
                    displayHTML:''
                },obj)
            }
        }, {})
    }

    function replaceWithCoolSpan(content) {
        const escapedContent = escapeHtml(content)
        const idxOfReplaceable = content.indexOf(REPLACEMENT_STRING)
        let newContent
        if (idxOfReplaceable != -1) {
            newContent = escapedContent.replaceAll(REPLACEMENT_STRING, `<span class="replaceable">${REPLACEMENT_STRING}</span>`) 
        }
        return newContent
    }

    // adapted from https://stackoverflow.com/a/12028136
    function handlePasteContenteditable(e) {
        // cancel paste
        e.preventDefault();

        // get text representation of clipboard
        var text = (e.originalEvent || e).clipboardData.getData('text/plain');

        // insert text manually
        document.execCommand("insertHTML", false, text);
    }
    
    function handleFieldInput(e) {
        const fieldName = e.target.dataset.fieldname
        const content = e.target.value
        const escapedContent = escapeHtml(content)
        cardModelFieldsData[fieldName].value = escapedContent
        const idxOfReplaceable = escapedContent.indexOf(REPLACEMENT_STRING)
        let replacedContent
        if (idxOfReplaceable != -1) {
            replacedContent = escapedContent.replaceAll(REPLACEMENT_STRING, `<span class="replaceable">${REPLACEMENT_STRING}</span>`) 
        
            cardModelFieldsData[fieldName].shouldSave = true
        } else {
            replacedContent = escapedContent
            cardModelFieldsData[fieldName].shouldSave = false
        }
        // this is TERRIBLE.. but it's the only way because updating through the cardModelFieldsData object generates a slight delay,
        // so when we get the displayHTMlNodeRect it won't match with the current display HTML
        e.target.nextElementSibling.innerHTML = replacedContent
        cardModelFieldsData[fieldName].displayHTML = replacedContent
        const displayHTMLNodeRect = e.target.nextElementSibling.getBoundingClientRect()
        e.target.style.height = displayHTMLNodeRect.height / options.UIScale.value + 'px'
        e.target.style.width = displayHTMLNodeRect.width / options.UIScale.value + 'px'
    }
</script>

<!-- we could use Svelte's component initialization `intro`, but I also want an exit transition so.. -->
<dialog open bind:this={popupNode} class="{options.shouldPopupBePinned.value ? 'fixed' : 'absolute'} p-0 m-0 bg-transparent popup"
style="--UIScale: {options.UIScale.value}"
>
    <!-- 
        {isPopupBeingDragged  ? 
            'shadow-xl shadow-black/10'
            : 'shadow-sm ' 
            +  ((highlightSubmitSuccessful || messageType=='success') ? 
                'shadow-green-400'
                : (messageType ?
                    'shadow-red-400'
                    : '' ))
        }
    -->
    {#if isPopupEnabled}
    <div class="bg-zinc-800/90 w-[20rem] max-w-[20rem] rounded-[0.3rem] blur-bg relative border
    {isPopupBeingDragged  ? 
        'shadow-xl shadow-black/10'
        : 'shadow-sm '
    }
    {messageType ? 
        (messageType!='success') && !highlightSubmitSuccessful ? 
            'border-red-400'
            : 'border-green-400' 
        : (highlightSubmitSuccessful) ? 
            'border-green-400'
            : 'border-transparent'
    }
    {highlightWarnClose ? ' ring-1 ring-blue-400 ' : ''}
    duration-100"
    style="transition-property: box-shadow, border-color;"
    transition:horizontalSlideDisconsiderBorder={{axis: 'y', duration: options.useMotion.value ? TRANSITION_DURATION_MS : 0}}
    >
        <div draggable class="w-full h-min py-1.5 rounded-[0.3rem] box-border flex cursor-move
        hover:bg-zinc-500/20 transition-colors duration-100
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
                transition:horizontalSlideDisconsiderBorder={{axis: 'y', duration: options.useMotion.value ? 500 : 0}}
            >
                <div>
                {#if messageType == 'connection'}
                    There has been a connection error. Make sure that Anki is open, and that <a class="text-blue-400 underline" href="https://ankiweb.net/shared/info/2055492159" target="_blank">AnkiConnect</a> is installed & running.
                {:else if messageType == 'response'}
                    There has been a response error. AnkiConnect is running but did not respond properly.
                {:else if messageType == 'unknown'}
                    There has been an unknown error. ¯\_(ツ)_/¯
                {:else if messageType == 'success'}
                    Successfully reconnected with Anki!
                {/if}
                </div>
                {#if messageType == 'connection'}
                <div class="block text-[0.5rem] text-zinc-400">retrying in {secsUntilRetry} second(s) . . .</div>
                {/if}
            </div>
            {/if}
            {#if contentToSave != undefined}
            <div class="text-xs text-zinc-400 mb-3 mx-auto flex items-center">
                <span class="replaceable">{REPLACEMENT_STRING}</span>
                <span>&nbsp;&rarr;&nbsp;</span>
                <span contenteditable class="break-all text-zinc-300 rounded hover:bg-zinc-500/20 border-transparent hover:border-zinc-400 outline-none focus:border-blue-400 focus:bg-zinc-500/20 transition-colors duration-100 border px-1" 
                bind:innerHTML={contentToSave} on:input={(e) => {let content = e.target.innerHTML; content = escapeHtml(content)}}
                style="min-width: 10px;"
                ></span>
            </div>
            {/if}
            <form action="" class="text-zinc-300 text-sm" on:submit|preventDefault={handleSubmit} id="leForm">
                <div class="w-full grid grid-cols-2 mb-3">
                    <div class="pr-2">
                        <label for="deckName" class="block mb-0.5 label-on-focus">Card Deck</label>
                        <div class="relative">
                            <select name="deckName" id="deckName" class="w-full rounded-[0.3rem] bg-zinc-500/20 border border-zinc-600 truncate outline-none hover:border-zinc-400 focus:border-blue-400 transition-colors duration-100"
                            on:change={handleDeckSelectionChange}
                            bind:this={deckNameSelectNode}
                            >
                                {#each cardDecks as deckName}
                                    <option value={deckName} class="bg-zinc-800" selected={(deckName == selectedDeck) || null}>{deckName}</option>
                                {/each}
                            </select>  
                            <select disabled class="absolute w-full h-full top-0 left-0 bg-transparent border border-transparent text-zinc-500 pointer-events-none"></select>
                        </div>
                    </div>
                    <div class="pl-2">
                        <label for="modelName" class="block mb-0.5">Card Model</label>  
                        <div class="relative">
                            <select name="modelName" id="modelName" class="w-full rounded-[0.3rem] bg-zinc-500/20 border border-zinc-600 truncate outline-none hover:border-zinc-400 focus:border-blue-400 transition-colors duration-100"
                            on:change={handleModelSelectChange}
                            bind:this={cardModelSelectNode}
                            >
                                {#each cardModels as modelName}
                                    <option value={modelName} class="bg-zinc-800" selected={(modelName == selectedModel) || null}>{modelName}</option>
                                {/each}
                            </select>
                            <select disabled class="absolute w-full h-full top-0 left-0 bg-transparent border border-transparent text-zinc-500 pointer-events-none"></select>
                        </div>
                    </div>
                </div>
                
                {#each Object.entries(cardModelFieldsData) as [fieldTitle, fieldDetails]}
                    <div class="flex align-middle mb-0.5 items-center">
                        <label for={'field-'+fieldTitle} class="mr-2">{fieldTitle}</label>
                        <!-- <small class="text-[0.6rem] text-zinc-400">{#if fieldDetails.shouldSave}This field will stay saved{/if}</small> -->
                    </div>
                    <div class="relative w-full rounded mb-3" data-fieldName={fieldTitle} id={fieldTitle}>
                        <textarea rows="1" id='field-{fieldTitle}' on:input={handleFieldInput} bind:value={fieldDetails.value} data-fieldName={fieldTitle} class="peer bg-transparent w-full overflow-hidden resize-none break-all relative top-0 left-0 webkit-text-transparent px-1 border border-transparent appearance-none outline-none rounded-[0.3rem]"></textarea>
                        <div id='field-display-{fieldTitle}' contenteditable="true" class="absolute size-inherit break-all top-0 left-0 bg-zinc-500/20 pointer-events-none overflow-clip px-1 border border-transparent hyphens-auto  peer-hover:border-zinc-400 border-zinc-600 rounded-[0.3rem] peer-focus:border-blue-400 transition-colors duration-100" bind:innerHTML={fieldDetails.displayHTML}></div>
                        <!-- <div contenteditable="true" id={'field-'+fieldTitle} bind:innerHTML={fieldDetails.value} on:input={handleFieldInput} on:paste={handlePasteContenteditable} data-fieldName={fieldTitle} class="break-all relative top-0 left-0 webkit-text-transparent px-1 border hover:border-zinc-400 border-zinc-600 rounded-[0.3rem] appearance-none outline-none focus:border-blue-400 transition-colors duration-100"></div> -->
                    </div>
                {/each}
                <div class="opacity-0 block mb-0.5">&nbsp;</div>
                <button type="submit" class="w-full rounded-[0.3rem] bg-zinc-500/20 border border-zinc-600 text-sm py-1 appearance-none outline-none enabled:hover:border-blue-400 enabled:hover:text-blue-400 focus:border-blue-400 focus:text-blue-400 shadow-none focus:shadow-inner disabled:opacity-80 disabled-border-zinc-600 transition-colors duration-100" disabled={!canSubmit || undefined}>Add!</button>
            </form>
        </div>
    </div>
    {/if}
</dialog>

<style lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .blur-bg {
        -webkit-backdrop-filter: blur(3px); 
        backdrop-filter: blur(3px);
    }

    .text-blue-gradient {
        /* little hack - probably from css-tricks */
        background-image: linear-gradient(to bottom, #63AAE1, #466FDA);
        background-size: 100%;
        background-repeat: repeat;

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }

    :global(.replaceable) {
        @apply text-blue-400;
    }
    
    .size-inherit {
        width: inherit;
        height: inherit;
    }

    .webkit-text-transparent {
        -webkit-text-fill-color: transparent;
    }

    .popup {
        transform-origin: top left;
        scale: var(--UIScale);
    }
</style>
