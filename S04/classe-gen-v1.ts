export class CompteurAcces<T> {
  private compteur: number;
  private x: T;

  constructor(x: T) {
    this.x = x;
    this.compteur = 0;
  }

  get xValue(): T {
    this.compteur++;
    return this.x;
  }

  get compteurValue(): number {
    return this.compteur;
  }
}

let test = new CompteurAcces("test");

console.log(test.xValue);
console.log(test.xValue);
console.log(test.compteurValue);
console.log(test.xValue);
console.log(test.compteurValue);
