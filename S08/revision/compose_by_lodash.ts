// A faire avant :
// npm i --save lodash
// npm i @types/node
var fp = require("lodash/fp");

let squareR = (x: number) => x * x;
let doubleR = (x: number) => x * 2;
let halfR = (x: number) => x / 2;
let square_rootR = (x: number) => Math.sqrt(x);

const composeR = fp.compose(squareR, doubleR, halfR, square_rootR);

// Utilisez une fonction de lodash pour composer
console.log(`sqrt((10*10) * 2 / 2) =  ${composeR(10)}`);
