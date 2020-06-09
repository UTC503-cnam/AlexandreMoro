let authors = [
  { name: "Franquin", country: "be" },
  { name: "Uderzo", country: "fr" },
  { name: "Hergé", country: "be" },
];
let belgian_authors = authors
  .filter((author) => author.country === "be")
  .map((author) => "M. " + author.name);
console.log(belgian_authors); // [ 'M. Franquin', 'M. Hergé']
