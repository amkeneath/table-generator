# @stl-davao/table-generator

<p>
  Generate table easily
</p>
<a href="https://www.npmjs.com/package/@stl-davao/table-generator">https://www.npmjs.com/package/@stl-davao/table-generator</a>

## Setup


```bash
npm add --save @stl-davao/table-generator
```

## Usage

### Nuxt.js

#### nuxt.config.js

```js
plugins: [
    { src: '~/plugins/table-generator-client', mode: 'client', ssr: false }
]
```

#### table-generator-client.js

```js
import tableGenerator from '@stl-davao/table-generator'

export default ({ app }, inject) => {
  inject('tableGenerator', tableGenerator)
}
```
