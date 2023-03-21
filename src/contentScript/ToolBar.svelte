<script>
    import { getContext } from "svelte";


    export let ankiProps
    export let popupProps
    export let parentNode = getContext('parentNode')

    function spawnPopup(ankiProps) {

        popupProps = {initialX: hoverX, initialY: hoverY, parentDocument, contentToSave}
        isPopupOn = true
    }

    function handleClickAnki() {
        spawnPopup()
    }
</script>

<div class="panel" on:click={() => {

}}>
    <img src={chrome.runtime.getURL(`icons/anki.png`)} alt="Save 2 Anki" class="icon">
</div>
<style>
.icon {
    height: 1.5rem;
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