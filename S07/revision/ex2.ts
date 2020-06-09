// let listEx2 = [1, 9, 2, 8, 5];
// let nombrePairEx2 = n => n % 2 == 0;
// let and = // Ecrivez la fonction 'and' sous sa forme curryfiée qui permet au code ci-dessous de fonctionner
// let result = list.filter(and(nombrePair)(n => n > 4));
// console.log(result); // [8]

const listEx2 = [1, 9, 2, 8, 5];

const estPair = (n: number) => n % 2 == 0;
const andd = (func1: Function) => (func2: Function) => (n: number) =>
  func1(n) && func2(n);
let resulteX2 = listEx2.filter(andd(estPair)((n: number) => n > 4));

console.log(resulteX2);
