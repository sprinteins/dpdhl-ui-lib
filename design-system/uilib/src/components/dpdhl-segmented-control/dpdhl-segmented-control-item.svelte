<script context='module' lang='ts'>
    export const KeyItemAdded = 'itemadded'
</script>
<script lang='ts'>
    import { onMount } from 'svelte'

    let contentRef: HTMLElement
    function itemAdded(){
        if(!contentRef) { return }
        contentRef.dispatchEvent(new CustomEvent(KeyItemAdded,{
            bubbles: true,
            composed: true,
        }))
    }
    onMount(itemAdded);
</script>
<svelte:options tag="dpdhl-segmented-control-item" />

<span>
    <slot />
</span>