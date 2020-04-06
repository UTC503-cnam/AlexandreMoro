const tableau: number[] = [8, 5, -1, 5, 4, 3];

var i: number = 0;

while (i < tableau.length) {
    console.log(tableau[i]);
    
    if (tableau[i] < 0) {
        --i;
    } else {
        i += 2;
    }
}

