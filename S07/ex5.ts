let numbersEx5 = [100, 34, 5, 67, 72];
// En utilisant la récursion, écrivez le code permettant de trouver le min et le max de cette liste
let miniEx5 = numbersEx5.reduce((acc, curr) => {
  return curr < acc ? (acc = curr) : acc;
});

let maxiEx5 = numbersEx5.reduce((acc, curr) => {
  return curr > acc ? (acc = curr) : acc;
});

console.log(`Min is ${miniEx5}, max is ${maxiEx5}`);
