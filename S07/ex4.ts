let numbersEx4 = [100, 34, 5, 67, 72];
// En utilisant la récursion, écrivez le code permettant de trouver le min et le max de cette liste
let miniEx4 = numbersEx4.reduce((acc, curr) => {
  return curr < acc ? (acc = curr) : acc;
});

let maxiEx4 = numbersEx4.reduce((acc, curr) => {
  return curr > acc ? (acc = curr) : acc;
});

console.log(`Min is ${miniEx4}, max is ${maxiEx4}`);
