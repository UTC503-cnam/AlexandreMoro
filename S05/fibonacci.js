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
var IterateurTypique = /** @class */ (function () {
    function IterateurTypique() {
        this.collection = [];
        this.position = -1;
    }
    IterateurTypique.prototype.aUnSuivant = function () {
        if (this.position + 1 >= this.collection.length) {
            return false;
        }
        this.position += 1;
        return true;
    };
    IterateurTypique.prototype.suivant = function () {
        return this.collection[this.position];
    };
    return IterateurTypique;
}());
var Fibonacci = /** @class */ (function (_super) {
    __extends(Fibonacci, _super);
    function Fibonacci(n) {
        var _this = _super.call(this) || this;
        _this.addToCollection(n);
        return _this;
    }
    Fibonacci.prototype.calc = function (n) {
        if (n >= 2) {
            return this.calc(n - 1) + this.calc(n - 2);
        }
        if (n == 1) {
            return 1;
        }
        return 0;
    };
    Fibonacci.prototype.addToCollection = function (n) {
        for (var i = 0; i <= n; i++) {
            this.collection.push(this.calc(i));
        }
    };
    return Fibonacci;
}(IterateurTypique));
// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
var f = new Fibonacci(16); // (**)
while (f.aUnSuivant()) {
    console.log(f.suivant() + ",");
}
// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton
