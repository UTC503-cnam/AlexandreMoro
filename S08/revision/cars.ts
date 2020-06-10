export class Car {
  constructor(
    public brand: string,
    public model: string,
    public price: number
  ) {}
}

export function maxPrice(cars: Car[]): number {
  let maxPrice: number = 0;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].price > maxPrice) {
      maxPrice = cars[i].price;
    }
  }
  return maxPrice;
}

export function minPrice(cars: Car[]): number {
  let minPrice: number = Number.MAX_VALUE;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].price < minPrice) {
      minPrice = cars[i].price;
    }
  }
  return minPrice;
}

export function averagePrice(cars: Car[]): number {
  let total: number = 0;
  let nbCars: number = cars.length;
  for (let i = 0; i < cars.length; i++) {
    total += cars[i].price;
  }
  return total / nbCars;
}

export function averagePriceByBrand(cars: Car[], brand: string): number {
  let total: number = 0;
  let nbBrandCars: number = 0;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].brand === brand) {
      nbBrandCars++;
      total += cars[i].price;
    }
  }
  return total / nbBrandCars;
}

const lMaxPrice = (cars: Car[]) =>
  cars
    .map((car) => car.price)
    .reduce((prev, curr) => (prev > curr ? prev : (prev = curr)));

const lMinPrice = (cars: Car[]) =>
  cars
    .map((car) => car.price)
    .reduce((prev, curr) => (prev < curr ? prev : (prev = curr)));

const lAveragePrice = (cars: Car[]) =>
  cars.map((cars) => cars.price).reduce((prev, curr) => prev + curr) /
  cars.length;

const lAveragePriceByBrand = (cars: Car[]) => (brand: string) =>
  cars
    .filter((car: Car) => car.brand === brand)
    .map((car) => car.price)
    .reduce((prev, curr) => prev + curr) /
  cars.filter((car: Car) => car.brand === brand).length;

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

console.log("Max price: " + lMaxPrice(cars));
console.log("Min price: " + lMinPrice(cars));
console.log("Average price: " + lAveragePrice(cars));
console.log(
  "Average price for Porsche: " + lAveragePriceByBrand(cars)("Porsche")
);

console.log(averagePriceByBrand(cars, "Porsche"));
