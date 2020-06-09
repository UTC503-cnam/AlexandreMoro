export class Animal {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let unAnimal = new Animal("Lassy");

//unAnimal = new Animal("Rex");

unAnimal.name = "Rex";
