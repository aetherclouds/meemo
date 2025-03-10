<script>
  import { onMount } from 'svelte'
  import { DEFAULT_OPTIONS, browserStorageSync } from '~/lib/const'
  import * as Util from "~/lib/util"
  import ToolBar from '../components/ToolBar.svelte'
  import Popup from '../components/Popup.svelte'
  
  export let containerNode
  export let parentDocument = document
  
  let isExtensionOn = false
  let pageWidth
  let hoverNode, hoverContentNode
  
  let hoverContent = []
  let isHoverOn = false
  let hoverX = 0,
      hoverY = 0,
      cursorX = 0,
      cursorY = 0
  let isMakingSelection = false
  let previousWord
  let staticHoverNode
  
  let options = DEFAULT_OPTIONS
  // try loading options from sync
  browserStorageSync.get('options').then(result => {
      options = result.options || DEFAULT_OPTIONS
  })

  onMount(() => {
      readyParent()
  })
  
  function hoverAnimateLoop() {
      hoverNode.style.left = hoverX + 'px'
      hoverNode.style.top = hoverY + 'px'
      window.requestAnimationFrame(hoverAnimateLoop)
  }

  function readyParent() {
      // we'll assume this is always constant because it probably (debatable) is + saves on performance
      pageWidth = Util.getPageWidth()
  
      // check if extension is globally enabled 
      chrome.runtime.sendMessage({type: 'isExtensionOn'}, response => {
          // check if isExtensionOn is already on so we don't run enableExtension twice
          if (response.isExtensionOn && !isExtensionOn) {
              enableExtension() 
          }
      })
  
      setTimeout(() => { // wait a bit for 1st trigger of onmousemove so that we have mouseX and mouseY being non-0
          hoverAnimateLoop()
      }, 50)
  }
  
  // listen to messages from background script
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
  
  // enable/disable extension
  function enableExtension() {	
      isExtensionOn = true
      parentDocument.addEventListener('mousemove', handleMouseMove)
      parentDocument.addEventListener('selectionchange', handleSelectionChange)
      parentDocument.addEventListener('keydown', handleKeyDown)
      
      parentDocument.body.appendChild(containerNode)
  }   
  
  function disableExtension() {
      isExtensionOn = false
      parentDocument.removeEventListener('mousemove', handleMouseMove)
      parentDocument.removeEventListener('selectionchange', handleSelectionChange)
      parentDocument.removeEventListener('keydown', handleKeyDown)

  
      let existingShadowRoot = parentDocument.getElementById('meemo-root')
      if (existingShadowRoot) {
          existingShadowRoot.remove()
      }
  }
  
  // show/hide hover
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
      // adaptation of https://stackoverflow.com/a/17569535 
      // get selection (doh)
      let selection = parentDocument.getSelection()
      if (!selection.isCollapsed) {
          let selectionRange = selection.getRangeAt(0)
          let selectionText = selection.getRangeAt(0).toString().trim()
          let selectionRect = selectionRange.getBoundingClientRect()
  
          isMakingSelection = true
      
          hoverX = selectionRect.x + (selectionRect.width / 2) - (hoverNode.offsetWidth / 2)
          // https://stackoverflow.com/a/7436602
          // TODO: fix hover hiding atop of page if it's too high up
          hoverY = selectionRect.y + parentDocument.documentElement.scrollTop - ((hoverNode.offsetHeight + options.distanceToMouse.value) * options.UIScale.value)
  
          showHover([{
              isSvelteComponent: true,
              component: ToolBar,
              props: {    
                  staticHoverNode, 
                  parentDocument, 
                  selectionText,
                  hideToolbar: () => {isMakingSelection=false;hideHover()},
                  options
              },
          }])
  
      } else {
          isMakingSelection = false
          hideHover()
      }
  }
  
  
  function handleMouseMove(e) {
      cursorX = e.pageX
      cursorY = e.pageY
  
      if (!hoverNode) return
      if (isMakingSelection) return
      
      let range
      // https://gist.github.com/unicornist/ac997a15bc3211ba1235 - extends compatibility for Firefox
      if (parentDocument.caretRangeFromPoint) { // standard (WebKit)
          range = parentDocument.caretRangeFromPoint(e.clientX, e.clientY);
      } else if (e.rangeParent) { // Mozilla
          range = parentDocument.createRange();
          range.setStart(e.rangeParent, e.rangeOffset);
      }
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
      updateHoverCoordinates(e)
  }

  function handleKeyDown(e) {
  e.stopImmediatePropagation()

  if (document.activeElement.tagName === 'INPUT') return

  // shortcut for opening popup
  if (((e.key === 'a' || e.key === 'A') && e.altKey && !e.metaKey && !e.shiftKey) ) {
      new Popup({
          target: staticHoverNode,
          props: {
              parentDocument,
              staticHoverNode,
              initialX: cursorX - (options.shouldPopupBePinned.value ? document.documentElement.scrollLeft || document.body.scrollLeft : 0),
              initialY: cursorY - (options.shouldPopupBePinned.value ? document.documentElement.scrollTop || document.body.scrollTop : 0),
              options,
              contentToSave: '',
          },
          // intro: true,
      })
  }
}

  
  function updateHoverCoordinates(e) {
      if (!isMakingSelection) {
          // we don't want it going out of the window so we set a max horizontal distance it can go
          hoverX = Math.min(window.innerWidth - (hoverNode.offsetWidth * options.UIScale.value) - 10, e.pageX + (options.distanceToMouse.value * options.UIScale.value))
          // same concept for vertical distance, we just don't want it crossing <0 (also giving it an offest of 10 so it doesn't glue to the edge)
          hoverY = Math.max(e.pageY - hoverNode.offsetHeight - (options.distanceToMouse.value * options.UIScale.value), 10)
      }
  }
</script>
  
<div id="hover" 
class="select-none absolute truncate text-white rounded z-[9999] {options.useMotion.value ? 'use-motion' : ''}"
bind:this={hoverNode} 
style="--UIScale: {options.UIScale.value}; pointer-events: {isMakingSelection ? 'all' : 'none'}">
  <div id="hover-content" class="" bind:this={hoverContentNode}>
      {#each hoverContent as entry}
          {#if entry.isSvelteComponent}
              <svelte:component this={entry.component} {...entry.props}/>
          {:else}
              <div class="blurry-bg {entry.gender}-entry flex pointer-events-none px-1 w-full items-center text-center text-sm font-bold">
                  <img src="{entry.flagURL}"class="block mr-1 rounded-[3px]" alt="{entry.countryCode} flag"/>
                  <div class="opacity-90">{entry.wordForGender}</div>
              </div>
          {/if}
      {/each} 
  </div>
</div>
<div bind:this={staticHoverNode} id="static-hover" class="absolute left-0 top-0 z-[99999]">
</div>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  :global(.m-entry) {
      background: linear-gradient(to right, hsla(223, 92%, 54%, .8), hsla(203, 92%, 54%, .5));
  }   

  :global(.f-entry) {
      background: linear-gradient(to right, hsla(306, 92%, 54%, .8), hsla(284, 92%, 54%, .5));
  }

  :global(.n-entry) {
      background: linear-gradient(to right, hsla(137, 92%, 54%, .8), hsla(117, 92%, 54%, .5));
  }

  #hover {
      transform-origin: bottom left;
      scale: var(--UIScale);
  }

  .use-motion {
      transition: top .15s, left .15s, opacity .15s ease-in-out;
      transition-timing-function: cubic-bezier(.42,.29,0,1.28);
  }
      
  .blurry-bg {
      -webkit-backdrop-filter: blur(3px); 
      backdrop-filter: blur(3px);
  }

</style>
  