interface Iterator<T> {

    current(): T;

    next(): T;

    key(): T;

    valid(): boolean;

    rewind(): void;

}

interface Aggregator {

    getIterator() : Iterator<number>;

}

class fibonacciIterator implements Iterator<number> {

    private collection: fiboCollec;

    private position: number = 2;

    private reverse: boolean = false;

    constructor(collection: fiboCollec, reverse: boolean = false) {

        this.collection = collection;
        this.reverse = reverse;

        if (reverse) {
            this.position = collection.getCount() -1;
        }

    }

    public rewind() {
        this.position = this.reverse ? this.collection.getCount() - 1 : 0; // surement a retoucher car on démarre à 2 :D
    }

    
    
}