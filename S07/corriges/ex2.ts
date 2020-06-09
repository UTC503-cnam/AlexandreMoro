let list = [1, 9, 2, 8, 5];
let nombrePair = n => n % 2 == 0;
let and = f1 => f2 => n => f1(n) && f2(n); 
let result = list.filter(and(nombrePair)(n => n > 4));
console.log(result); // [8]