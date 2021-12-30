<script context="module" lang="ts">
	export const ITEMS = {};
</script>

<script lang="ts">
	import { onMount } from "svelte/internal";
	import { makeEvent } from '../../x/util/dispatch';

	export let count 		= 12;
	export let maxpages 	= 10;
	export let defaultpage 	= 1;
	
	let selectedItem = defaultpage;

	let from = 0;
	let to = 0;

	onMount(async () => {
		setPaginationBoundaries();
		selectedItem = defaultpage;
	});

	function setPaginationBoundaries() {
		let max = Number(maxpages);
		let margin = Math.floor(max/2);
		let first = selectedItem - margin;
		if (first > count - max) {
			first = count - max + 1;
		}
		if (first <= 0) {
			first = 1;
		}
		let last = first + max - 1;
		from = first;
		to = last;
	}

	let root: HTMLDivElement;
	function selectItem(idx) {
		selectedItem = idx;
		root.dispatchEvent(makeEvent('select', idx))
		setPaginationBoundaries();
	}

	function selectPrevious() {
		if (selectedItem > 1) {
			selectItem(selectedItem - 1);
		}
	}

	function selectNext() {
		if (selectedItem < count) {
			selectItem(selectedItem + 1)
		}
	}
</script>

<svelte:options tag="dpdhl-pagination" />

<div class="pagination-list" bind:this={root}>
	<span 
		class="item" 
		class:disabled={selectedItem <= 1}
		on:click={selectPrevious}>
			{'<'}
	</span>
	<!-- iterate over an array of numbers [from ... to] -->	
	{#each [...Array(to - from + 1)].map((_, i) => from + i) as n}
		<span 
			class="item" 
			class:selected={Number(selectedItem) === n}
			on:click="{() => selectItem(n)}">
				{n}
				<slot></slot>
		</span>
	{/each}
	<span 
		class="item" 
		class:disabled={selectedItem >= count}
		on:click={selectNext}>
			{'>'}
	</span>
</div>

<style>
    .pagination-list {
        cursor:         pointer;
        display:        inline-grid;
        grid-auto-flow: column;
	}

	.item {
        padding:        0.75rem;
        font-weight:    700;
        font-size:      0.875rem;
        line-height:    0.5rem;
		min-width: 		0.75rem;
		text-align: 	center;
    }

	.item.disabled {
		color: var(--color-gray45);
		cursor: not-allowed;
	}

    .item.selected {
        border-bottom: 2px solid var(--color-dhlred);
    }

    .item:hover {
        background-color: var(--color-dhlred-light);
    }

	.item:hover.disabled {
        background-color: var(--color-gray08);
    }
</style>