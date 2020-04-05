/**
 * implement an iterator design pattern for a fibonacci calculus
 * interface is set by the teacher.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Common iterator, very ligth (just for training)
 */
var IterateurTypique = /** @class */ (function () {
    function IterateurTypique() {
        this.emmetteur = new EmmtteurType();
        this.abonne = new AbonneType();
        // store results in an array
        this.collection = [];
        //store the current position, start at -1 to comply with index[0] when aUnSuivant is called
        this.position = -1;
    }
    /**
     * Check if the array has a next item
     * @param none
     * @returns true or false
     */
    IterateurTypique.prototype.aUnSuivant = function () {
        //check if we are at the end of the array or not
        if (this.position + 1 >= this.collection.length) {
            this.emmetteur.notify();
            return false;
        }
        // set variable to the next index and retun "yeah man you can continue"
        this.position += 1;
        return true;
    };
    /**
     * Get the next item
     * @returns fibonnaci calculus of the current index
     */
    IterateurTypique.prototype.suivant = function () {
        return this.collection[this.position];
    };
    IterateurTypique.prototype.abonnement = function () {
        this.emmetteur.attach(this.abonne);
    };
    return IterateurTypique;
}());
/**
 * Class with recursive fibonacci algorithm
 * extend IterateurTypique to access collection array
 * @param number - number to compute
 * @returns number into collection array
 */
var Fibonacci = /** @class */ (function (_super) {
    __extends(Fibonacci, _super);
    /**
     * constructor, call the super class and call addToCollection() to push results in the array
     * @param n number to compute (obviously)
     */
    function Fibonacci(n) {
        var _this = _super.call(this) || this;
        _this.addToCollection(n);
        return _this;
    }
    /**
     * fibonacci recursive algorithl
     * @param n number to compute
     * @returns f(0) = 0, f(1) = 1, f(n) = f(n-1)+f(n-2)
     */
    Fibonacci.prototype.calc = function (n) {
        if (n >= 2) {
            return this.calc(n - 1) + this.calc(n - 2);
        }
        if (n == 1) {
            return 1;
        }
        return 0;
    };
    /**
     * Store into the collection array the different(s) step(s) of the calculus
     * @param n number to process in order to add to collection array
     */
    Fibonacci.prototype.addToCollection = function (n) {
        for (var i = 0; i <= n; i++) {
            this.collection.push(this.calc(i));
        }
    };
    return Fibonacci;
}(IterateurTypique));
var EmmtteurType = /** @class */ (function () {
    function EmmtteurType() {
        this.state = 0;
        this.abonnes = [];
    }
    EmmtteurType.prototype.attach = function (abonne) {
        var ifExist = this.abonnes.includes(abonne);
        if (ifExist) {
            return console.log('Abonné déjà présent.');
        }
        console.log('Abonné inscrit à l\'emmeteur');
        this.abonnes.push(abonne);
    };
    EmmtteurType.prototype.notify = function () {
        for (var _i = 0, _a = this.abonnes; _i < _a.length; _i++) {
            var abonne = _a[_i];
            abonne.update(this);
        }
    };
    return EmmtteurType;
}());
var AbonneType = /** @class */ (function () {
    function AbonneType() {
    }
    AbonneType.prototype.update = function (emmeteur) {
        {
            console.log('fin !');
        }
    };
    return AbonneType;
}());
// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
var f = new Fibonacci(16); // (**)
f.abonnement();
var g = new Fibonacci(13);
while (f.aUnSuivant()) {
    console.log(f.suivant() + ",");
}
while (g.aUnSuivant()) {
    console.log("" + g.suivant());
}
// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton
