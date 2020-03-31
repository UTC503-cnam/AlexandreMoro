var Trajet = /** @class */ (function () {
    function Trajet(x, y) {
        this.nom = x;
        this.length = y;
    }
    Trajet.prototype.toString = function () {
        return "Trajet " + this.nom + " de " + this.length + "Km";
    };
    return Trajet;
}());
var MinMax = /** @class */ (function () {
    function MinMax(t) {
        this.minMax = new Array();
        this.computeMinMax(t);
    }
    MinMax.prototype.computeMinMax = function (t) {
        var compute = new Array(t[0], t[0]);
        for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
            var e = t_1[_i];
            if (e.length < compute[0].length) {
                compute[0] = e;
            }
            if (e.length > compute[1].length) {
                compute[1] = e;
            }
        }
        this.minMax[0] = compute[0];
        this.minMax[1] = compute[1];
    };
    MinMax.prototype.getMin = function () {
        return this.minMax[0];
    };
    MinMax.prototype.getMax = function () {
        return this.minMax[1];
    };
    return MinMax;
}());
var trajets = new Array(new Trajet("a", 271), new Trajet("b", 161), new Trajet("c", 314));
for (var e in trajets) {
    console.log(trajets[e].toString());
}
var trajetMinMax = new MinMax(trajets);
console.log("Le plus grand trajet est : " + trajetMinMax.getMax());
console.log("Le plus petit trajet est : " + trajetMinMax.getMin());
var chaines = new Array("chaineDe9", "chDe5", "grandeChaineDe16");
// let chaineMinMax = 
// console.log(`La plus grande chaine est : ${chaineMinMax.getMax()}`);
// console.log(`La plus petite chaine est : ${chaineMinMax.getMin()}`);
