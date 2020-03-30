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
// class MinMax {
//     constructor(t: Array){
//         this.computeMinMax(t);
//     }
//     private computeMinMax(t: Array){
//         for(let e of t){
//         }
//     }
//     getMin(): {
//     }
//     getMax(){
//     }
// }
var trajets = new Array(new Trajet("a", 271), new Trajet("b", 161), new Trajet("c", 314));


debugger;
// let trajetMinMax = new MinMax(trajets);
// console.log(`Le plus grand trajet est : ${trajetMinMax.getMax()}`);
// console.log(`Le plus petit trajet est : ${trajetMinMax.getMin()}`);
// let chaines: Array = new Array("chaineDe9", "chDe5", "grandeChaineDe16");
// let chaineMinMax = 
// console.log(`La plus grande chaine est : ${chaineMinMax.getMax()}`);
// console.log(`La plus petite chaine est : ${chaineMinMax.getMin()}`);
