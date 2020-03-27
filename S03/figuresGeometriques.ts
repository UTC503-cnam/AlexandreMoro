
abstract class Figure {


    protected size: number;
    protected size2: number;

    /**
     * Constructor of the figure class
     * Geometric rule : all side of a figure are equals
     * @param size needed, size of a triangle side or size of a diamond's first diagonal
     * @param size2 optionnal (not needed for atriangle), diamond's second diagonal
     */
    constructor(size: number, size2?: number) {

        this.size = size;
        this.size2 = size2;

    }

    protected abstract area();
    protected abstract perimeter();

    /**
     * Return a basic report with informations from the constructor
     * this report is append with the overload method on the child class
     * @returns report as a string
     */
    report() :string {

        let report: string;

        if (this.size2 == null) {
            report = "This figure is a triangle with a side length of: " + 
            this.size + ".";
        } else {
            report = "This figure is a Diamond with a first diagonal of: "
            + this.size + " and a second diagonal of: " + this.size2 + ".";
        }
        return report;
    }

}


class Triangle extends Figure {

    /**
     * Return the area of an equilateral triangle
     * formula : (sqrt(3)/4)*sqr(side)
     * @param side - side of a triangle
     * @returns the calculation of the area
     */
    area() :number {
        return ((Math.sqrt(3) / 4) * Math.pow(this.size, 2));
    }

    /**
     * Return the perimeter of an equilateral triangle
     * formula : 3 * side
     * @param size - size of the the triangle's side
     * @returns the calculation of the perimeter
     */
    perimeter() :number {
        return this.size * 3;
    }

    /**
     * @returns append basic report from the mother class with object characs
     */
    report() :string {
        return super.report() + " the area is: " + this.area() + " and the perimeter is: " + this .perimeter() + ".";
    }

}

class Diamond extends Figure {

    /**
     * Return if the diamond is a square
     * formula : If the 2 diagonals are equal, this is a sqare
     * @param size  - size of the first diagonal
     * @param size2 - size of the second diagonal
     * @returns true or false
     */
    public isSqare(): boolean{
        if (this.size == this.size2) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Return the area of an equilateral triangle
     * formula : (d * D) / 2
     * @param size  - size of the first diagonal
     * @param size2 - size of the second diagonal
     * @returns the calculation of the area
     */
    area(): number {
        return ((this.size * this.size2) /2);
    }

    /**
     * Return the perimeter of a diamond
     * formula : 2(sqrt(sqr(d)+sqr(D)))
     * @param size - first diamond's diagonal
     * @param size2 - second diamond's diagonal  
     * @returns the calculation of the perimeter
     */
    perimeter(): number {
        return (2 * (Math.sqrt(Math.pow(this.size, 2) + Math.pow(this.size2, 2))));
    }

    /**
     * @returns append basic report from the mother class with object characs
     */
     report(): string {

        if (this.isSqare()) {
            return super.report() + " the area is: " + this.area() + " and the perimeter is: " + this .perimeter() + " and the diamond is in fact ... a sqare";
        } else {
            return super.report() + " the area is: " + this.area() + " and the perimeter is: " + this .perimeter();
        }
    }

}

// creating objects
let t1 = new Triangle(5);
let t2 = new Triangle(10);
let l1 = new Diamond(5, 6); // diag 1, diag 2
let l2 = new Diamond(4, 4);


let figures: Figure[] = [t1, t2, l1, l2];

for (let f of figures) {
console.log(f.report());
}
