function multiply(e, m) {
    return e * m;
}
function power(e, p) {
    return Math.pow(e, p);
}
function cap(e, cap) {
    if (e > 3) {
        return e = cap;
    }
    else {
        return e;
    }
}
function operation(inputTable, outputTable, func, option) {
    for (var i in inputTable) {
        outputTable[i] = func(inputTable[i], option);
    }
    return outputTable;
}
var table2 = new Array(1, 5, 2, 4, 3);
var tableDouble2 = new Array();
operation(table2, tableDouble2, multiply, 2);
var tableTriple2 = new Array();
operation(table2, tableTriple2, multiply, 3);
var tableSquare2 = new Array();
operation(table2, tableSquare2, power, 2);
var tableCap3 = new Array();
operation(table2, tableCap3, cap, 3);
debugger;
