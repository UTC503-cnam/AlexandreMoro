// Convertissez les fonctions de cars.ts en fonction lambda, en utilisant au besoin filter et reduce

class Car {
	constructor(
		public brand: string,
		public model: string,
		public price: number
	) {}
}

function maxPrice(cars: Car[]): number {
	return cars.reduce((a, b) => {
		return a.price < b.price ? b : a;
	}).price;
}

function minPrice(cars: Car[]): number {
	let minPrice: number = Number.MAX_VALUE;
	for (let i = 0; i < cars.length; i++) {
		if (cars[i].price < minPrice) {
			minPrice = cars[i].price;
		}
	}
	return minPrice;
}

function averagePrice(cars: Car[]): number {
	let total: number = 0;
	let nbCars: number = cars.length;
	for (let i = 0; i < cars.length; i++) {
		total += cars[i].price;
	}
	return total / nbCars;
}

function averagePriceByBrand(cars: Car[], brand: string): number {
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

console.log("Max price: " + maxPrice(cars));
console.log("Min price: " + minPrice(cars));
console.log("Average price: " + averagePrice(cars));
console.log(
	"Average price for Porsche: " + averagePriceByBrand(cars, "Porsche")
);
