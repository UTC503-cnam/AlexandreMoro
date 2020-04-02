// Rappel : f(0) = 0, f(1) = 1, f(n) = f(n-1) + f(n-2)
var n0 = 0;
var n1 = 1;
var n2 = 0;
var test = 13;
for (var i = 2; i <= test; i++) {
    n2 = n1 + n0;
    n0 = n1;
    n1 = n2;
}
console.log(n2);
