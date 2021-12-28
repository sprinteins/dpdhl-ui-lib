<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import '@sprinteins/dpdhl-uilib'

    let selected = []

    function handleSelectItems(event) {
        selected = event.detail;
    }
</script>


<Meta title="11_Components/Checkbox Group" component={null} argTypes={{
    itemsGap: {
        name: "Gap between items [rem]", 
    },
}}/>

<Template let:args>
</Template>


<Template let:args>
    <div style="--checkbox-group__items-gap: {args.itemsGap}rem;">
        <dpdhl-checkbox-group on:select={handleSelectItems}>
            <dpdhl-checkbox-item label="Option A" value="option-a" />
            <dpdhl-checkbox-item label="Option B" value="option-b" disabled={true}/>
            <dpdhl-checkbox-item label="Option C" value="option-c" error={true}/>
            <dpdhl-checkbox-item label="Option D" value="option-d" indeterminate={true}/>
        </dpdhl-checkbox-group>
    </div>
    <p>Selected Items: {selected.length && selected.join(', ')} </p>
</Template>

<Story name="Primary" args={{
    itemsGap: 1.5
}}/>

<style></style>
