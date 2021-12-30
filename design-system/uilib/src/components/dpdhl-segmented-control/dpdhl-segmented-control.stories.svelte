<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import '@sprinteins/dpdhl-uilib'

    let selected = "";
</script>

<Meta title="11_Components/Segmented Control" component={null} />

<Template let:args/>

 <!-- TODO: passing args.defaultId as defaultid breaks the component -->
<Story name="Primary" args={{defaultId: 0}} let:args>
    <main>
        <dpdhl-segmented-control defaultid={0} on:select={(event) => selected = event.detail}>
            <dpdhl-segmented-control-item label="Option A" value="option-a" />
            <dpdhl-segmented-control-item label="Option B" value="option-b" disabled={true}/>
            <dpdhl-segmented-control-item label="Option C" value="option-c" error={true}/>
        </dpdhl-segmented-control>
        <div class="selected">Selected Id: {selected}</div>
    </main>
</Story>


<style>
    .selected {
        margin-top: 1rem;
    }
</style>

