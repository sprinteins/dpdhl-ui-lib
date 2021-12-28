<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import "@sprinteins/dpdhl-uilib";

	$: checked = true;
	
</script>

<Meta title="11_Components/Toggle" component={null} />

<Template let:args />

<Story
	name="Primary"
	args={{}}
	let:args
>
  	<main>
		<dpdhl-toggle
			on:check={() => checked = !checked}
			name="checkbox-example"
			checked={checked}>
		</dpdhl-toggle>
		<p>Checked: {checked}</p>
  	</main>
</Story>

<style></style>
