let maximum3 = (x: number) => (x > 3 ? 3 : x);
let maximum4 = (x: number) => (x > 4 ? 4 : x);
console.log(maximum3(2));
console.log(maximum4(20));
console.log(maximum4(2));

let tab1 = [1, 5, 2, 4, 3];

let mapDouble1 = tab1.map((x) => x * 2);

let mapTriple1 = tab1.map((x) => x * 3);

let mapSquare1 = tab1.map((x) => x * x);

let mapMax3 = tab1.map((x) => (x > 3 ? 3 : x));
console.log(mapDouble1);
console.log(mapTriple1);
console.log(mapSquare1);
console.log(mapMax3);

let maxSup = (cap: number) => (value: number) => (value > cap ? cap : value);
let maxcap3 = maxSup(3);
let tabMaxCap = tab1.map((x) => maxcap3(x));

console.log(tabMaxCap);
