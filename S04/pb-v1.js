// Retourne x si non nuln defaut sinon.
// x et défaut sont des nombres
function defautSiNul(x, defaut) {
    if (x == null)
        return defaut;
    else
        return x;
}
var maValeurParDefaut = 4;
var maValeur = 1;
console.log(defautSiNul(maValeur, maValeurParDefaut));
maValeur = null;
console.log(defautSiNul(maValeur, maValeurParDefaut));
