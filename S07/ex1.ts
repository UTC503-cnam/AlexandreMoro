// Ecrivez une version curryfiée de la fonction suivante
// à l'aide de fonctions lambda

/* 
function format_message(from, to, message) {
  return "From: " + from + ", To: " + to + "Msg: " + message;
}

function curry_format_message(frome) {} 
*/

let format_message = (from: string) => (to: string) => (message: string) => {
  (`From: ${from} | to ${to}: ${message}`)};
};

let message = format_message("Liam")("Bad guys")(
  "I will look for you, I will find you and I will kill you."
);

console.log(message);


