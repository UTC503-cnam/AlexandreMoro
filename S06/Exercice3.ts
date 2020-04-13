/** Écrivez le code de l'exercice 1 en utilisant une fonction d'ordre supérieure maximize 
qui prend en paramètre la valeur max et qui renvoie une fonction.

function maximise_3(v) {
    if (v > 3)
        return 3;
    else
        return v;
}

function maximise_4(v) {
    if (v > 4)
        return 4;
    else
        return v;
}
*/

function maximize(cap: number) {
  return function (v: number) {
    return v > cap ? (v = cap) : v;
  };
}

let cap3 = maximize(3);
let cap10 = maximize(10);

console.log(cap3(10));
console.log(cap3(2));

console.log(cap10(1000));
console.log(cap10(9));
