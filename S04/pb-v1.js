function defautSiNul(x, defaut) {
    if (x == null)
        return defaut;
    else
        return x;
}
var maValeurParDefaut = 4;
var maValeur = 1;
var r = defautSiNul(maValeur, maValeurParDefaut);
console.log(r);
// On mélange les types string et number.
// Que va-t-on récupérer ?
var maValeur2 = "Deux";
r = defautSiNul(maValeur2, maValeurParDefaut);
console.log(r);
