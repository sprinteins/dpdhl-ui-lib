
<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import '@sprinteins/dpdhl-uilib'

    let selectedItem = "";

    function handleSelect(event) {
        selectedItem = event.detail
    }

</script>


<Meta title="11_Components/Pagination" component={null}/>

<Template let:args>
    <dpdhl-pagination 
        on:select={handleSelect} 
        defaultpage={args.defaultPage} 
        maxpages={args.maxPages}
        count={args.count}>
    </dpdhl-pagination>
    <p>Selected: {selectedItem}</p>

</Template>

<style></style>

<Story name="Primary" args={{
    count: 12,
    maxPages: 7,
    defaultPage: 2,
}}/>

