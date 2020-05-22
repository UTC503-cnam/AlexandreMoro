let format_devise = (devise: string) => (valeur: number) => {
  return `${valeur} ${devise}`;
};

let format_dollar = format_devise("$");
let format_euro = format_devise("€");

console.log(format_dollar(10));
console.log(format_euro(100));

console.log(format_devise("€")(100000));
