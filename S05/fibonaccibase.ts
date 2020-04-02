// Rappel : f(0) = 0, f(1) = 1, f(n) = f(n-1) + f(n-2)

let n0 = 0;
let n1 = 1;
let n3: number = 0;
let test: number = 13;
let result: number = 0;


for (let i: number = 2; i < test; ++i ) {

    n3 = ((i-2) + (i-1));
    result = result + n3;

    console.log(i + ":" + result);
}

console.log(result);