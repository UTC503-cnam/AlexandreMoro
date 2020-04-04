interface Subject {

    attach(observer: Observer): void;

    detach(observer: Observer): void;

    notify(): void;

}

interface Observer {
    update(subject: Subject): void;
}

class ConcreteSubject implements Subject {

    public state: number = 0;

    private observers: Observer[] = [];


    public attach(observer: Observer): void {
        const ifExist = this.observers.includes(observer);

        if (ifExist) {
            return console.log("L'observateur est déjà rattaché");
        }

        console.log("Observateur attaché");
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);

        if (observerIndex === -1) {
            return console.log("Observateur non existant");
        }

        this.observers.splice(observerIndex, 1);
        console.log("Observateur détaché");

    }

    public notify(): void {
        console.log(" Notification observateur ");
        
    }

    public job(): void {

        console.log("toto");

    }
}

class ConcreteObserver implements Observer {

    public update(subject: Subject): void {
        if (subject.state < 3) {
            console.log("Reaction a un évènement");
        }
    }

}



