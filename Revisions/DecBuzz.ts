function fizz(x: number): string {
  return x % 3 == 0 ? "Fizz" : "";
}
function buzz(x: number): string {
  return x % 5 == 0 ? "Buzz" : "";
}
function fizzbuzz(x: number, fizz: Function, buzz: Function): string {
  return fizz(x) == buzz(x) ? x.toString() : fizz(x) + buzz(x);
}
console.log([12, 15, 4].map((x) => fizzbuzz(x, fizz, buzz)));
