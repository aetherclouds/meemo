<script>
    import Popup from "./Popup.svelte";


    export let staticHoverNode
    export let parentDocument
    export let selectionText
    export let hideToolbar
    export let options
    let toolbarNode
    let popup

    function mountPopup() {
        const toolbarRect = toolbarNode.getBoundingClientRect() 
        popup = new Popup({
            target: staticHoverNode,
            props: {
                parentDocument,
                staticHoverNode,
                initialX: toolbarRect.left + (options.shouldPopupBePinned.value ? 0 : document.documentElement.scrollLeft || document.body.scrollLeft),
                initialY: toolbarRect.top + (options.shouldPopupBePinned.value ? 0 : document.documentElement.scrollTop || document.body.scrollTop),
                contentToSave: selectionText,
                options
            },
            // intro: true,
        })
    }

    function handleClickAnki() {
        mountPopup()
        hideToolbar()
    }
</script>

<div class="panel" on:click={handleClickAnki} bind:this={toolbarNode}>
    <img src={chrome.runtime.getURL('assets/icons/anki.png')} alt="Save 2 Anki" class="icon">
</div>
<style>
.icon {
    height: 18px;
    /* https://stackoverflow.com/a/37596806 */
    display: block;
}

.panel {
    z-index: 999;
    cursor: pointer;
    height: min-content;
    width: min-content;
    background-color: hsla(306, 92%, 54%, .8);
    vertical-align: bottom;    
    -webkit-backdrop-filter: blur(3px); 
    backdrop-filter: blur(3px);
}
</style>