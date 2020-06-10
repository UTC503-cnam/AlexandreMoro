var numbers4 = [100, 34, 5, 67, 72];
// En utilisant la récursion, écrivez le code permettant de trouver le min et le max de cette liste
var min = function (list) {
  return function (n) {
    return n === list.length - 1
      ? list[0]
      : Math.min(list[n], min(list)(n + 1));
  };
};
var rMin2 = function (liste) {
  return liste.length == 1
    ? liste[0]
    : Math.min(liste[liste.length - 1], rMin2(liste)(liste.length - 1));
};
console.log(rMin2(numbers4)(0));
