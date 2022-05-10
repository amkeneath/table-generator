# @stl-davao/table-generator

<p>
  Generate table easily
</p>
<a href="https://www.npmjs.com/package/@stl-davao/table-generator">https://www.npmjs.com/package/@stl-davao/table-generator</a>


## Setup


```bash
npm i --save @stl-davao/table-generator
```

## Usage

### Nuxt.js

#### nuxt.config.js

```js
plugins: [
    { src: '~/plugins/table-generator', mode: 'client', ssr: false }
]
```

#### table-generator.js

```js
import tableGenerator from '@stl-davao/table-generator'

export default ({ app }, inject) => {
  inject('table', tableGenerator)
}
```

## Generate Table

```js
/** This will return a table in plain text format **/
const table = this.$table.generate(tableData)

/** You can then display it inside your element e.g. **/
document.querySelector('#my-element').innerHTML = table
```

## Sample Table

### The data

```js
const items = []

/** Initialize random items for table data **/
for (let x = 0; x < 1000; ++x) {
    const amount = `${Math.floor(Math.random() * 990) + 10}.00`
    let combi = `00${x}`
    combi = combi.substring(combi.length - 3, combi.length)
    items.push({ combi, amount })
}

/** The table data **/
const tableData = {
    header: {
        title: 'STL-3D (10:30 AM) Summary of Bets'
    },
    subHeaders: [
        { text: 'Draw Generated: April 11, 2022, 4:34 PM' },
        { text: 'Draw Date: April 11, 2022' },
        { text: 'Draw Period/s: 10:30 AM' },
        { text: 'Cluster/s: All' },
        { text: 'Grand Total: P 34,696.00' }
    ],
    footer: { format: 'Page [current-page] of [total-page]' },
    content: {
        colLayoutCount: 4,
        colLayoutTitle: 'Combi/Amount',
        items: items,
        itemsRowCount: 10
    }
}
```

### Result
<table> <thead> <tr style="table-layout: fixed"> <th class="table-header" colspan="8">STL-3D (10:30 AM) Summary of Bets</th> </tr></thead> <tbody> <tr> <td class="sub-header" colspan="8">Draw Generated: April 11, 2022, 4:34 PM</td></tr><tr> <td class="sub-header" colspan="8">Draw Date: April 11, 2022</td></tr><tr> <td class="sub-header" colspan="8">Draw Period/s: 10:30 AM</td></tr><tr> <td class="sub-header" colspan="8">Cluster/s: All</td></tr><tr> <td class="sub-header" colspan="8">Grand Total: P 34,696.00</td></tr><tr> <td class="col-group-title" colspan="2">Combi/Amount</td><td class="col-group-title" colspan="2">Combi/Amount</td><td class="col-group-title" colspan="2">Combi/Amount</td><td class="col-group-title" colspan="2">Combi/Amount</td></tr><tr> <td class="items" colspan="1">000</td><td class="items" colspan="1">725.00</td><td class="items" colspan="1">010</td><td class="items" colspan="1">647.00</td><td class="items" colspan="1">020</td><td class="items" colspan="1">283.00</td><td class="items" colspan="1">030</td><td class="items" colspan="1">652.00</td></tr><tr> <td class="items" colspan="1">001</td><td class="items" colspan="1">957.00</td><td class="items" colspan="1">011</td><td class="items" colspan="1">11.00</td><td class="items" colspan="1">021</td><td class="items" colspan="1">57.00</td><td class="items" colspan="1">031</td><td class="items" colspan="1">792.00</td></tr><tr> <td class="items" colspan="1">002</td><td class="items" colspan="1">516.00</td><td class="items" colspan="1">012</td><td class="items" colspan="1">718.00</td><td class="items" colspan="1">022</td><td class="items" colspan="1">708.00</td><td class="items" colspan="1">032</td><td class="items" colspan="1">677.00</td></tr><tr> <td class="items" colspan="1">003</td><td class="items" colspan="1">109.00</td><td class="items" colspan="1">013</td><td class="items" colspan="1">815.00</td><td class="items" colspan="1">023</td><td class="items" colspan="1">298.00</td><td class="items" colspan="1">033</td><td class="items" colspan="1">395.00</td></tr><tr> <td class="items" colspan="1">004</td><td class="items" colspan="1">648.00</td><td class="items" colspan="1">014</td><td class="items" colspan="1">629.00</td><td class="items" colspan="1">024</td><td class="items" colspan="1">694.00</td><td class="items" colspan="1">034</td><td class="items" colspan="1">552.00</td></tr><tr> <td class="items" colspan="1">005</td><td class="items" colspan="1">458.00</td><td class="items" colspan="1">015</td><td class="items" colspan="1">883.00</td><td class="items" colspan="1">025</td><td class="items" colspan="1">857.00</td><td class="items" colspan="1">035</td><td class="items" colspan="1">850.00</td></tr><tr> <td class="items" colspan="1">006</td><td class="items" colspan="1">885.00</td><td class="items" colspan="1">016</td><td class="items" colspan="1">37.00</td><td class="items" colspan="1">026</td><td class="items" colspan="1">843.00</td><td class="items" colspan="1">036</td><td class="items" colspan="1">935.00</td></tr><tr> <td class="items" colspan="1">007</td><td class="items" colspan="1">897.00</td><td class="items" colspan="1">017</td><td class="items" colspan="1">437.00</td><td class="items" colspan="1">027</td><td class="items" colspan="1">649.00</td><td class="items" colspan="1">037</td><td class="items" colspan="1">274.00</td></tr><tr> <td class="items" colspan="1">008</td><td class="items" colspan="1">683.00</td><td class="items" colspan="1">018</td><td class="items" colspan="1">984.00</td><td class="items" colspan="1">028</td><td class="items" colspan="1">757.00</td><td class="items" colspan="1">038</td><td class="items" colspan="1">247.00</td></tr><tr> <td class="items" colspan="1">009</td><td class="items" colspan="1">278.00</td><td class="items" colspan="1">019</td><td class="items" colspan="1">432.00</td><td class="items" colspan="1">029</td><td class="items" colspan="1">34.00</td><td class="items" colspan="1">039</td><td class="items" colspan="1">148.00</td></tr><tr> <td class="footer" colspan="8">Page 1 of 25</td></tr></tbody></table>


## Data Properties

#### header (Object)

##### title (String)
A property of header that accepts string value, which will be displayed at the table header in every pages.

#### subHeaders (Array of Objects)
Sample object inside array: { text: 'Some text' }. All subheaders will be displayed under header in every pages.
<li>text: A string property of the object that accepts the string to be displayed.</li>

#### footer (Object, Boolean, String)
This property is optional. Setting this property to false will not display footer in every pages. This defaults to true.
Alternatively, you can set this with an object value.
<li>text: An object property that can be used to override the page display text.</li>
<li>Use '[current-page]' and '[total-page]' if your footer includes page info.</li>
<li>Also accepts string value for simplicity which is the same as setting it to an object with text property.</li>
