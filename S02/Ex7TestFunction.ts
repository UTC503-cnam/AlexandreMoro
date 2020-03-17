function multiply(e: number, m:number) {
    return e * m;
}
 
function power(e: number, p: number) {
    return Math.pow(e, p);
}

function cap(e: number, cap: number) {
    if (e > 3) {
       return e = cap;
    } else {
        return e;
    }
}
        
function operation(inputTable: number[], outputTable: number[], func: Function, option: number) {
    
    for (let i in inputTable) {
      outputTable[i] = func(inputTable[i], option);
    }
    return outputTable;
}

let table2:number[] = new Array(1, 5, 2, 4, 3);

let tableDouble2:number[] = new Array();
operation(table2, tableDouble2, multiply, 2);

let tableTriple2:number[] = new Array();
operation(table2, tableTriple2, multiply, 3);

let tableSquare2: number[] = new Array();
operation(table2, tableSquare2, power, 2);

let tableCap3: number[] = new Array();
operation(table2, tableCap3, cap, 3);

debugger

