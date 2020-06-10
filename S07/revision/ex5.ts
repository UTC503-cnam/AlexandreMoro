let numbers5 = [100, 34, 5, 67, 72];
// Sans boucle ni récursion, écrivez le code permettant de trouver le min et le max de cette liste
let minimum5 = numbers5.reduce((prev, curr) =>
  prev < curr ? prev : (prev = curr)
);
let maximum5 = numbers5.reduce((prev, curr) =>
  prev > curr ? prev : (prev = curr)
);

console.log(`Min is ${minimum5}, max is ${maximum5}`);
