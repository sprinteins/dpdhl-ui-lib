<script context='module' lang='ts'>
    export const KeyItemAdded = 'itemadded'
</script>
<script lang='ts'>
    function itemAdded(node: HTMLSpanElement){
        node.dispatchEvent(new CustomEvent(KeyItemAdded,{
            bubbles: true,
            composed: true,
        }))
    }
</script>
<svelte:options tag="dpdhl-select-item" />

<span use:itemAdded>
    <slot />
</span>