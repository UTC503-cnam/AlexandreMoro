function defautSiNul(x: any, defaut: any): any {
    if (x == null)
        return defaut;
    else
        return x;
}
let maValeurParDefaut = 4;
let maValeur = 1;
let r: number = defautSiNul(maValeur, maValeurParDefaut);
console.log(r);
// On mélange les types string et number.
// Que va-t-on récupérer ?
let maValeur2 = "Deux";
r = defautSiNul(maValeur2, maValeurParDefaut);
console.log(r);