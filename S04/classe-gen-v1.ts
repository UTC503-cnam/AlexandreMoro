class CompteurAcces<T> {

    private compteur: number;
    private x: T;

    constructor(x: T) {
        this.x = x;
        this.compteur = 0;
    }

    getX(): T {
        this.compteur++
        return this.x;
    }

    getCompteur(): number {
        return this.compteur;
    }

}

