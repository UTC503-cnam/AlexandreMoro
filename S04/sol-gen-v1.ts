export function defautSiNul<T>(x: T, defaut: T): T {
  if (x == null) return defaut;
  else return x;
}

let nombreParDefaut = 4;
let nombre = 1;
let nombreRes: number = defautSiNul(nombre, nombreParDefaut);
console.log(nombreRes);
let chaineParDefaut = "Quatre";
let chaine = "Un";
let chaineRes: string = defautSiNul(chaine, chaineParDefaut);
console.log(chaineRes);
// Décommenter pour constater l'erreur à la compilation
//chaineRes: string = defautSiNul(nombre, chaineParDefaut);
// console.log(chaineRes);
