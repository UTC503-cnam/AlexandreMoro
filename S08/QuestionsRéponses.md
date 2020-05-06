### Programmation fonctionnelle 3 - Réponse
---

* Citez plusieurs noms de Monades connues et indiquez leur fonction. 
   
  >*Pour cet exercice je me baserais sur la ré-écriture de l'exerice fog.ts*
  https://github.com/UTC503-cnam/AlexandreMoro/blob/master/S08/fog.ts

 
  
  * **Identité** (*identity*) : Il s'agit du monade le plus simple, il encapsule une valeur "wrap" que l'on ne peut pas modifier.
  
    ```typescript
    const identity = <T>(t: T) => t;
    ```

  * **unit** : unit va wrapper la valeur passé en paramètre dans un container. Un des exemples des liens fournis dans le cours se basait sur le fait de pouvoir logger les appels de fonctions sans utiliser `console.log` dans le cadre de l'utilisation de fonctions pures.
  
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

  * **Bind** : Le rôle de `bind` est de lier les valeurs retournée par les fonctions pour les contraindres à un format voulu et permettre le chainage.

    ```typescript
    // Bind permet de transformer ici une fonction (Number) -> (Number, String) en (Number, String) -> (Number, String)

    let bind = (f: any) =>
    function (tuple : any) {
    // plutôt que de prendre un x: number par ex, on passe un tuple [x: number ; s: string]

        const [x, s] = tuple;
        const [y, t] = f(x);
        return [y, s + t];
    };
    ```
  
  * **maybe** : 