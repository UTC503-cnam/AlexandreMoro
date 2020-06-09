// Ecrivez une version curryfiée de la fonction suivante
// à l'aide de fonctions lambda

// export function format_message(from, to, message) {
//   return "From: " + from + ", To: " + to + "Msg: " + message;
// }

let ex1 = (from: string) => (to: string) => (msg: string) =>
  "From: " + from + ", To: " + to + " : Msg: " + msg;
let ex1Msg = ex1("moi")("cnam")("dernière ligne droite");

console.log(ex1Msg);
