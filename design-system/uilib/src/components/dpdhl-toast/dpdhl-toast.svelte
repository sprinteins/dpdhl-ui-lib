<svelte:options tag="dpdhl-toast" />

<script lang="ts">
import { makeEvent } from "../../x/util/dispatch";

	/**
	 * A Toast Component
	 * @component
	 */

	/**
	 * Type of the toast: Error, Notification
	 */
	import { Type } from "./type";

	export let open = true;
	$: _open = open;

	export let title: string;
	$: _title = title;

	export let message: string;
	$: _message = message;

	export let type: string = Type.error;

	export let fullWidth: boolean = true;

	let toast: HTMLElement;
	
	function handleClose() {
		toast.dispatchEvent(makeEvent("close", null));
	}
</script>

{#if _open}
	<main
		class:notification={type === Type.notification}
		class:error={type === Type.error}
		class:full-width={fullWidth}
		bind:this={toast}
	>
		<div class="content-container">
			<slot name="icon" />
			<div class="text-container">
				{#if _title}
					<div class="title">{_title}</div>
				{/if}
				{#if _message}
					<div class="message">{_message}</div>
				{/if}
				<slot name="content" />
			</div>
		</div>
		<dpdhl-icon
			on:click={handleClose}
			width={16}
			height={16}
			color="#FFF"
			icon="cancel"
			class="close-icon"
		/>
  	</main>
{/if}

<style>
	main {
		padding:		var(--padding-top-bottom) var(--padding-left-right);
		display: 		flex;
		flex-direction: 	row;
		align-items: 		center;
		justify-content: 	space-between;
		padding-top:		var(--toast__padding-top, 1rem);
		padding-bottom: 	var(--toast__padding-bottom, 1rem);
		padding-left: 		var(--toast__padding-left, 1rem);
		padding-right: 		var(--toast__padding-right, 1rem);
	}

	main.full-width {
		position: 		fixed;
		flex-grow: 		1;
		bottom:			0;
		left:			0;
		right:			0;
	}

	main.notification {
		color: 			var(--toast__color, var(--color-white));
		background-color: 	var(--color-green-dark);
	}

	main.error {
		color: 			var(--toast__color, var(--color-white));
		background-color: 	var(--color-dhlred);
	}

	.title {
		line-height: 		var(--line-height);
		font-weight: 		700;
		font-size: 		var(--font-size);
		padding: 		0;
		margin: 		0;
	}

	.message {
		font-size: 	calc(var(--font-size) * 0.875);
		line-height: 	var(--line-height);
		font-weight: 	400;
		padding: 	0;
		margin: 	0;
	}

	div.text-container {
		display: 		flex;
		flex-direction: 	column;
		text-align: left;
	}

	div.content-container {
		display: 		flex;
		gap: 			0.75rem;
		flex-direction: 	row;
	}

	.close-icon {
		cursor: 		pointer;
	}
</style>
