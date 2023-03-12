<script>
        // TODO: gather data from ankiconnect
    let ankiCardDecks = []
    let ankiCardModels = []
    let cardModelFields = ['testing', 'yep']

    function handleSubmit(e) {
        // TODO: create card from data
        const formData = new FormData(e.target)

    }
</script>

<div class="absolute bg-zinc-800 min-w-[20rem] rounded-[0.3rem] blur-bg">
    <!-- TODO: draggable handle -->
    <div draggable class="w-full h-5 rounded-[0.3rem] border-[0.5px] border-zinc-600 box-border flex">
        <div class="grid grid-rows-2 mx-auto w-max justify-center gap-x-4 my-auto">
            <div class="bg-zinc-500 rounded-full aspect-square w-1 h-1"></div>
            <div class="bg-zinc-500 rounded-full aspect-square w-1 h-1"></div>
            <div class="bg-zinc-500 rounded-full aspect-square w-1 h-1"></div>
            <div class="bg-zinc-500 rounded-full aspect-square w-1 h-1"></div>
            <div class="bg-zinc-500 rounded-full aspect-square w-1 h-1"></div>
            <div class="bg-zinc-500 rounded-full aspect-square w-1 h-1"></div>
        </div>
    </div>
    <div class="p-5 flex flex-col">
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
                    <label for="model" class="block">Card Models</label>  
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

    .bg-zinc-500-trs {
        background-color: rgba(113, 113, 122, 0.3);
    }
</style>
