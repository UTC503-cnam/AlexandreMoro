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
     * @param size needed, size of a triangle side or size of a diamond's first diagonal
     * @param size2 optionnal (not needed for atriangle), diamond's second diagonal
     */
    function Figure(size, size2) {
        this.size = size;
        this.size2 = size2;
    }
    /**
     * Return a basic report with informations from the constructor
     * this report is append with the overload method on the child class
     * @returns report as a string
     */
    Figure.prototype.report = function () {
        var report;
        if (this.size2 == null) {
            report = "This figure is a triangle with a side length of: " +
                this.size + ".";
        }
        else {
            report = "This figure is a Diamond with a first diagonal of: "
                + this.size + " and a second diagonal of: " + this.size2 + ".";
        }
        return report;
    };
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
    /**
     * @returns append basic report from the mother class with object characs
     */
    Triangle.prototype.report = function () {
        return _super.prototype.report.call(this) + " the area is: " + this.area() + " and the perimeter is: " + this.perimeter() + ".";
    };
    return Triangle;
}(Figure));
var Diamond = /** @class */ (function (_super) {
    __extends(Diamond, _super);
    function Diamond() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Diamond";
        return _this;
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
        return ((this.size * this.size2) / 2);
    };
    /**
     * Return the perimeter of a diamond
     * formula : 2(sqrt(sqr(d)+sqr(D)))
     * @param size - first diamond's diagonal
     * @param size2 - second diamond's diagonal
     * @returns the calculation of the perimeter
     */
    Diamond.prototype.perimeter = function () {
        return (2 * (Math.sqrt(Math.pow(this.size, 2) + Math.pow(this.size2, 2))));
    };
    /**
     * @returns append basic report from the mother class with object characs
     */
    Diamond.prototype.report = function () {
        if (this.isSqare()) {
            return _super.prototype.report.call(this) + " the area is: " + this.area() + " and the perimeter is: " + this.perimeter() + " and the diamond is in fact ... a sqare";
        }
        else {
            return _super.prototype.report.call(this) + " the area is: " + this.area() + " and the perimeter is: " + this.perimeter();
        }
    };
    return Diamond;
}(Figure));
var t1 = new Triangle(5);
var t2 = new Triangle(10);
var l1 = new Diamond(5, 6); // diag 1, diag 2
var l2 = new Diamond(4, 4);
var figures = [t1, t2, l1, l2];
for (var _i = 0, figures_1 = figures; _i < figures_1.length; _i++) {
    var f = figures_1[_i];
    console.log(f.report());
}
debugger;
