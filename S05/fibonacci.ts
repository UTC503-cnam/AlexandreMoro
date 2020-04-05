interface Iterateur<T> {

    aUnSuivant(): boolean;
    suivant(): T;


}

class IterateurTypique implements Iterateur<number>{

    protected collection: number[] = [];

    private position: number = -1;

    public aUnSuivant(): boolean {
    
        if (this.position + 1 >= this.collection.length) {
            return false;
        } 

        this.position += 1;

        return true;

    }
    
    public suivant(): number {

        return this.collection[this.position];

    }
}

class Fibonacci extends IterateurTypique {


    constructor(n: number) {
        super();
        this.addToCollection(n);

    }

    private calc(n: number): number{

        if (n >= 2) {
            return this.calc(n - 1) + this.calc(n - 2);
        }

        if (n == 1) {
            return 1;
        } 

        return 0;
    }

    private addToCollection(n: number): void {
        
        for (let i: number = 0; i <= n;i++) {
            this.collection.push(this.calc(i));
        }

    }

}



// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
let f = new Fibonacci(16); // (**)

while (f.aUnSuivant()) {
    console.log(`${f.suivant()},`);
}

// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton