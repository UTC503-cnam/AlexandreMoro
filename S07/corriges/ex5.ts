let numbers = [100, 34, 5, 67, 72];
let minimum = numbers.reduce((min, val) => val < min ? val : min);
let maximum = numbers.reduce((max, val) => val > max ? val : max);
console.log(`Min is ${minimum}, max is ${maximum}`);