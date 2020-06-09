let auteurs = [
  { name: "Franquin", country: "be" },
  { name: "Uderzo", country: "fr" },
  { name: "Hergé", country: "be" },
];
// Ecrivez le code renvoyant un tableau contenant uniquement les noms des auteurs belges précédés de M.
// Instructions de boucle interdites.

let auteursBelges = auteurs
  .filter((auteur) => auteur.country === `be`)
  .map((auteur) => `M. ${auteur.name}`);

console.log(auteursBelges); // [ 'M. Franquin', 'M. Hergé']
