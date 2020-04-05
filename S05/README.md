### Exercices Patron de conception
---

Pour la réalisation de cet exercice je me sers essentiellement de ce site : https://refactoring.guru/


*Une erreur que je n'arrive pas à régler sur cette portion de code :*

```Typescript
public attach(abonne: Abonne): void {

        const ifExist = this.abonnes.includes(abonne);
        if (ifExist) {
            return console.log('Abonné déjà présent.');
        }

        console.log('Abonné inscrit à l\'emmeteur');
        this.abonnes.push(abonne);

    }
```
Me retourne cette erreur à la transcompilation :

```Bash
fibonacci.ts:127:38 - error TS2339: Property 'includes' does not exist on type 'Abonne[]'.

127         const ifExist = this.abonnes.includes(abonne);
                                         ~~~~~~~~


Found 1 error.


 S05 master node fibonacci.js
```

Je n'au pas encore réussi à résoudre entièrement ce bug.
