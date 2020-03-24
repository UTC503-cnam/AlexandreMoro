// Retourne x si non nuln defaut sinon.
// x et défaut sont des nombres

function defautSiNul(x : number, defaut: number) : number {
    if (x == null)
    return defaut;
    else
    return x;
}

let maValeurParDefaut = 4;
let maValeur = 1;
console.log(defautSiNul(maValeur, maValeurParDefaut));
maValeur= null;
console.log(defautSiNul(maValeur, maValeurParDefaut));
