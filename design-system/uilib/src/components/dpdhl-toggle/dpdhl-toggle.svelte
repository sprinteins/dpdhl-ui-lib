<svelte:options tag={"dpdhl-toggle"} />

<script lang="ts">
	import { makeEvent } from '../../x/util/dispatch';

	/**
	 * A Toggle Component
	 * @component
	 */

	export let name = "";

	export let checked = false;
	$: _checked = checked;

	let root: HTMLDivElement;
	function handleClick() {
		root.dispatchEvent(makeEvent('check'))
	}
  
</script>

<main bind:this={root}>
	<label class="switch">
		<input 
			name={name}
			type="checkbox"
			bind:checked={_checked}
			on:click={handleClick}
		>
		<span class="slider"></span>
	</label>
</main>

<style>
	.switch {
		position:	relative;
		display:	inline-block;
		width:		2.125rem;
		height:		0.875rem;
		margin:		0.375rem;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 	0;
		width: 		0;
		height: 	0;
	} 

	.slider {
		position: 			absolute;
		cursor: 			pointer;
		top: 				0;
		left: 				0;
		right: 				0;
		bottom: 			0;
		background-color:		var(--color-gray30);
		-webkit-transition:		.4s;
		transition:			.4s;
		border-radius:			2.125rem;
	}

	.slider:before {
		position: 			absolute;
		content: 			"";
		height: 			1.25rem;
		width: 				1.25rem;
		left: 				-0.125rem;
		bottom: 			-0.125rem;
		transition:			.4s;
		box-shadow:			0 3px 5px rgba(0,0,0,0.12), 0 3px 5px rgba(0,0,0,0.24);
		background-color:		white;
		-webkit-transition:		.4s;
		border-radius:			50%;

	}

	input:checked + .slider {
		background-color:	var(--color-green-dark);
	}

	input:focus + .slider {
		box-shadow:		0 0 1px var(--color-green-dark);
	}

	input:checked + .slider:before {
		transform:			translateX(1.3125rem);
		-webkit-transform:		translateX(1.3125rem);
		-ms-transform:			translateX(1.3125rem);
	}


</style>
