//Réécrivez l’exercice 6 du chapitre 2 sur l’impératif
//à l’aide de cette foncton et de foncton lambda

let double = (x: number) => x * 2;
let triple = (x: number) => x * 3;
let square = (x: number) => x * x;
let maxi3 = (x: number) => (x > 3 ? (x = 3) : x);

let tab = [1, 5, 2, 4, 3];

let tabDouble = tab.map(double);
let tabTriple = tab.map(triple);
let tabSquare = tab.map(square);
let tabmax3 = tab.map(maxi3);

debugger;
