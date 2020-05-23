export interface Iterateur<T> {
  aUnSuivant(): boolean;
  suivant(): T;
}

export interface FibonacciObserver {
  // interface de communication pour les subscribers
  finished(n: number, value: number): void;
}

export class Fibonacci implements Iterateur<number> {
  // fibonacci(n) = fibonnacci(n-1) + fibonnacci(n-2)

  private n_max: number;
  private n_current: number;
  private n_minus_1: number;
  private n_minus_2: number;
  private current_value: number;
  private observer: FibonacciObserver | null;

  constructor(n_max: number) {
    this.n_max = n_max;
    this.n_current = 0;
    this.n_minus_1 = 1;
    this.n_minus_2 = 0;
    this.current_value = 0;
    this.observer = null;
  }

  aUnSuivant(): boolean {
    if (this.n_current == this.n_max) {
      this.notifyObserver(this.n_current, this.current_value);
    }
    return this.n_current < this.n_max;
  }

  suivant(): number {
    if (this.n_current < 2) {
      this.current_value = this.n_current;
    } else {
      this.current_value = this.n_minus_1 + this.n_minus_2;
      this.n_minus_2 = this.n_minus_1;
      this.n_minus_1 = this.current_value;
    }
    this.n_current++;

    return this.current_value;
  }

  registerObserver(new_observer: FibonacciObserver) {
    this.observer = new_observer;
  }

  private notifyObserver(n: number, value: number) {
    if (this.observer) {
      this.observer.finished(n, value);
    }
  }
}

class MyFibonacciObserver implements FibonacciObserver {
  constructor(e: number) {
    console.log(`Observateur ${e} abonné`);
  }

  finished(n: number, value: number) {
    console.log(`Finished! Fibonacci(${n}) = ${value}`);
  }
}

// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
let f = new Fibonacci(10); // (**)
f.registerObserver(new MyFibonacciObserver(1));
f.registerObserver(new MyFibonacciObserver(2));

while (f.aUnSuivant()) {
  console.log(`${f.suivant()},`);
}

// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton
