# Vue Typed

> The easiest way to define types in Vue prop.

## Installation

```bash
npm install --save @mhmd/vue-typed
# or
yarn add @mhmd/vue-typed
```

## Example

```js
import Typed from '@mhmd/vue-typed'

export default {

  name: 'Foo',

  props: {

    bar: Typed.is.str.with('baz').def()

  }
}


```
