function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

delay(5000).then(function () {
  console.log(`Délai de 5s passé`);
});

timeout(3000, delay(5000))
  .then(function () {
    console.log("5 seconds have passed!");
  })
  .catch(function (reason) {
    console.error("Error or timeout", reason);
  });

function timeout(ms, promise) {
  // on passe deux paramètre 1) depuis timeout() un délai de 3000ms 2) une promesse, ici delay(5000)
  return new Promise(function (resolve, reject) {
    // on instancie une nouvelle promesse
    promise.then(resolve); //après la promesse de 5000ms on valide la promesse
    setTimeout(function () {
      // On initialise un timeout, setTimeout prend une fonction qui sera maintenu le temps passé en para 2
      // ici la fonction executé après 3000ms est un reject
      // Comme notre promesse sera "fulfilled" qu'a 5s (5000ms) la promesse ne peut être tenue, elle est donc "rejected"
      reject(new Error(`Timeout after ${ms} ms`));
    }, ms);
  });
}
