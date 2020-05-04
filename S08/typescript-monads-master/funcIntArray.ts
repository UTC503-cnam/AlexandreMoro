interface Function {
  myApply(number: number): number;
}

function monMap(x: number[], fun: Function): number[] {
  let output: number[] = [];
  x.forEach((element: number) => {
    output.push(fun(element));
  });
  return output;
}

const test: number[] = [1, 2, 3, 4];
const doubleTest: number[] = monMap(test, (x: number) => x * 2);
debugger;
