let numbers4 = [100, 34, 5, 67, 72];
// En utilisant la récursion, écrivez le code permettant de trouver le min et le max de cette liste

let min = (list: number[]) => (n: number): number =>
  n === list.length - 1 ? list[0] : Math.min(list[n], min(list)(n + 1));

console.log(min(numbers4)(0));
