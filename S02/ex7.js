var CloneMap = /** @class */ (function () {
    function CloneMap() {
        this.inputArray = new Array();
    }
    CloneMap.prototype.Double = function (e) {
        for (var i in e) {
            this.inputArray[i] = e[i] * 2;
        }
    };
    CloneMap.prototype.Triple = function (e) {
        for (var i in e) {
            this.inputArray[i] = e[i] * 3;
        }
    };
    CloneMap.prototype.Square = function (e) {
        for (var i in e) {
            this.inputArray[i] = Math.pow(e[i], 2);
        }
    };
    CloneMap.prototype.MapMaximize3 = function (e) {
        for (var i in e) {
            if (e[i] > 3) {
                this.inputArray[i] = 3;
            }
            else {
                this.inputArray[i] = e[i];
            }
        }
    };
    return CloneMap;
}());
var table = new Array(1, 5, 2, 4, 3);
var tableDouble = new CloneMap();
tableDouble.Double(table);
var tableTriple = new CloneMap();
tableTriple.Triple(table);
var tableSqare = new CloneMap();
tableSqare.Square(table);
var tableMax3 = new CloneMap();
tableMax3.MapMaximize3(table);
debugger;
