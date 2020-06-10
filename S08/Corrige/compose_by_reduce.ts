
let square = x => x * x;
let double = x => x * 2;
let half = x => x / 2;
let square_root = x => Math.sqrt(x);

let compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

console.log('sqrt((10*10) * 2 / 2) = ' + compose(square_root, half, double, square)(10));
