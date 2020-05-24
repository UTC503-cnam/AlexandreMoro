const operations = [
  // Début de partie
  { amount: 1000, type: "credit" },
  // Je fais des courses
  { amount: 110, type: "debit" },
  // Le loyer tombe
  { amount: 700, type: "debit" },
];

const totalCreds: number = operations
  .filter((o) => o.type == "credit") // filtre, on conserve les opérations crédit
  .map((c) => c.amount) // on map les valeurs amount du filtrage précédent
  .reduce((amount, acc) => amount + acc); // avec reduc on fait la somme des valeurs filtrées

const totalDebs: number = operations
  .filter((o) => o.type == "debit")
  .map((c) => c.amount)
  .reduce((amount, acc) => amount + acc);

const account = (totalCredit: number) => (totalDebit: number) =>
  totalCredit - totalDebit;

// Affiche le solde restant
console.log(account(totalCreds)(totalDebs));
