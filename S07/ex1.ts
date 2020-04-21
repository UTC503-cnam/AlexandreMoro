// Ecrivez une version curryfiée de la fonction suivante
// à l'aide de fonctions lambda

/* 
function format_message(from, to, message) {
  return "From: " + from + ", To: " + to + "Msg: " + message;
}

function curry_format_message(frome) {} 
*/

let format_message = (from: string) => (to: string) => (message: string) => {
  console.log(`From: ${from} | to ${to}: ${message}`);
};

let message = format_message("Liam")("Bad guys")(
  "I will look for you, I will find you and I will kill you."
);

let incompleteMessage = format_message("Alex");
let incompleteMessage_2 = format_message("Alex")("Enfants");
let incompleteMessage_3 = format_message("Alex")("Enfants")(
  "Rangez vos chambres !!!"
);
