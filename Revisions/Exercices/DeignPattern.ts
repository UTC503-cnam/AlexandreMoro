export interface Iterateur<T> {
	aUnSuivant(): boolean;
	suivant(): T;
}

export class Fibonacci implements Iterateur<number> {
	// fibonacci(n) = fibonnacci(n-1) + fibonnacci(n-2)
	private n_max: number;
	private n_current: number;
	private n_minus_1: number;
	private n_minus_2: number;

	constructor(n_max: number) {
		this.n_max = n_max;
		this.n_current = 0;
		this.n_minus_1 = 1;
		this.n_minus_2 = 0;
	}

	aUnSuivant(): boolean {
		return this.n_current < this.n_max;
	}

	suivant(): number {
		let current_value;
		if (this.n_current < 2) {
			current_value = this.n_current;
		} else {
			current_value = this.n_minus_1 + this.n_minus_2;
			this.n_minus_2 = this.n_minus_1;
			this.n_minus_1 = current_value;
		}
		this.n_current++;
		return current_value;
	}
}

// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
let f = new Fibonacci(10); // (**)
while (f.aUnSuivant()) {
	console.log(`${f.suivant()},`);
}
