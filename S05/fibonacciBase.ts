// Rappel : f(0) = 0, f(1) = 1, f(n) = f(n-1) + f(n-2)

let n0: number = 0;
let n1: number = 1;
let n2: number = 0;
let test: number = 13;


for (let i: number = 2; i <= test; i++ ) {

    n2 = n1 + n0;
    n0 = n1;
    n1 = n2;
}

console.log(n2);

