//Réécrivez l’exercice 6 du chapitre 2 sur l’impératif
//à l’aide de cette foncton et de foncton lambda
var double = function (x) { return x * 2; };
var triple = function (x) { return x * 3; };
var square = function (x) { return x * x; };
var maxi3 = function (x) { return (x > 3 ? (x = 3) : x); };
var tab = [1, 5, 2, 4, 3];
var tabDouble = tab.map(double);
var tabTriple = tab.map(triple);
var tabSquare = tab.map(square);
var tabmax3 = tab.map(maxi3);
debugger;
