// A faire avant :
// npm i --save lodash  --save: Package will appear in your dependencies
// npm i @types/node   TypeScript definitions for Node.js (???)
var fp = require("lodash/fp");
var squared = function (x) { return x * x; };
var doubled = function (x) { return x * 2; };
var halfed = function (x) { return x / 2; };
var squared_root = function (x) { return Math.sqrt(x); };
// Utilisez une fonction de lodash pour composer
var compute = fp.compose(squared_root, doubled, halfed, squared);
console.log("sqrt((10*10) * 2 / 2) = \" " + compute(10) + " ... Obviously");
// console.log(
//   "sqrt((10*10) * 2 / 2) = " +
//     fp.compose(squared_root, halfed, doubled, squared, 10)
// );
