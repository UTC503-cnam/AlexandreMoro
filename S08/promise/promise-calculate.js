console.log("Start");

var calculate = function (value) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate with ${value}`);
    resolve(value * 2);
  });
};

function verify(result) {
  console.log(`Verify that ${result} = 10`);
}

calculate(1) // Calculate with 1 = 2 (resolve(value * 2);)
  .then(calculate) // Calculate with 2 (1*2) = 4
  .then((result) => result + 1) // 1) résultat retourné +1 = 5
  .then(calculate) // 2) Calculate with 5 = 10
  .then(verify); //Appelle la fonction verify

console.log("End");

/**
 * Start
Calculate with 1
End  (est appelé car la promesse est remplie, .then enregistre le prochain appel de fonction)
Calculate with 2
Calculate with 5
Verify that 10 = 10
 * 
 */
