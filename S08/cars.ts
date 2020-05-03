class Car {
  constructor(
    public brand: string,
    public model: string,
    public price: number
  ) {}
}

let displayMaxi = (result: any) => {
  console.log(`Le prix maximum est de de: ${result}`);
};

let displayMini = (result: any) => {
  console.log(`Le prix minimum est de: ${result}`);
};

let maxPrice = function (x: Car[]) {
  return new Promise((resolve, reject) => {
    resolve(
      x.reduce(
        (currentMax, car) => (car.price > currentMax ? car.price : currentMax),
        0
      )
    );
    reject(`une erreur est survenue`);
  });
};

let minPrice = function (x: Car[]) {
  return new Promise((resolve, reject) => {
    resolve(
      x.reduce(
        (currentMin, car) => (car.price < currentMin ? car.price : currentMin),
        Number.MAX_VALUE
      )
    );
    reject(`une erreur est surevenue`);
  });
};

let averagePrice: Function = (x: Car[]) =>
  x.reduce((a, b) => a + b.price, 0) / x.length;

let cars: Car[] = [
  new Car("Renault", "Twizy", 7540),
  new Car("Alfa Romeo", "Mito", 15490),
  new Car("Volkswagen", "Golf", 21990),
  new Car("Porsche", "718", 55040),
  new Car("BMW", "Serie 1", 23200),
  new Car("Audi", "A4", 33670),
  new Car("Porsche", "Macan", 58835),
  new Car("Volkswagen", "Polo", 14430),
];

maxPrice(cars).then(displayMaxi);
minPrice(cars).then(displayMini);
