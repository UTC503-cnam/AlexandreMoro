function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.head.append(script);
    script.onload = () => resolve("Fichier " + src + " bien chargé");
    script.onerror = () => reject(new Error("Echec de chargement de " + src));
  });
}

/*Décommentez le code pour qu'il s'exécute
loadScript('boucle.js')
.then(result => loadScript('script2.js', result))
.then(result2 => loadScript('script3.js', result2))
.catch(alert);
*/

//Equivalent à
loadScript("boucle.js")
  .then(function (result) {
    return loadScript("script2.js", result);
  })
  .then(function (result2) {
    return loadScript("script3.js", result2);
  })
  .catch(console.log(`Erreur`));
