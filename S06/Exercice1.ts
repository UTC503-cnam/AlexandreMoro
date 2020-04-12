/**

Soit le code : 

    function maximise_3(v) {
        if (v > 3)
            return 3;
        else
            return v;
    }

    function maximise_4(v) {
        if (v > 4)
            return 4;
        else
            return v;
    }

Écrivez_les sous forme d'expression lambda

*/

let max3 = (v: number) => (v > 3 ? (v = 3) : v);
let max4 = (v: number) => (v > 4 ? (v = 4) : v);

console.log(max3(10));
console.log(max3(2));
console.log(max4(10));
console.log(max4(2));
