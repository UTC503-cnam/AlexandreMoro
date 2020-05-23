interface Iterateur<T>{
    aUnSuivant(): boolean;
    suivant(): T;
}

interface FibonacciObserver {
    finished(n: number, value:number);
}

class Fibonacci implements Iterateur<number> {
    // fibonacci(n) = fibonnacci(n-1) + fibonnacci(n-2)
    private n_max: number;
    private n_current: number;
    private n_minus_1: number;
    private n_minus_2: number;
    private observer: FibonacciObserver;

    private static _instance: Fibonacci;

    public static getInstance(n_max: number)
    {
        // Do you need arguments? Make it a regular method instead.
        return this._instance || (this._instance = new this(n_max));
    }

    private constructor(n_max: number){
        this.n_max = n_max;
        this.n_current = 0;
        this.n_minus_1 = 1;
        this.n_minus_2 = 0;
        this.observer = null;
    }

    aUnSuivant(): boolean {
        return this.n_current < this.n_max;
    }

    suivant(): number {
        let current_value
        if (this.n_current < 2){
            current_value = this.n_current;
        }
        else{
            current_value = this.n_minus_1 + this.n_minus_2;
            this.n_minus_2 = this.n_minus_1;
            this.n_minus_1 = current_value;
        }
        this.n_current ++;
        if (this.n_current == this.n_max){
            this.notifyObserver(this.n_current, current_value);
        }
        return current_value;
    }

    registerObserver(new_observer: FibonacciObserver){
        this.observer = new_observer;
    }

    private notifyObserver(n: number, value:number){
        if (this.observer){
            this.observer.finished(n, value);
        }
    }
}

class MyFibonacciObserver implements FibonacciObserver {
    finished(n: number, value:number){
        console.log(`Finished! Fibonacci(${n}) = ${value}`);
    }
}

// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
let f = Fibonacci.getInstance(10); // (**)
f.registerObserver(new MyFibonacciObserver());

while(f.aUnSuivant()){
    console.log(`${f.suivant()},`);
}

// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton
