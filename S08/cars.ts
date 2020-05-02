class Car {
	constructor(
		public brand: string,
		public model: string,
		public price: number
	) {}
}

let display = (result: any) => {
	console.log(`${result}`);
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

let minPrice: Function = (x: Car[]) =>
	x.reduce(
		(currentMin, car) => (car.price < currentMin ? car.price : currentMin),
		Number.MAX_VALUE
	);

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

maxPrice(cars).then(display);
