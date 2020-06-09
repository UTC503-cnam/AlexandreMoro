export abstract class ZooAnimal {
  private _nom: string;
  protected age: number;
  protected poids: number;
  protected quantiteNourritureTotale: number;
  private bienNourri: boolean;

  constructor(nom: string, age: number, poids: number) {
    this.nom = nom;
    this.age = age;
    this.poids = poids;
    this.quantiteNourritureTotale = 0;
    this.bienNourri = false;
  }

  get nom() {
    return this._nom;
  }

  set nom(nouveauNom: string) {
    if (nouveauNom == null || nouveauNom.trim().length == 0) {
      console.log("Erreur: le nouveau nom n'est pas correct");
      return;
    }
    this._nom = nouveauNom;
  }

  nouvelleJournee() {
    this.quantiteNourritureTotale = 0;
    this.bienNourri = false;
  }

  protected abstract calculeBienNourri();

  recoitNourriture(quantite: number) {
    this.quantiteNourritureTotale += quantite;
    this.bienNourri = this.calculeBienNourri();
  }

  etatAlimentation() {
    let etat =
      this.nom +
      ", " +
      this.age +
      " ans,  a reçu " +
      this.quantiteNourritureTotale +
      "Kg de nourriture.";
    if (this.bienNourri) {
      etat += " " + this.nom + " est bien nourri.";
    }
    return etat;
  }
}

export class ZooDauphin extends ZooAnimal {
  private poissonPrefere: string;

  constructor(
    name: string,
    age: number,
    poids: number,
    poissonPrefere: string
  ) {
    super(name, age, poids);
    this.poissonPrefere = poissonPrefere;
  }

  calculeBienNourri() {
    return this.quantiteNourritureTotale > this.poids / 8;
  }

  etatAlimentation() {
    return (
      super.etatAlimentation() +
      " Son poisson préféré est " +
      this.poissonPrefere +
      "."
    );
  }
}

export class ZooPanda extends ZooAnimal {
  private plantePreferee: string;

  constructor(
    name: string,
    age: number,
    poids: number,
    plantePreferee: string
  ) {
    super(name, age, poids);
    this.plantePreferee = plantePreferee;
  }

  calculeBienNourri() {
    return this.quantiteNourritureTotale > this.poids / 4 - this.age / 10;
  }

  etatAlimentation() {
    return (
      super.etatAlimentation() +
      " Sa plante préférée est " +
      this.plantePreferee +
      "."
    );
  }
}

let flipper = new ZooDauphin("Flipper", 30, 150, "hareng");
let oum = new ZooDauphin("Oum", 20, 100, "sardine");
let pandi = new ZooPanda("Pandi", 10, 80, "bambou");

let lesZAnimaux: ZooAnimal[] = [flipper, oum, pandi];
for (let unAnimal of lesZAnimaux) {
  unAnimal.nouvelleJournee();
}

flipper.recoitNourriture(10);
pandi.recoitNourriture(10);
flipper.recoitNourriture(25);
flipper.nom = "Flipper Junior";
oum.recoitNourriture(15);

// Remplacer console.log par alert pour un usage dans le playground
for (let unAnimal of lesZAnimaux) {
  console.log(unAnimal.etatAlimentation());
}
