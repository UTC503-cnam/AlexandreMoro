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

    public current() : number {
        return this.collection.getItems()[this.position];
    }

    public key(): number {
        return this.position;
    }

    public next(): number {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }
    
    public valid(): boolean {
        if (this.reverse) {
            return this.position >= 0; // a modifier  
        }

        return this.position < this.collection.getCount();
    }

}

class fiboCollec implements Aggregator{

    private items: number[] = [];

    public getItems(): number[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: number) : void {
        this.items.push(item);
    }

    public getIterator(): Iterator<number> {
        return new fibonacciIterator(this);
    }

    public getreverseIterator(): Iterator<number> {
        return new fibonacciIterator(this, true);

    }
}

const collection = new fiboCollec();

let query: number = 20;

for (let i: number = 2; i <= query; i++ ) {

    n2 = n1 + n0;
    n0 = n1;
    n1 = n2;

    collection.addItem(n2);
}

const iterator = collection.getIterator();

console.log("Straight Traversal :");

while (iterator.valid()) {
    console.log(iterator.next());
}

console.log("-----");
console.log("Reverse traversal: ");

const reverseIterator = collection.getreverseIterator();

while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}

