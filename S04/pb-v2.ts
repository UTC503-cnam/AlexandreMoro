function defautSiNulNumber(x: number, defaut: number): number {
    if (x == null)
        return defaut;
    else
        return x;
}

function defautSiNulString(x: string, defaut: string): string {
    if (x == null)
        return defaut;
    else
        return x;
}

let maValeurParDefaut = "Quatre";
let maValeur = "Un";
console.log(defautSiNulString(maValeur, maValeurParDefaut));
maValeur = null;
console.log(defautSiNulString(maValeur, maValeurParDefaut));
