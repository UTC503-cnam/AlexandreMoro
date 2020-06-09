export interface Iterateur<T> {
  aUnSuivant(): boolean;
  suivant(): T;
}

export interface Subject {
  attach(observer: Observer): void;

  notify(): void;
}

export interface Observer {
  update(subject: Subject): void;
}

export class Fibonacci implements Iterateur<number>, Subject {
  private nMax: number;
  private result = [0, 1];
  private position = 0;
  public state = this.aUnSuivant();

  private observers: Observer[] = [];

  constructor(nMax: number) {
    this.nMax = nMax;
    this.compute();
  }

  public attach(observer: Observer): void {
    const isExist = this.observers.indexOf(observer) > -1;
    if (isExist) {
      return console.log("Observateur déjà attaché");
    }

    console.log("Observateur attaché");
    this.observers.push(observer);
  }

  public notify(): void {
    console.log("Notification des observers");
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }

  private compute() {
    for (let i = 2; i < this.nMax; i++) {
      this.result.push(this.result[i - 2] + this.result[i - 1]);
    }
  }

  public aUnSuivant(): boolean {
    if (this.position < this.result.length) {
      return true;
    } else {
      this.notify();
      return false;
    }
  }

  public suivant(): number {
    let value = this.result[this.position];
    this.position++;
    return value;
  }
}

class EndofComputeObserver implements Observer {
  public update(): void {
    console.log("Reacting :)");
  }
}

// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
let test = new Fibonacci(10); // (**)
let test2 = new Fibonacci(5);
let observer1 = new EndofComputeObserver();
test.attach(observer1);
test2.attach(observer1);

while (test.aUnSuivant()) {
  console.log(`${test.suivant()},`);
}

while (test2.aUnSuivant()) {
  console.log(`${test2.suivant()},`);
}

// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton
