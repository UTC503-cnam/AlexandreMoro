let squa = (x) => x * x;
let doub = (x) => x * 2;
let half = (x) => x / 2;
let square_root = (x) => Math.sqrt(x);

let compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x); //Si le dernier paramètre nommé fourni à la fonction est préfixé de ... (trois points), il devient un tableau dont les éléments entre 0 (inclus) et lesArguments.length (exclus) sont fournis comme autres arguments à la fonction.

console.log(
  "sqrt((10*10) * 2 / 2) = " + compose(square_root, half, doub, squa)(10)
);
