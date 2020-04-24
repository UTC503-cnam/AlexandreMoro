let list = [1, 9, 2, 8, 5];

let nombrePair: Function = (n: number) => n % 2 == 0;

let and = (a: Function) => (b: Function) => (value: number) => {
  return a(value) && b(value);
};

let result = list.filter(and(nombrePair)((n: number) => n > 4));

let anotherResult = list.filter(and(nombrePair)((n: number) => n == 2));

console.log(result);
console.log(anotherResult);

// un petit topo en webconf sera la bienvenue
