abstract class ZooAnimal {

    // Attributs
    protected nom: string;
    protected age: number;
    protected poids: number;
    protected quantiteNourritureTotale: number;
    private bienNourri: boolean;

    // Constructeur
    constructor(nom: string, age: number, poids: number) {
        this.age = age;
        this.poids = poids;
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }

    nouvelleJournee() {
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }

    etatAlimentation() {
        let etat = this.nom + ", " + this.age + " ans, a reçu " +
            this.quantiteNourritureTotale + "Kg de nourriture.";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        return etat;
    }

    protected abstract calculBienNourri()

    recoitNourriture(quantite: number) {
        this.quantiteNourritureTotale += quantite;
        this.bienNourri = this.calculBienNourri();
    }


}

class ZooDauphin extends ZooAnimal {

    private poissonPrefere: string;
    constructor(name: string, age: number, poids: number, poissonPrefere: string) {
        super(name, age, poids);
        this.poissonPrefere = poissonPrefere;
    }

    etatAlimentation() {
        return super.etatAlimentation() + " Son poisson préféré est " + this.poissonPrefere + ".";
    }

    protected calculBienNourri() {
        return this.quantiteNourritureTotale > this.poids /8;
    }

}

class ZooPanda extends ZooAnimal {

    private plantePreferee: string;
    constructor(name: string, age: number, poids: number, plantePreferee: string) {
        super(name, age, poids);
        this.plantePreferee = plantePreferee;
    }

    etatAlimentation() {
        return super.etatAlimentation() + " Sa plante préférée est " + this.plantePreferee + ".";
    }

    protected calculBienNourri() {
        return this.quantiteNourritureTotale > (this.poids / 4 - this.age / 10);
    }

}

let flipper = new ZooDauphin("Flipper", 30, 150, "Fletan");
let oum = new ZooDauphin("oum", 20, 100, "Sardine");
let pandi = new ZooPanda("Pandi", 10, 80, "Bambou");

let lesZanimaux:ZooAnimal[] = [flipper, oum, pandi];

for(let unAnimal of lesZanimaux){
    unAnimal.nouvelleJournee();
}

flipper.recoitNourriture(10);
pandi.recoitNourriture(10);
flipper.recoitNourriture(25);
oum.recoitNourriture(15);

for(let unAnimal of lesZanimaux) {
    console.log(unAnimal.etatAlimentation());
}