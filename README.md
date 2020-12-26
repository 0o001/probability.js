# probability.js

```js
const items = [ 
                { 
                    item: false,
                    percent: 10
                },
                { 
                    item: null,
                    percent: 40
                },
                { 
                    item: true,
                    percent: 50
                }
            ]

const probability = new Probability( items )

console.log( probability.random() )
//output: true
console.log( probability.min() )
//output: { item: false, percent: 10 }
console.log( probability.max() )
//output: { item: true, percent: 50 }
console.log( probability.get(0) )
//output: { item: false, percent: 10 }
```

```js
const probability = new Probability( items, { settings: { maxPercent: 200 } } )
```

```js
const probability = new Probability( items, { settings: { maxPercent: items.length * 10 } } )
```
