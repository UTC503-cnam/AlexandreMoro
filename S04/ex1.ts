

interface Mesurable {
    length: number;
}

class Trajet implements Mesurable{

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

    private minMax : Array<T> = new Array();

    constructor(t: Array<T>){

        this.computeMinMax(t);

    }

    private computeMinMax(t: Array<T>) {

        let tempMinMax : Array<T> = new Array(t[0],t[0]);

        for(let e of t){

            if (e.length < tempMinMax[0].length) {
                tempMinMax[0] = e;
            }

            if (e.length > tempMinMax[1].length) {
                tempMinMax[1] = e
            }
        }

        this.minMax[0] = tempMinMax[0];
        this.minMax[1] = tempMinMax[1];

    }

    getMin(){
        return this.minMax[0];
    }

    getMax(){
        return this.minMax[1];
    }
}

let trajets: Array<Trajet> = new Array(new Trajet("a", 271), new Trajet("b", 161), new Trajet("c", 314));

let trajetMinMax = new MinMax(trajets);

console.log(`Le plus grand trajet est : ${trajetMinMax.getMax()}`);
console.log(`Le plus petit trajet est : ${trajetMinMax.getMin()}`);

let chaines: Array<String> = new Array("chaineDe9", "chDe5", "grandeChaineDe16");

let chaineMinMax = new MinMax(chaines);
console.log(`La plus grande chaine est : ${chaineMinMax.getMax()}`);
console.log(`La plus petite chaine est : ${chaineMinMax.getMin()}`);

