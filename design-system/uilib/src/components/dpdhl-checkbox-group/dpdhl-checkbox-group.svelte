<script lang="ts">
    import { onMount } from 'svelte'
    import { makeEvent } from '../../x/util/dispatch'
    import "../dpdhl-icon"
    import { KeyItemAdded } from './dpdhl-checkbox-item.svelte'
    import type { Item } from './Item';

    let container: HTMLElement
    let items: Item[] = []
    let selectedItems: string[] = []
    let assignedElements: HTMLElement[] = []

    onMount(() => {
        registerItems();
        container.addEventListener(KeyItemAdded, registerItems)
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
            const disabled = el.getAttribute('disabled') === "true";
            const error = el.getAttribute('error') === "true";
            const indeterminate = el.getAttribute('indeterminate') === "true";
            if(items){ 
                items[ei] = {
                    label,
                    value,
                    disabled,
                    error,
                    indeterminate
                }
            }
        });
    }

    let root: HTMLDivElement;
    function onItemClick(item: Item) {
        if (selectedItems.includes(item.value)) {
            selectedItems = [...selectedItems.filter(i => i !== item.value)]
        } else {
            selectedItems = [...selectedItems, item.value]
        }
        root.dispatchEvent(makeEvent('select', selectedItems))
    }

</script>
<svelte:options tag="dpdhl-checkbox-group" />

<div bind:this={root} class="root">
	{#each items as item}
		<dpdhl-checkbox
			on:check={() => onItemClick(item)}
			checked={selectedItems.includes(item.value)}
			value={item.value}
			disabled={item.disabled}
			error={item.error}
			indeterminate={item.indeterminate}>
			{item.label}
		</dpdhl-checkbox>
	{/each}
</div>


<div bind:this={container}>
    <slot />
</div>

<style>
	.root {
        display:        flex;
        flex-direction: column;
        gap:            var(--radio-group__items-gap, 1.5rem);
    }

</style>