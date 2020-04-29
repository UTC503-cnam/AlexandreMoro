// A faire avant :
// npm i --save lodash  --save: Package will appear in your dependencies
// npm i @types/node   TypeScript definitions for Node.js (???)

var fp = require("lodash/fp");

let squared = (x) => x * x;
let doubled = (x) => x * 2;
let halfed = (x) => x / 2;
let squared_root = (x) => Math.sqrt(x);

// Utilisez une fonction de lodash pour composer

const compute = fp.compose(squared_root, doubled, halfed, squared);

console.log(`sqrt((10*10) * 2 / 2) = " ${compute(10)} ... Obviously`);

// console.log(
//   "sqrt((10*10) * 2 / 2) = " +
//     fp.compose(squared_root, halfed, doubled, squared, 10)
// );
