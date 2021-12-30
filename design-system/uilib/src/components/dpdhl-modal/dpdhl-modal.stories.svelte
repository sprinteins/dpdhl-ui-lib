<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import '@sprinteins/dpdhl-uilib'

    let open = ''

    function openDialog(){
        open = true
    }

    function closeDialog(){
        open = undefined
    }

</script>


<Meta title="11_Components/Modal" component={null} />

<!-- https://www.dpdhl-brands.com/dpdhl-group/en/tools/icon-library.html -->
<Template let:args>
    <dpdhl-button on:click={openDialog} size="small" type="primary"> Open Modal </dpdhl-button>
    <dpdhl-modal {open} on:close={closeDialog} >
        <h2 slot="header">Dialog Modal</h2>
        
        <span slot="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque eu egestas eros. Sed blandit efficitur justo, ac laoreet 
            velit. Cras et elit dui. Morbi magna dolor, malesuada sit amet
            facilisis at, auctor sed justo. Integer id faucibus magna, ut 
            interdum arcu.
        </span>


        <div slot="actions" class="actions">
            <dpdhl-button on:click={closeDialog} size="Tiny">Close</dpdhl-button>
        </div>
    </dpdhl-modal>
</Template>


<style>
   .actions{
       text-align: right;
   }
   h2{
       padding: 0;
       margin:  0;
   }
</style>

<Story name="Primary" args={{
    open: false,
}}/>
