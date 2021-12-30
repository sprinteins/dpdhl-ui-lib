<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import "@sprinteins/dpdhl-uilib";
	import { Type } from "./type";

	let open = true;

	function handleClose() {
		open = false;
	}

	function handleOpen() {
		open = true;
	}

</script>

<!-- https://www.dpdhl-brands.com/dpdhl-group/en/guides/touchpoints/user-interface/components/notifications.html -->
<Template let:args></Template>

<Meta
	title="11_Components/Toast"
	component={null}
	argTypes={{
		type: {
			options: [Type.error, Type.notification],
			control: { type: "select" },
		},
	}}
/>

<Story
	let:args
	name="Primary"
	args={{
		type: Type.error,
		title: "Toast Title",
		message: "And here we go with a more detailed message.",
		showIcon: false,
		customContent: true
	}}
>
	<dpdhl-toast
		{open}
		on:close={handleClose}
		type={args.type}
		title={args.title}
		message={args.message}
	>
		{#if args.showIcon}
			<dpdhl-icon
			slot="icon"
			width={20}
			height={20}
			color="#FFF"
			icon="exception"
			/>
		{/if}
	</dpdhl-toast>
	<button on:click={handleOpen}>Show toast</button>
</Story>


<Story 
	let:args
	name="Customized" 
	args={{
		type: Type.error,
		showIcon: false
	}}>
    <dpdhl-toast
		{open}
		on:closeToast={handleClose}
		type="error"
		{...args}
	>	
		{#if args.showIcon}
			<dpdhl-icon
				slot="icon"
				width={20}
				height={20}
				color="#FFF"
				icon="exception"
			/>
		{/if}
		<div slot="content" class="content">
			<dpdhl-typography variant="h5">Custom title</dpdhl-typography>
			<dpdhl-typography>And here we go with a more detailed message.</dpdhl-typography>
			<dpdhl-button type="primary" size="tiny" class="button">Button</dpdhl-button>
		</div>
	</dpdhl-toast>
	<button on:click={handleOpen}>Show toast</button>
</Story>

<style>
	.content {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}
	
	.button {
		margin-top: 0.3rem;
	}
</style>
