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
var ZooAnimal = /** @class */ (function () {
    // Constructeur
    function ZooAnimal(nom, age, poids) {
        this.age = age;
        this.poids = poids;
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }
    ZooAnimal.prototype.nouvelleJournee = function () {
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    };
    ZooAnimal.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " +
            this.quantiteNourritureTotale + "Kg de nourriture.";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        return etat;
    };
    ZooAnimal.prototype.recoitNourriture = function (quantite) {
        this.quantiteNourritureTotale += quantite;
        this.bienNourri = this.calculBienNourri();
    };
    return ZooAnimal;
}());
var ZooDauphin = /** @class */ (function (_super) {
    __extends(ZooDauphin, _super);
    function ZooDauphin(name, age, poids, poissonPrefere) {
        var _this = _super.call(this, name, age, poids) || this;
        _this.poissonPrefere = poissonPrefere;
        return _this;
    }
    ZooDauphin.prototype.etatAlimentation = function () {
        return _super.prototype.etatAlimentation.call(this) + " Son poisson préféré est " + this.poissonPrefere + ".";
    };
    ZooDauphin.prototype.calculBienNourri = function () {
        return this.quantiteNourritureTotale > this.poids / 8;
    };
    return ZooDauphin;
}(ZooAnimal));
var ZooPanda = /** @class */ (function (_super) {
    __extends(ZooPanda, _super);
    function ZooPanda(name, age, poids, plantePreferee) {
        var _this = _super.call(this, name, age, poids) || this;
        _this.plantePreferee = plantePreferee;
        return _this;
    }
    ZooPanda.prototype.etatAlimentation = function () {
        return _super.prototype.etatAlimentation.call(this) + " Sa plante préférée est " + this.plantePreferee + ".";
    };
    ZooPanda.prototype.calculBienNourri = function () {
        return this.quantiteNourritureTotale > (this.poids / 4 - this.age / 10);
    };
    return ZooPanda;
}(ZooAnimal));
var flipper = new ZooDauphin("Flipper", 30, 150, "Fletan");
var oum = new ZooDauphin("oum", 20, 100, "Sardine");
var pandi = new ZooPanda("Pandi", 10, 80, "Bambou");
var lesZanimaux = [flipper, oum, pandi];
for (var _i = 0, lesZanimaux_1 = lesZanimaux; _i < lesZanimaux_1.length; _i++) {
    var unAnimal = lesZanimaux_1[_i];
    unAnimal.nouvelleJournee();
}
flipper.recoitNourriture(10);
pandi.recoitNourriture(10);
flipper.recoitNourriture(25);
oum.recoitNourriture(15);
for (var _a = 0, lesZanimaux_2 = lesZanimaux; _a < lesZanimaux_2.length; _a++) {
    var unAnimal = lesZanimaux_2[_a];
    console.log(unAnimal.etatAlimentation());
}

debugger;