// interface Function {
// 	myApply(number: number): number;
// }

// function monMap(x: number[], fun: Function): number[] {
// 	let output: number[] = [];
// 	x.forEach((element: number) => {
// 		output.push(fun(element));
// 	});
// 	return output;
// }

// const liste: number[] = [1, 2, 3, 4];
// const doubleTest: number[] = monMap(liste, (x: number) => x * 2);

function gMap<T, R>(x: T[], fun: Function): R[] {
	let output: R[] = [];
	x.forEach((element) => {
		output.push(fun.apply(element));
	});

	return output;
}
