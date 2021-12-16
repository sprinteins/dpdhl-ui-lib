<svelte:options tag="dpdhl-select" />

<script lang="ts">
	import { onMount } from "svelte";
	import { makeEvent } from "../../x/util/dispatch";
	import "../dpdhl-icon";
	import { KeyItemAdded } from "./dpdhl-select-item.svelte";
	import { clickOutside } from "./clickOutside.js";
	import type { Item } from "./item";

	export let multiple = false;
	export let error = false;
	$: _error = error;

	export let helpertext = "";
	export let label = "";

	export let placeholder = "";
	$: placholderItem = {
		label: placeholder,
		value: undefined,
	};

	$: items = [];
	let assignedElements: HTMLElement[] = [];
	let selectedItem: Item = placholderItem;
	$: selectedItems = [];

    function initItemRegistration(node: HTMLDivElement){
        registerItems(node);
        node.addEventListener(KeyItemAdded, () => registerItems(node))
    }


    function registerItems(container: HTMLDivElement){
		const slot = container.childNodes[0] as HTMLSlotElement;

		assignedElements = slot.assignedElements() as HTMLElement[];

		assignedElements.forEach((el, ei) => {
			const alreadyRegistered = el.hasAttribute("registered");
			if (alreadyRegistered) {
				return;
			}
			el.setAttribute("registered", "");

			// Label
			const label = el.getAttribute("label");
			const value = el.getAttribute("value");
			if (items) {
				items[ei] = {
					label,
					value,
				};
			}
		});
	}

	let open = false;
	function toggleOpen() {
		open = !open;
	}

	function handleClickOutside(_) {
		if (open) {
			open = false;
		}
	}

  	onMount(() => {
		if (!multiple) {
			selectedItem = placholderItem;
		} else {
			selectedItems = [];
		}
  	});

  	let root: HTMLDivElement;

	function onItemClick(item: Item) {
		if (multiple) {
			if (selectedItems.includes(item))
				selectedItems = selectedItems.filter((m) => m.value !== item.value);
			else 
				selectedItems = [...selectedItems, item];
			root.dispatchEvent(makeEvent("selectMany", selectedItems));
		} else {
			if (selectedItem === item) {
				selectedItem = placholderItem;
			} else {
				selectedItem = item;
			}
			open = false;
			root.dispatchEvent(makeEvent("selectOne", item.value));
		}
	}

</script>
<main>
	{#if label}
		<span class="label">{label}</span>
	{/if}
	<div class="select-container" class:open bind:this={root}>
		<div class="select" class:open class:error={_error}>
			<div class="dropdown" on:click={toggleOpen}>
				<span class="content">
					{#if multiple}
						{#if !selectedItems.length}
							<dpdhl-copy class="input-placeholder" class:error={_error}>{placeholder}</dpdhl-copy>
						{:else}
							<dpdhl-copy class="selected">
								{selectedItems.map((item) => item.label).join(", ")}
							</dpdhl-copy>
						{/if}
					{:else}
						{#if !selectedItem || !selectedItem.value}
							<dpdhl-copy class="input-placeholder" class:error={_error}>{placeholder}</dpdhl-copy>
						{:else}
							<dpdhl-copy class="selected">{selectedItem.label}</dpdhl-copy>
						{/if}
					{/if}
				</span>
				<span class="chevron">
					<dpdhl-icon
					width="16"
					height="16"
					color="var(--color-dhlred)"
					icon="chevron_down"
					/>
				</span>
			</div>
		</div>

		<ul class:error={_error} class:open={open}>
			{#each items as item}
				<li on:click={() => onItemClick(item)}>
					<dpdhl-copy class="item-label">{item.label}</dpdhl-copy>
					{#if (multiple && selectedItems.includes(item)) 
						|| (!multiple && item === selectedItem)}
						<dpdhl-icon icon="checkmark" width="16" height="16" color="var(--color-dhlred)" />
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	<div
		use:initItemRegistration
		class="container"
		use:clickOutside
		on:click_outside={handleClickOutside}
	>
		<slot />
	</div>
	{#if helpertext}
		<span class="helper-text">{helpertext}</span>
	{/if}
</main>

<style>
	:host {
		--border-color: var(--color-gray45);
	}

	.select-container {
		position: relative;
		display: inline-block;
		width: 100%;
	}

	main {
		text-align: left;
	}

	.select {
		border-radius: var(--border-radius);
		border-color: var(--border-color);
		border-width: 1px;
		border-style: solid;
		flex-grow: 1;
		box-sizing: border-box;
		padding: 0;
		position: relative;
		height: 3rem;
	}

	.select.error {
		border-color: 	var(--color-dhlred);
		color: 			var(--color-dhlred);
		background: 	var(--color-dhlred-light);
	}

	.select.open {
		border-width: 	2px;
		border-color: 	var(--color-black);
	}

	.select.open.error {
		border-color: 	var(--color-dhlred);
	}

	.dropdown {
		padding: 		0.8rem 0.5rem;
		cursor: 		pointer;
		line-height: 	0.8rem;
	}

	.content {
		flex-grow: 1;
	}

	.chevron {
		display: 	inline-block;
		text-align: center;
		width: 		1rem;
		overflow: 	hidden;
		align-self: center;
		margin-top: 0.16rem;
        transition:                 transform 0.1s;
        transition-timing-function: ease;
	}

	.open .chevron {
        transform: scale(1, -1);
	}

	.container {
		display: none;
	}
	.item-label {
		flex-grow: 1;
	}

	ul {
		display: 	none;
		margin: 	0;
		padding: 	0;
		width: 		100%;
		background: var(--color-white);
		position: 	absolute;
		box-sizing: border-box;
		border-width: 	1px;
		border-style: 	solid;
		border-radius: 	var(--border-radius);
		border-color: 	var(--border-color);
		border-top: 	none;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	.open ul {
		display: 	block;
		border: 	2px solid var(--color-black);
		border-top: none;
	}

	ul.error {
		border: 	2px solid var(--color-dhlred);
		border-top: none;
	}

	.open .select {
		border-bottom: 				none;
		border-bottom-left-radius: 	0;
		border-bottom-right-radius: 0;
		border-width: 				2px;
	}

	li {
		padding: 		0.5rem;
		cursor: 		pointer;
		display: 		flex;
		flex-direction: row;
		border-top: 	1px solid var(--color-gray20);
	}
	li:last-of-type {
		border-bottom-left-radius: 	calc(var(--border-radius) - 1px);
		border-bottom-right-radius: calc(var(--border-radius) - 1px);
	}
	li:hover {
        background-color: var(--color-gray05);
	}
	li:focus {
		border-top: 	thin solid var(--color-gray20);
		border-bottom: 	thin solid var(--color-gray20);
	}

	.input-placeholder {
		color: 			var(--color-gray20);
		display: 		inline-block;
		width: 			calc(100% - 1.75rem);
		white-space: 	nowrap;
		overflow: 		hidden;
		text-overflow: 	ellipsis;
		line-height: 	1rem;
	}

	.input-placeholder.error {
		color: var(--color-dhlred);
	}

	.selected {
		display: 		inline-block;
		width: 			calc(100% - 1.75rem);
		white-space: 	nowrap;
		overflow: 		hidden;
		text-overflow: 	ellipsis;
		line-height: 	1rem;
	}

	.helper-text {
		line-height: 	1rem;
		font-size: 		0.875rem;
		color: 			var(--color-gray67);
	}

	.label {
		font-weight: 700;
		font-size: 14px;
		line-height: 1rem;
		text-align: left;
	}
</style>
