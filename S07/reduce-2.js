var letters = ["e", "m", "i", "r"];
var reverse = letters.reduce(function (rev, letter) { return [letter].concat(rev); }, []);
console.log(reverse); // [ 'r', 'i', 'm', 'e' ]
