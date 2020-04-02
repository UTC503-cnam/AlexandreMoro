// Rappel : f(0) = 0, f(1) = 1, f(n) = f(n-1) + f(n-2)
var n3 = 0;
var test = 13;
var result = 0;
for (var i = 2; i < test; ++i) {
    n3 = ((i - 2) + (i - 1));
    result = result + n3;
    console.log(i + ":" + result);
}
console.log(result);
