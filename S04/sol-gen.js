function defautSiNul(x, defaut) {
    if (x == null)
        return defaut;
    else
        return x;
}
var nombreParDefaut = 4;
var nombre = 1;
var nombreRes = defautSiNul(nombre, nombreParDefaut);
console.log(nombreRes);
var chaineParDefaut = "Quatre";
var chaine = "Un";
var chaineRes = defautSiNul(chaine, chaineParDefaut);
console.log(chaineRes);
// Décommenter pour constater l'erreur à la compilation
// chaineRes: string = defautSiNul(nombre, chaineParDefaut);
// console.log(chaineRes);
