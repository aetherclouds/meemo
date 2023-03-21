<script>
import { onMount, setContext } from 'svelte'
import * as Util from "../util"
import ToolBar from './ToolBar.svelte'
import { DEFAULT_OPTIONS, EXTENSION_ALIAS } from '../const'
import Popup from './Popup.svelte'
import { test } from '../ankiConnectUtil'

export let rootNode
export let shadowRootNode
export let parentDocument

test()

let isExtensionOn = false
let pageWidth
let hoverNode, hoverContentNode

let isHoverOn = false
let hoverX = 0,
    hoverY = 0,
    cursorX = 0,
    cursorY = 0,
    hoverWidth = 0,
    hoverHeight = 0
let hasSelection = false
let isMakingSelection = false
let previousWord

let isPopupOn = false
let popupProps = {}

let options = DEFAULT_OPTIONS
// load options
chrome.storage.sync.get('options').then(result => {
    options = result.options || DEFAULT_OPTIONS
})

let hoverContent = []

onMount(() => {
	// --- run on domready
    if (parentDocument.readyState === 'complete') {
        readyParent()
    } else {
        parentDocument.addEventListener("DOMContentLoaded", readyParent())
    }
})

function hoverMoveLoop() {
    // if (isExtensionOn) {
        hoverNode.style.left = hoverX + 'px'
        hoverNode.style.top = hoverY + 'px'
        window.requestAnimationFrame(hoverMoveLoop)
    // }
}

function readyParent() {
    setContext('parentNode', hoverNode.parentNode)
    setTimeout(() => { // wait a bit for 1st trigger of onmousemove so that we have mouseX and mouseY being non-0.
        hoverMoveLoop()
    }, 50)

    // we'll assume this is always constant cuz it probably is + saves on performance
    pageWidth = Util.getPageWidth()

    // check if extension is globally enabled 
    chrome.runtime.sendMessage({type: 'isExtensionOn'}, response => {
        console.log('checking: isExtensionOn? '+response.isExtensionOn)
        // check if isExtensionOn is already on so we don't run this function twice
        if (response.isExtensionOn && !isExtensionOn) {
            enableExtension() 
        }
    })
    
}

// LISTEN TO MESSAGES FROM BACKGROUND SCRIPT
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.type) {
            case 'enableExtension':
                if (!isExtensionOn) enableExtension()
                break
            case 'disableExtension':
                disableExtension()
                break
            case 'updateOptions':
                options = request.data
                break
            default:
                break
        }
    }
)

// ENABLE/DISABLE EXTENSION
function enableExtension() {	
	isExtensionOn = true
    parentDocument.addEventListener('mousemove', handleMouseMove)
    parentDocument.addEventListener('selectionchange', handleSelectionChange)
    
    parentDocument.body.appendChild(rootNode)
}   

function disableExtension() {
	isExtensionOn = false
    parentDocument.removeEventListener('mousemove', handleMouseMove)
    parentDocument.removeEventListener('selectionchange', handleSelectionChange)

    // TODO: make this reuse the same rootNode variable
    let existingShadowRoot = parentDocument.getElementById(`${EXTENSION_ALIAS}-root`)
    if (existingShadowRoot) {
        existingShadowRoot.remove()
    }
}

// SHOW/HIDE HOVER 
function showHover(data) {
    hoverContent = data
    isHoverOn = true
    hoverNode.style.opacity = 1
}

function hideHover() {
    if (isMakingSelection) return
    isHoverOn = false
    // hoverContent = []
    previousWord = ''
    hoverNode.style.opacity = 0
}

function handleSelectionChange(e) {    
    // https://stackoverflow.com/a/5379408
    // https://stackoverflow.com/a/52157976 - this one would be cool because this listener will update on EVERY CHARACTER SELECTED instead of just mouseup. so maybe we could animate the hover with that.

    // https://stackoverflow.com/a/17569535 MODIFIED
    // get selection 
    let selection = parentDocument.getSelection()
    if (!selection.isCollapsed) {
        let selectionRange = selection.getRangeAt(0)
        let selectionText = selection.getRangeAt(0).toString().trim()
        let selectionRect = selectionRange.getBoundingClientRect()

        isMakingSelection = true

        hoverX = selectionRect.x + (selectionRect.width / 2) - (hoverNode.offsetWidth / 2)
        // https://stackoverflow.com/a/7436602
        // hoverY = selectionRect.y + parentDocument.documentElement.scrollTop - hoverNode.offsetHeight - (options.distanceToMouse.value * options.UIScale.value)
        // TODO: fix hover hiding atop of page if it's too high up
        hoverY = selectionRect.y + parentDocument.documentElement.scrollTop - ((hoverNode.offsetHeight + options.distanceToMouse.value) * options.UIScale.value)
        
        showHover([{
            component: ToolBar,
            isSvelteComponent: true,
            props: {
                ankiProps: {selectionText, hoverX, hoverY},
                popupProps
            },
        }])

    } else {
        isMakingSelection = false
        hideHover()
    }
}


function handleMouseMove(e) {
    if (!hoverNode) return
    if (isMakingSelection) return

    const range = parentDocument.caretRangeFromPoint(e.clientX, e.clientY)
    if (!range) return
    const node = range.startContainer
    const nodeContent = node.nodeValue
    if (!nodeContent) { // actually looking for (nodeContent !== null) but this is more general
        hideHover()
    } else {
        // get position of cursor in a block of text
        const cursorOffset = range.startOffset;
    
        const textLeftOfCursor = nodeContent.slice(0, cursorOffset)
        const textRightOfCursor = nodeContent.slice(cursorOffset)
        if (textLeftOfCursor && textRightOfCursor) { // mouse is over text
            // regex honorable mentions:
            // [^\p{L}\p{M}] - match any non "readable" character (l is charcter, m is accent)
            // pattern(?![\s\S]*pattern) - negative lookahead / find last occurance -- https://stackoverflow.com/a/41870151
            // NEW NEW pattern: [A-Za-zÀ-ÖØ-öø-ÿ9-] (and then negate it)
            
            // by separator we mean anything that would separate a word, like comma or space
            const leftSeparatorIndex = textLeftOfCursor.search(/[^\p{L}\p{M}0-9-](?![\s\S]*[^\p{L}\p{M}0-9-])/u)
            const rightSeparatorIndex = textRightOfCursor.search(/[^\p{L}\p{M}0-9-]/u)
        
            const startWordIndex = leftSeparatorIndex === -1 ? 0 : leftSeparatorIndex + 1 // ...? fallback : actual index 
            const endWordIndex = rightSeparatorIndex === -1 ? nodeContent.length : cursorOffset + rightSeparatorIndex

            // cut the desired word off of the text block
            const word = nodeContent.slice(startWordIndex, endWordIndex)
            // sanitize
            const cleanedWord = word
            .toLowerCase()
            // .replace(/[^\p{L}]/ug, "")

            // https://stackoverflow.com/a/10805180
            // we only need to update it if it's actually different from the previous word
            if (cleanedWord !== previousWord) {
                if (!cleanedWord) return
                previousWord = cleanedWord  
                chrome.runtime.sendMessage({word: cleanedWord, type: 'getGender'}, (response) => {
                    // console.log('response',response)
                    if (response.data.length > 0) { 
                        showHover(response.data)
                    } else {
                        hideHover()
                    }
                })
            }
        }
    }

    // update render
    updateHoverPos(e)

}

function updateHoverPos(e) {
    cursorX = e.pageX
    cursorY = e.pageY
    if (!isMakingSelection) {
        // we don't want it going out of the window so we set a max horizontal distance it can go
        hoverX = Math.min(window.innerWidth - (hoverNode.offsetWidth * options.UIScale.value) - 10, e.pageX + (options.distanceToMouse.value * options.UIScale.value))
        // same concept for vertical distance, we just don't want it crossing <0 (also giving it an offest of 10 so it doesn't glue to the edge)
        hoverY = Math.max(e.pageY - hoverNode.offsetHeight - (options.distanceToMouse.value * options.UIScale.value), 10)
    }
}

</script>

<div id="hover" bind:this={hoverNode} style="--UIScale: {options.UIScale.value}; pointer-events: {isMakingSelection ? 'all' : 'none'}">
    <div id="hover-content" bind:this={hoverContentNode}>
        {#each hoverContent as entry}
            {#if entry.isSvelteComponent}
                <svelte:component this={entry.component} {...entry.props, shadowRootNode}/>
            {:else}
                <div class="entry {entry.gender}">
                    <img src="{entry.flagURL}" class="flag" alt="{entry.language} flag"/>
                    {entry.wordForGender}
                </div>
            {/if}
        {/each} 
    </div>
</div>

{#if isPopupOn}
<Popup {...popupProps}></Popup>
{/if}

<style>
:host {
    all: initial;
}

#hover {
    user-select: none;

    transform-origin: bottom left;
    scale: var(--UIScale);
    /* all: initial; */
    z-index: 9999;
    position: absolute;
    

    transition: top .15s, left .15s, opacity .1s ease-in-out, background 1s ease-in-out;
    transition-timing-function: cubic-bezier(.42,.29,0,1.28);

    overflow: hidden;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.9);
    border-radius: 0.3rem;

}

#hover-content {
    /* position: absolute; */
    bottom: 0;
}

.entry {
    pointer-events: none;

    /* padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 7px;
    padding-right: 7px;
    border-radius: 5px; */
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    padding-left: 0.4rem;   
    padding-right: 0.4rem;
    
    /* vertical-align: middle;
    align-items: center; */

    -webkit-backdrop-filter: blur(3px); 
    backdrop-filter: blur(3px);
    transition: background 1s ease-in-out;
}

.rainbow {
    /* background: linear-gradient(to right, hsla(223, 92%, 54%, .8), hsla(306, 92%, 54%, .8), hsla(137, 92%, 54%, .8),); */
    background: linear-gradient(to right,
    hsl(223deg 92% 54%) 0%,
    hsl(254deg 91% 65%) 9%,
    hsl(277deg 87% 61%) 18%,
    hsl(296deg 80% 56%) 27%,
    hsl(316deg 100% 50%) 36%,
    hsl(1deg 100% 64%) 45%,
    hsl(42deg 100% 49%) 55%,
    hsl(90deg 84% 49%) 64%,
    hsl(162deg 100% 45%) 73%,
    hsl(193deg 100% 50%) 82%,
    hsl(203deg 100% 50%) 91%,
    hsl(223deg 92% 54%) 100%
    );
    background-size: 400%;
	animation: gradient 15s ease infinite;
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.m {
    background: linear-gradient(to right, hsla(223, 92%, 54%, .8), hsla(203, 92%, 54%, .5));
}   

.f {
    background: linear-gradient(to right, hsla(306, 92%, 54%, .8), hsla(284, 92%, 54%, .5));
}

.n {
    background: linear-gradient(to right, hsla(137, 92%, 54%, .8), hsla(117, 92%, 54%, .5));
}

.flag {
    margin-right: 0.25rem;
    border-radius: 0.1rem;
}
</style>
