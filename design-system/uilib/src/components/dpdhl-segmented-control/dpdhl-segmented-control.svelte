<script lang="ts">
    import { onMount } from 'svelte'
	import { makeEvent } from '../../x/util/dispatch'
    import "../dpdhl-icon"
    import { KeyItemAdded } from './dpdhl-segmented-control-item.svelte'

    interface Item {
        label: string
        value: unknown
    }

    let container: HTMLElement
    let items: Item[] = []
    let assignedElements: HTMLElement[] = []

	export let defaultid = 0;

	let selectedItem: Item;

    onMount(() => {
        registerItems();
        container.addEventListener(KeyItemAdded, registerItems);
		selectedItem = items[defaultid];
    })    

    function registerItems(){
        const slot = container.childNodes[0] as HTMLSlotElement

        assignedElements = slot.assignedElements() as HTMLElement[]

        assignedElements.forEach( (el, ei)  => {
            const alreadyRegistered = el.hasAttribute('registered')
            if( alreadyRegistered ){
                return;
            }
            el.setAttribute('registered','');
            const label = el.getAttribute('label')
            const value = el.getAttribute('value')
            if(items){ 
                items[ei] = {
                    label,
                    value
                }
            }
        });
    }



    let root: HTMLDivElement;
    function onItemClick(item: Item){
		selectedItem = item
        root.dispatchEvent(makeEvent('select', items.indexOf(item)))
    }

</script>
<svelte:options tag="dpdhl-segmented-control" />

<div bind:this={root} class="root">
	{#each items as item}
		<span 
			class="item"
			on:click={() => onItemClick(item)}
			class:selected={selectedItem === item}>
			{item.label}
		</span>
	{/each}
</div>


<div bind:this={container}>
    <slot />
</div>

<style>
	.root {
        cursor:         pointer;
        display:        inline-grid;
        grid-auto-flow: column;
        border:         1px solid var(--color-postyellow);
        border-radius:  2px;
    }

	.item {
        padding:        0.75rem;
        font-weight:    700;
        font-size:      0.875rem;
        line-height:    0.5rem;
        border-right:   1px solid var(--color-postyellow);
    }
	.item:last-child {
        border-right: none;
    }

    .item.selected {
        background-color: var(--color-postyellow);
    }

    .item:hover {
        background-color: var(--color-postyellow);
    }

</style>