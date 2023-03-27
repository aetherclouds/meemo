<script>
    import Popup from "./Popup.svelte";


    export let staticHoverNode
    export let clientX
    export let clientY
    export let parentDocument
    export let selectionText
    let popup

    function spawnPopup(ankiProps) {
        popup = new Popup({
            target: staticHoverNode,
            props: {
                parentDocument,
                staticHoverNode,
                initialX: clientX,
                initialY: clientY,
                contentToSave: selectionText,
            }
        })
    }

    function handleClickAnki() {
        spawnPopup()
    }
</script>

<div class="panel" on:click={handleClickAnki}>
    <img src={chrome.runtime.getURL(`icons/anki.png`)} alt="Save 2 Anki" class="icon">
</div>
<style>
.icon {
    height: 16px;
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