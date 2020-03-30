interface Mesurable {
    length: number;
}

class Trajet implements Mesurable {

    private nom: string;
    length: number;


    constructor (x:string, y:number){
        this.nom = x;
        this.length = y;
    }

    toString(): string {
        return `Trajet ${this.nom} de ${this.length}Km`;
    }
}

class MinMax<T extends Mesurable> {

    constructor(t: Array<T>){
        this.computeMinMax(t);
    }

    private computeMinMax(t: Array<T>){
        for(let e of t){

        }
    }

    getMin(): {

    }

    getMax(){

    }
}

let trajets: Array<Trajet> = new Array(new Trajet("a", 271), new Trajet("b", 161), new Trajet("c", 314));

for (let e in trajets) {

    console.log(trajets[e].toString());
}

debugger;

let trajetMinMax = new MinMax(trajets);

console.log(`Le plus grand trajet est : ${trajetMinMax.getMax()}`);
console.log(`Le plus petit trajet est : ${trajetMinMax.getMin()}`);

let chaines: Array<String> = new Array("chaineDe9", "chDe5", "grandeChaineDe16");

// let chaineMinMax = 
// console.log(`La plus grande chaine est : ${chaineMinMax.getMax()}`);
// console.log(`La plus petite chaine est : ${chaineMinMax.getMin()}`);

