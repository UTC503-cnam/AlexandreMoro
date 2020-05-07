## Programmation fonctionnelle 3 - Réponse

---

### _Citez plusieurs noms de Monades connues et indiquez leur fonction._

> _Pour cet exercice je me baserais en partie sur la ré-écriture de l'exerice fog.ts_ > https://github.com/UTC503-cnam/AlexandreMoro/blob/master/S08/fog.ts

- **Identité** (_identity_) : Il s'agit du monade le plus simple, il encapsule une valeur "wrap" que l'on ne peut pas modifier.

  ```typescript
  const identity = <T>(t: T) => t;
  ```

- **unit** : unit va wrapper la valeur passé en paramètre dans un container que nos fonctions vont pouvoir utiliser. Un des exemples des liens fournis dans le cours se basait sur le fait de pouvoir logger les appels de fonctions sans utiliser `console.log` par ex.

  ```typescript
  /**
  unit va "wrapper" la valeur passé en paramètre dans un container
  @param x : number passé en paramètre
  @returns : [x, ``]; le number wrappé dans un container [number, string]
  */
  let unit = (x: number) => [x, ``];
  let fog = (f: any) => (g: any) => (x: (string | number)[]) => f(g(x));

  // Tout le reste du programme [...]
  ```

  On retrouvait en sortie :

  ```text
  Array(2) [400, " Appel de double "]
  ```

  soit l'encapsulation du résultat de l'opération demandé et une chaine de caractère loggable.

- **Bind** : Le rôle de `bind` est de lier les valeurs retournée par les fonctions pour les contraindres à un format voulu et permettre le chainage.

  ```typescript
  // Bind permet de transformer ici une fonction (Number) -> (Number, String) en (Number, String) -> (Number, String)

  let bind = (f: any) =>
    function (tuple: any) {
      // plutôt que de prendre un x: number par ex, on passe un tuple [x: number ; s: string]

      const [x, s] = tuple;
      const [y, t] = f(x);
      return [y, s + t];
    };
  ```

- **maybe** : Maybe est similaire au monade identité, mais, en plus de pouvoir contenir une valeur il peut aussi représenter son absence (`null` ,`undefined` ou une chaîne string vide).
  Le but de pouvoir ainsi ces cas "limite" est de pouvoir traiter un chainage de fonction sans la "casser" si pour une raison ou autre une valeur absente apparait

  ```TypeScript
  class Maybe<T> {

  private constructor(private value: T | null) {}

  static some<T>(value: T) {
    if (!value) {
      throw Error(`La valeur fournie ne peut être nulle`);
    }
    return new Maybe(value);
  }

  static none<T>() {
    return new Maybe<T>(null);
  }

  static fromValue<T>(value: T) {
    return value ? Maybe.some(value) : Maybe.none<T>();
  }

  getOrElse(defaultValue: T) {
    return this.value === null ? defaultValue : this.value;
    }
  }
  ```

  Du fait du constructeur privé on ne peut instancier `Maybe` autrement que via les méthodes privées `some` ou `none`. `fromvalue` permet de transformer une valeur en instance `Maybe`. `etOrElse` est une façon sure de récupérer la valeur contenue dans Maybe. L'appel doit fournir la valeur par défaut qui sera utilisée dans le cas ou Maybe est vide.

  L'appel pourra alors s'effectuer de cette manière :

  ```typescript
  private employees: Employee[] = [
    { id: 1, name: "John", supervisorId: Maybe.none() },
    { id: 2, name: "Jane", supervisorId: Maybe.some(1) },
    { id: 3, name: "Joe", supervisorId: Maybe.some(2) },
  ```

  Dans le cas l'employé avec l'id: 1, un chainage classique `.filter().map()` ne s'arrera pas sur une erreur.

  **A compléter**

---

### *Quel lien faites-vous entre bind et flatMap ?*
Reprenons **bind** :  
![bind](https://fsharpforfunandprofit.com/assets/img/vgfp_bind_composition.png)  
Ici nous avons 3 fonctions indépendante de signature A->E\<B>, B->\<C> et C->E\<D>
Bind nous permet ici de rendre le chainage possible, mais en sortie de chaine on se retrouve avec un enchainement de container !  
Flatmap va nous permettre de reduire les couches d'emballage (wrap) de nos données :D
![container](https://www.cocoawithlove.com/assets/blog/function_to_monad6.svg)

### *Quelle différence fondamentale faites-vous entre Promise et Observable ?*

A la différence des Promises qui sont des actions asynchrones ne retournant qu'une seule valeur, les Observables sont des streams qui vont émettre plusieurs valeurs jusqu'à leur clôture.

![container](https://miro.medium.com/max/1400/1*ThbKddqq1qC4a1pDDjHNoQ.jpeg)