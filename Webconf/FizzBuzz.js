function fizzBuzz(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  }

  if (number % 3 == 0) {
    return "Fizz";
  }

  if (number % 5 == 0) {
    return "Buzz";
  }

  return number;
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(10));
console.log(fizzBuzz(9));
