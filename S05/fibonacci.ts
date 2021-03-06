
/**
 * implement an iterator design pattern for a fibonacci calculus
 * interface is set by the teacher.
 */

/**
 * Interface (set)
 */
interface Iterateur<T> {

    aUnSuivant(): boolean;
    suivant(): T;

}

/**
 * Common iterator, very ligth (just for training)
 */

class IterateurTypique implements Iterateur<number>{

    private emmetteur = new EmmtteurType();
    private abonne = new AbonneType();

    // store results in an array
    protected collection: number[] = [];

    //store the current position, start at -1 to comply with index[0] when aUnSuivant is called
    private position: number = -1;

    /**
     * Check if the array has a next item
     * @param none
     * @returns true or false
     */
    public aUnSuivant(): boolean {

        //check if we are at the end of the array or not
        if (this.position + 1 >= this.collection.length) {
            this.emmetteur.notify();
            return false;
        }

        // set variable to the next index and retun "yeah man you can continue"
        this.position += 1;
        return true;
    }

    /**
     * Get the next item
     * @returns fibonnaci calculus of the current index
     */
    public suivant(): number {
        return this.collection[this.position];
    }

    public abonnement() {
        this.emmetteur.attach(this.abonne);
    }
}

/**
 * Class with recursive fibonacci algorithm
 * extend IterateurTypique to access collection array
 * @param number - number to compute
 * @returns number into collection array
 */
class Fibonacci extends IterateurTypique {

    private static instance: Fibonacci;

    public static getInstance(n: number): Fibonacci {
        if (!Fibonacci.instance) {
            Fibonacci.instance = new Fibonacci(n);
            console.log(`Création de l'instance`)
        }

        return Fibonacci.instance;
    }

    /**
     * constructor, call the super class and call addToCollection() to push results in the array
     * @param n number to compute (obviously)
     */
    private constructor(n: number) {
        super();
        this.addToCollection(n);

    }

    /**
     * fibonacci recursive algorithl
     * @param n number to compute
     * @returns f(0) = 0, f(1) = 1, f(n) = f(n-1)+f(n-2)
     */
    private calc(n: number): number {

        if (n >= 2) {
            return this.calc(n - 1) + this.calc(n - 2);
        }

        if (n == 1) {
            return 1;
        }

        return 0;
    }

    /**
     * Store into the collection array the different(s) step(s) of the calculus
     * @param n number to process in order to add to collection array
     */
    private addToCollection(n: number): void {

        for (let i: number = 0; i <= n; i++) {
            this.collection.push(this.calc(i));
        }

    }

}

interface Emetteur {

    attach(abonne: Abonne): void;

    notify(): void;

}

class EmmtteurType implements Emetteur {

    private abonnes: Abonne[] = [];

    public attach(abonne: Abonne): void {

        const ifExist = this.abonnes.includes(abonne);
        if (ifExist) {
            return console.log('Abonné déjà présent.');
        }

        console.log('Abonné inscrit à l\'emmeteur');
        this.abonnes.push(abonne);

    }

    public notify(): void {
        for (const abonne of this.abonnes) {
            abonne.update(this);
        }
    }


}

interface Abonne {
    update(emmeteur: Emetteur): void;
}

class AbonneType implements Abonne {
    public update(emmeteur: Emetteur): void {
        {
            console.log('fin !');
        }
    }
}


let f = Fibonacci.getInstance(16); // (**)
f.abonnement();

let g = Fibonacci.getInstance(13);
g.abonnement();

if (f === g) {
    console.log('Les instances sont identiques');
} else {
    console.log(`Les instances sont différentes`)
}

while (f.aUnSuivant()) {
    console.log(`${f.suivant()},`);
}
