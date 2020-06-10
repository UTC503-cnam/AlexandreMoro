// Ecrivez en lambda la fonction de composition f o g

let square2 = (x: number) => x * x;
let double2 = (x: number) => x * 2;

let fog2 = (f1: Function) => (f2: Function) => (val: number) => f2(f1(val));

console.log("f o g (10) = " + fog2(square2)(double2)(10));
