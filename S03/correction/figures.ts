export abstract class Figure {
  //notre classe abstraite va contenir tous les éléments communs à nos figures

  private nbCote: number; // A noter le modificateur private, servira uniquement à perimetre()
  protected tailleCote: number; // protected > ne sera accessible qu'a la classe et les classes filles

  constructor(nbCote: number, tailleCote: number) {
    this.nbCote = nbCote;
    this.tailleCote = tailleCote;
  }

  perimetre(): number {
    // methode d'instance
    return this.nbCote * this.tailleCote;
  }

  abstract aire(): number; // méthode abstraite (sans  corps), son implantation sera obligatoire dans les classes dérivées

  rapport(): string {
    return `Aire: ${this.aire()}, Perimetre: ${this.perimetre()}`;
  }
}

class Triangle extends Figure {
  // extends -> dérive de la classe Figure
  constructor(tailleCote: number) {
    super(3, tailleCote); // on appelle le constructeur de la classe mère
  }

  aire() {
    return (Math.pow(this.tailleCote, 2) * Math.pow(3, 0.5)) / 4; // Implantation de la méthode aire()
  }

  rapport() {
    return "Triangle, " + super.rapport();
  }
}

class Losange extends Figure {
  private diag1: number;
  private diag2: number;

  constructor(diag1: number, diag2: number) {
    super(4, Math.pow(Math.pow(diag1 / 2, 2) + Math.pow(diag2 / 2, 2), 0.5));
    this.diag1 = diag1;
    this.diag2 = diag2;
  }

  estUnCarre() {
    return this.diag1 == this.diag2;
  }

  aire(): number {
    return (this.diag1 * this.diag2) / 2;
  }

  rapport() {
    return (
      "Losange, " + super.rapport() + " est-il un carré ? " + this.estUnCarre()
    );
  }
}

let t1 = new Triangle(5);
let t2 = new Triangle(10);
let l1 = new Losange(5, 6); // diagonale1, diagonale2
let l2 = new Losange(4, 4);

let figures: Figure[] = [t1, t2, l1, l2];
for (let f of figures) {
  console.log(f.rapport());
}
