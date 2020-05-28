# Exercices



### POO Générique

Ex1 : compléter le code de ex1.ts

```typescript
interface Mesurable {
    length: number;
}

class Trajet {
    private nom: string;

    toString(): string {
        return `Trajet ${this.nom} de ${this.length}Km`;
    }
}

class MinMax {

    constructor(t: Array){
        this.computeMinMax(t);
    }

    private computeMinMax(t: Array){
        for(let e of t){

        }
    }

    getMin(): {

    }

    getMax(){

    }
}

let trajets: Array = new Array(new Trajet("a", 271), new Trajet("b", 161), new Trajet("c", 314));
let trajetMinMax = 
console.log(`Le plus grand trajet est : ${trajetMinMax.getMax()}`);
console.log(`Le plus petit trajet est : ${trajetMinMax.getMin()}`);

let chaines: Array = new Array("chaineDe9", "chDe5", "grandeChaineDe16");
let chaineMinMax = 
console.log(`La plus grande chaine est : ${chaineMinMax.getMax()}`);
console.log(`La plus petite chaine est : ${chaineMinMax.getMin()}`);

// Replace console.log by alert when run on TypeScript Playground
```

Correction

```typescript
interface Mesurable {
    length: number;
}

class Trajet implements Mesurable {  // intégration de l'interface
    private nom: string;
    length: number  // propriété length obligatoire (interface)

    constructor(nom: string, length: number){
        this.nom = nom;
        this.length = length;
    }

    toString(): string {
        return `Trajet ${this.nom} de ${this.length}Km`;
    }
}

class MinMax<T extends Mesurable> { // classe MinMax avec contrainte sur T (pour pouvoir utiliser length)
    
    private min: T;
    private max: T;

    constructor(t: Array<T>){
        this.min = t[0];
        this.max = t[0];
        this.computeMinMax(t);
    }

    private computeMinMax(t: Array<T>){
        for(let e of t){
            this.min = e.length < this.min.length?e:this.min;
            this.max = e.length > this.max.length?e:this.max;
        }
    }

    getMin(): T{
        return this.min;
    }

    getMax(): T{
        return this.max;
    }
}

let trajets: Array<Trajet> = new Array(new Trajet("a", 271), new Trajet("b", 161), new Trajet("c", 314));
let trajetMinMax = new MinMax(trajets);
console.log(`Le plus grand trajet est : ${trajetMinMax.getMax()}`);
console.log(`Le plus petit trajet est : ${trajetMinMax.getMin()}`);

let chaines: Array<string> = new Array("chaineDe9", "chDe5", "grandeChaineDe16");
let chaineMinMax = new MinMax(chaines);
console.log(`La plus grande chaine est : ${chaineMinMax.getMax()}`);
console.log(`La plus petite chaine est : ${chaineMinMax.getMin()}`);

// Replace console.log by alert when run on TypeScript Playground
```

