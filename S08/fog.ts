// Bind permet de transformer une fonction (Number) -> (Number, String) en (Number, String) -> (Number, String)
let bind = (f: any) =>
  function (tuple: any) {
    // plutôt que de prendre un x: number par ex, on passe un tuple [x: number ; s: string]
    const [x, s] = tuple;
    const [y, t] = f(x);
    return [y, s + t];
  };

/**
 * unit va wrapper la valeur passé en paramètre dans un container
 * @param x number passé en paramètre
 * @returns [x, ``]; le number wrappé dans un container [number, string]
 */
let unit = (x: number) => [x, ``];
let fog = (f: any) => (g: any) => (x: (string | number)[]) => f(g(x));

/**  mise en commentaire pour reprise de la fonction dans sa forme originelle ci-dessus
let fog = (f: any) => (g: any) => (x: number) => {
  const [y, s] = g(x); // on traite double() en premier, le résultat est stocké dans y, le debug dans s
  const [z, t] = f(y); // square() traite y et stocke le resultat dans z, le resultat du debug de square est stocké dans t
  return [z, s + t]; // on retourne le résultat et les log concaténés
};
*/

/**
 * En reprenant les fonctions de base de l'exercice, nous les associons avec unit pour les rendre compatible
 * avec le format des fonctions débugables (number, string)
 * square aura le paramètre unit (la valeur de débuggage sera ``)
 * double aura un string de débugger
 * (ceci uniquement pour marquer la différence)
 * @param x Number à calculer
 * @returns [x, ``] dans les 2 cas, un via unit() et l'autre volontaire;
 */
let squareFog = (x: number) => unit(x * x);
let doubleFog = (x: number) => [x * 2, ` Appel de double `];

//let square = (x) => [x * x, ` Appel de square `];
//let double = (x) => [x * 2, ` Appel de double `];

let test = fog(bind(squareFog))(bind(doubleFog)); // passer le bind sur les fonctions passée en paramètre va nous permettre de reprendre la forme originelle de la fonction
let v = test(unit(10));
console.log(v);
