<div class="panel">
    <img src={chrome.runtime.getURL(`icons/anki.png`)} alt="Save 2 Anki" class="icon">
</div>
<style>
.icon {
    height: 1.5rem;
    /* https://stackoverflow.com/a/37596806 */
    display: block;
}

.panel {
    height: min-content;
    background-color: hsla(306, 92%, 54%, .8);
    vertical-align: bottom;    
    -webkit-backdrop-filter: blur(3px); 
    backdrop-filter: blur(3px);
}
</style>