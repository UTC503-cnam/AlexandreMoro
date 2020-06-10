export function truncate(len: number, value: string) {
  return value.substring(0, len);
}

let longueChaines = [`Chaine 1 tres longue`, `Chaine 2 tres longue`];

let trunc = longueChaines.map((x) => truncate(8, x));

let truncate2 = (l: number) => (v: string) => v.substring(0, l);
let truncate_by_5 = truncate2(5);

let res2 = longueChaines.map(truncate_by_5);

console.log(trunc);
console.log(res2);
