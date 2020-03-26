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
var Figure = /** @class */ (function () {
    /**
     * Constructor of the figure class
     * Geometric rule : all side of a figure are equals
     * @param size needed, size of the side of a triangle or size of a digonal for a diamond
     * @param size2 optionnal, diagonal size of the diamond
     */
    function Figure(size, size2) {
        this.size = size;
        this.size2 = size2;
    }
    return Figure;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Return the area of an equilateral triangle
     * formula : (sqrt(3)/4)*sqr(side)
     * @param side - side of a triangle
     * @returns the calculation of the area
     */
    Triangle.prototype.area = function () {
        return ((Math.sqrt(3) / 4) * Math.pow(this.size, 2));
    };
    /**
     * Return the perimeter of an equilateral triangle
     * formula : 3 * side
     * @param size - size of the the triangle's side
     * @returns the calculation of the perimeter
     */
    Triangle.prototype.perimeter = function () {
        return this.size * 3;
    };
    Triangle.prototype.report = function () {
    };
    return Triangle;
}(Figure));
var Diamond = /** @class */ (function (_super) {
    __extends(Diamond, _super);
    function Diamond() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Return if the diamond is a square
     * formula : If the 2 diagonals are equal, this is a sqare
     * @param size  - size of the first diagonal
     * @param size2 - size of the second diagonal
     * @returns true or false
     */
    Diamond.prototype.isSqare = function () {
        if (this.size == this.size2) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Return the area of an equilateral triangle
     * formula : (d * D) / 2
     * @param size  - size of the first diagonal
     * @param size2 - size of the second diagonal
     * @returns the calculation of the area
     */
    Diamond.prototype.area = function () {
        return (this.size * this.size2) / 2;
    };
    Diamond.prototype.perimeter = function () {
    };
    Diamond.prototype.report = function () {
    };
    return Diamond;
}(Figure));
var t1 = new Triangle(5);
var t2 = new Triangle(10);
var l1 = new Diamond(5, 6); // diagonale 1, diagonale 2
console.log(l1.isSqare());
console.log(l1.area());
// let l2 = new losange(4, 4);
// let figures: Figure[] = [t1, t2, l1, l2];
// for (let f of figures) {
//     console.log(f.report());
// }
debugger;
