var fibonacciIterator = /** @class */ (function () {
    function fibonacciIterator(collection, reverse) {
        if (reverse === void 0) { reverse = false; }
        this.position = 0;
        this.reverse = false;
        this.collection = collection;
        this.reverse = reverse;
        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }
    fibonacciIterator.prototype.rewind = function () {
        this.position = this.reverse ? this.collection.getCount() - 1 : 0;
    };
    fibonacciIterator.prototype.current = function () {
        return this.collection.getItems()[this.position];
    };
    fibonacciIterator.prototype.key = function () {
        return this.position;
    };
    fibonacciIterator.prototype.next = function () {
        var item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    };
    fibonacciIterator.prototype.valid = function () {
        if (this.reverse) {
            return this.position >= 0;
        }
        return this.position < this.collection.getCount();
    };
    return fibonacciIterator;
}());
var fiboCollec = /** @class */ (function () {
    function fiboCollec(fNumber) {
        this.items = [];
        this.fibAlgoToCollec(fNumber);
    }
    fiboCollec.prototype.getItems = function () {
        return this.items;
    };
    fiboCollec.prototype.getCount = function () {
        return this.items.length;
    };
    fiboCollec.prototype.addItem = function (item) {
        this.items.push(item);
    };
    fiboCollec.prototype.getIterator = function () {
        return new fibonacciIterator(this);
    };
    fiboCollec.prototype.getreverseIterator = function () {
        return new fibonacciIterator(this, true);
    };
    fiboCollec.prototype.fibAlgoToCollec = function (fnumber) {
        var number0 = 0;
        var number1 = 1;
        var number2 = 0;
        for (var i = 2; i <= fnumber; i++) {
            number2 = number1 + number0;
            number0 = number1;
            number1 = number2;
            this.addItem(number2);
        }
    };
    return fiboCollec;
}());
var collection = new fiboCollec(20);
var iterator = collection.getIterator();
console.log("Normal");
while (iterator.valid()) {
    console.log(iterator.next());
}
console.log("-----");
console.log("Reverse");
var reverseIterator = collection.getreverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}
