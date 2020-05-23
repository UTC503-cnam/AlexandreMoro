let buzzlist: number[] = [12, 15, 4, 10];

console.log(
  buzzlist.map((x) => {
    return x % 5 && x % 3 == 0
      ? `fizzbuzz`
      : x % 3 == 0
      ? `Fizz`
      : x % 5 == 0
      ? `Buzz`
      : x.toString();
  })
);
