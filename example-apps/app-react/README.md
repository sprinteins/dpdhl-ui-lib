# Example project with ReactJS

The goal of this project is to show how to use the UI components in a React project.

## How to use web components in React

- Import component from "@sprinteins/dpdhl-uilib/react":

```js script
import { Pagination } from '@sprinteins/dpdhl-uilib/react' 
```

- Transform Svelte component into React syntax. Callback functions (for example, on:select) should be renamed to camel case (onSelect).

The rest of the props should be passed as usual.

#### Example:

Component in Svelte:

```js script
<dpdhl-pagination 
    on:select={(event) => { /* do something with event.detail */ }} 
    defaultpage={selectedPage} 
    maxpages={10}
    count={12}>
</dpdhl-pagination>
```

Component in React:

```js script
<Pagination
    onSelect={(event) => { /* do something with event.detail */ }}
    defaultpage={selectedPage}
    maxpages={10}
    count={12}>
</Pagination>
```
