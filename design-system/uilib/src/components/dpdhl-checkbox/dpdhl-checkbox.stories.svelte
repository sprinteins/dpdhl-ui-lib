<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import "@sprinteins/dpdhl-uilib";

	$: checked = true;
</script>

<Meta title="11_Components/Checkbox" component={null} />

<Template let:args />

<Story
	name="Primary"
	args={{
		disabled: false,
		indeterminate: false,
		error: false,
	}}
	let:args
>
  	<main>
		<dpdhl-checkbox
			on:check={() => checked = !checked}
			name="checkbox-example"
			disabled={args.disabled}
			checked={checked}
			indeterminate={args.indeterminate}
			error={args.error}>
		</dpdhl-checkbox>
		<p>Checked: {checked}</p>
  	</main>
</Story>

<style></style>
