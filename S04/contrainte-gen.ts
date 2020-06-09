interface Mesurable {
  length: number;
}

class Ruban implements Mesurable {
  length: number;
  constructor(length: number) {
    this.length = length;
  }
}

function selectionnePetit<T extends Mesurable>(element: T, limite: number) {
  return element.length < limite ? element : null;
}

let ruban = new Ruban(10);
let chaine = "myLengthIs12";
let petitRuban = selectionnePetit(ruban, 20);
let petiteChaine = selectionnePetit(chaine, 20);

console.log(petitRuban);
console.log(petiteChaine);
