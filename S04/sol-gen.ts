class CompteurAccess<T> {

    private compteur: number;
    private x: T;

    constructor(x: T) {
        this.x = x;
        this.compteur = 0;
    }

    getX(): T {
        this.compteur ++;
        return this.x;
    }

    getCompteur():number {
        return this.compteur;
    }
}


function defautSiNul<T> (x: T, defaut: T): T {
    if (x == null)
        return defaut;
    else
        return x;
}


let nombreParDefaut = 4;
let nombre = 1;
let nombreRes: number = defautSiNul(nombre, nombreParDefaut);
console.log(nombreRes);
let chaineParDefaut = "Quatre"
let chaineTest = "Un"
let chaineRes: string = defautSiNul(chaine, chaineParDefaut);
console.log(chaineRes);

// Décommenter pour constater l'erreur à la compilation
// chaineRes: string = defautSiNul(nombre, chaineParDefaut);
// console.log(chaineRes);


