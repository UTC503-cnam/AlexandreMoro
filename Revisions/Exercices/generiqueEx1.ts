/*
Reprise de l'ex1 générique avec une petite pointe de PF dedans.
*/

export interface Mesurable {
	length: number;
}

export class Trajet implements Mesurable {
	private nom: string;
	length: number;

	constructor(nom: string, length: number) {
		this.nom = nom;
		this.length = length;
	}

	toString(): string {
		return `Trajet ${this.nom} de ${this.length}Km`;
	}
}

export class MinMax<T extends Mesurable> {
	tab: Array<T>;

	constructor(tab: Array<T>) {
		this.tab = tab;
	}

	public getMin(): T {
		return this.tab.reduce((prev, curr) =>
			curr.length < prev.length ? curr : prev
		);
	}

	public getMax(): T {
		return this.tab.reduce((prev, curr) =>
			curr.length > prev.length ? curr : prev
		);
	}
}

let trajets: Array<Trajet> = new Array(
	new Trajet("a", 271),
	new Trajet("b", 161),
	new Trajet("c", 314)
);
let trajetMinMax = new MinMax(trajets);

console.log(`Le plus grand trajet est : ${trajetMinMax.getMax()}`);
console.log(`Le plus petit trajet est : ${trajetMinMax.getMin()}`);

let chaines: Array<String> = new Array(
	"chaineDe9",
	"chDe5",
	"grandeChaineDe16"
);
let chaineMinMax = new MinMax(chaines);

console.log(`La plus grande chaine est : ${chaineMinMax.getMax()}`);
console.log(`La plus petite chaine est : ${chaineMinMax.getMin()}`);

// Replace console.log by alert when run on TypeScript Playground
