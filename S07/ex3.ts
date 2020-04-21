let authorsBd = [
  { name: "Franquin", country: "be" },
  { name: "Uderzo", country: "fr" },
  { name: "Hergé", country: "be" },
];

let belgian_authors = authorsBd
  .filter((n) => n.country == "be")
  .map((n) => `M. ${n.name}`);

console.log(belgian_authors); // [ 'M. Franquin', 'M. Hergé']
