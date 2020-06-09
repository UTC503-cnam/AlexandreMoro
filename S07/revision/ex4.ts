let numbers4 = [100, 34, 5, 67, 72];
// En utilisant la récursion, écrivez le code permettant de trouver le min et le max de cette liste

let computeMin = (arr: number[]) => (i: number) => {
  if (arr.length === 0) return null;
  else if (arr.length === 1) return arr[0];
  else if ((i = arr.length - 1)) return arr[i];
  else {
    Math.min(arr[i], computeMin(arr)(i + 1));
  }
  return computeMin(arr)(0);
};

console.log(computeMin(numbers4)(0));

debugger;
