# Vue Typed

> The easiest way to define types in Vue prop.

## Installation

```bash
npm install --save @marcelohmdias/vue-typed
# or
yarn add @marcelohmdias/vue-typed
```

## Example

```js
import Typed from '@marcelohmdias/vue-typed'

export default {

  name: 'Foo',

  props: {

    bar: Typed.is.str.with('baz').def()

  }
}


```
