
class CloneMap{

    private inputArray : number[] = new Array();

    Double( e : number[] ): void {
        for (let i in e) {
            this.inputArray[i] = e[i] * 2;
        }
    }

    Triple( e : number[] ):void {
        for (let i in e) {
            this.inputArray[i] = e[i]* 3;
        }
    }

    Square( e: number[] ):void {
        for (let i in e) {
            this.inputArray[i] = Math.pow(e[i],2);
        }
    }

    MapMaximize3( e: number[] ) :void {
        for (let i in e) {
            if (e[i] > 3 ) {
                this.inputArray[i] = 3
            }
            else {
                this.inputArray[i] = e[i];
            }
        }
    }
}

let table:number[] = new Array(1, 5, 2, 4, 3);

let tableDouble = new CloneMap();
tableDouble.Double(table);

let tableTriple = new CloneMap();
tableTriple.Triple(table);

let tableSqare = new CloneMap();
tableSqare.Square(table);

let tableMax3 = new CloneMap();
tableMax3.MapMaximize3(table);

debugger






