
abstract class Figure {


    protected size: number;
    protected size2: number;

    /**
     * Constructor of the figure class
     * Geometric rule : all side of a figure are equals
     * @param size needed, size of a triangle side or size of a diamond's first diagonal
     * @param size2 optionnal (not needed for atriangle), rhombus's second diagonal
     */
    constructor(size: number, size2?: number) {

        this.size = size;
        this.size2 = size2;
    }

    protected abstract area(): number;
    protected abstract perimeter(): number;
    protected abstract side(): number;

    /**
     * @returns retune as a string a basic report
     */
    public report() :string {

        let report: string;

        if (this.size2 == null) {
            report = "This figure is a triangle\n";
        } else {
            report = "This figure is a Rhombus\n";
        }
        return report;
    }

}


class Triangle extends Figure {

    /**
     * @returns Triangle's side size
     */
    side() : number {
        return this.size;
    }

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
        return super.report()
        + 
        + "Side size: " + this.side() + "\n"
        + "Area:" + this.area().toFixed(2) + "\n"
        + "Perimeter: " + this .perimeter().toFixed(2) + ".\n";
    }

}

class Rhombus extends Figure {


    /**
     * @returns - Rhombus Side size
     */
    side() {
        return Math.sqrt(Math.pow(this.size/2, 2)+(Math.pow(this.size2/2, 2)));
    }

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
     * Return the perimeter of a rhombus
     * formula : 2(sqrt(sqr(d)+sqr(D)))
     * @param size - first rhombus's diagonal
     * @param size2 - second rhombus's diagonal  
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
            return super.report()
            + "This rhombus is a square\n"
            + "Side Size: " + this.side().toFixed(2) + "\n"
            + "Area: " + this.area().toFixed(2) + "\n"
            + "Perimeter: " + this .perimeter().toFixed(2) + "\n";
        } else {
            return super.report()
            + "Side size: " + this.side().toFixed(2) + "\n"
            + "Area: " + this.area().toFixed(2) + "\n" 
            + "Perimeter: " + this .perimeter().toFixed(2) + "\n";
        }
    }

}

// creating objects
let t1 = new Triangle(5);
let t2 = new Triangle(10);
let l1 = new Rhombus(5, 6); // diag 1, diag 2
let l2 = new Rhombus(4, 4);


let figures: Figure[] = [t1, t2, l1, l2];

for (let f of figures) {
console.log(f.report());
}
