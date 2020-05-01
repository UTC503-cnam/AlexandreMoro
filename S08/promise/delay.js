function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

delay(5000).then(function () {
  console.log(`Délai de 5s passé`);
});

function timeout(ms, promise) {
  return new promise(function (resolve, reject) {
    promise.then(resolve);
    setTimeout(function () {
      reject(new Error(`Timeout après ${ms} ms`));
    });
  });
}

timeout(8000, delay(5000))
  .then(function () {
    console.log("5 seconds have passed!");
  })
  .catch(function (reason) {
    console.error("Error or timeout", reason);
  });
