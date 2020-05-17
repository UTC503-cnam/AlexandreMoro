# Revision UTC503 Covid edition

## 1. Définitions générales:

   **Le tas:**  
   utilisé lors de l'allocation dynamique de la mémoire durant l'exécution d'un programme informatique. Ou à la demande du programme.

   > _Wikipedia:_  
   > La plupart des programmes ayant des besoins en mémoire dépendant de l'usage qu'on en fait, il est nécessaire de pouvoir, à des moments arbitraires de l'exécution, demander au système d'exploitation d'allouer de nouvelles zones de mémoire, et de pouvoir restituer au système ces zones (libérer la mémoire).

   **La pile d'exécution (stack):**  
   Allocation dynamique de mémoire qui se fait automatiquement lors d'un appel de sous-routine ou de fonction.

   > _Wikipedia:_  
   > L'exécution d'un programme utilise généralement une pile contenant les cadres d'appel aux routines (fonctions ou procédures) du langage de programmation utilisé. Schématiquement, les variables lexicales, c'est-à-dire les variables définies dans la portée textuelle d'une routine, sont :  
   > . allouées lors de l'entrée dans la routine (entrée de la portée), c'est-à-dire que l'espace est réservé pour ces variables;  
   > . désallouées automatiquement lors de la sortie de la routine (sortie de la portée), c'est-à-dire que l'espace réservé pour ces variables est dorénavant libre et disponible pour d'autres variables.
   >
   > Un segment mémoire, dit segment de pile, est utilisé pour ces allocations/libération. Aucun mot clef n'est nécessaire dans le code source du langage supportant la notion de variable lexicale : l'espace est alloué et libéré selon la discipline de pile par définition.

   Certains langages, comme le C ou le C++, parlent de variables automatiques au lieu de variables lexicales, mais il s'agit de la même chose.

   **Instructions:**  
   C'est une ligne de code que l'ordinateur doit exécuter (déclarer une variable, exécuter une fonction...).

   **Mot-clé:**  
   C'est un mot qui est déjà reconnu comme ayant une fonctionnalité au sein du langage de programmation.

   **Variable:**  
   C'est une référence à une adresse mémoire qui porte un nom pour plus de facilité d'utilisation, une valeur ainsi qu'un type (Exemple: int).

   **identifiant:**  
   un identificateur ou identifiant est un mot choisi par le programmeur et qui, tel une étiquette, désigne une donnée du programme : variable, constante, procédure, type, etc. Un identifiant et sa valeur forment une sorte de symbole, comparables à ceux des mathématiques, à la différence qu'en programmation courante la valeur peut changer au cours du temps.

   **Type**  
   un type de donnée, ou simplement un type, définit la nature des valeurs que peut prendre une donnée, ainsi que les opérateurs qui peuvent lui être appliqués.

   > _Wikipedia_  
   > Type booléen : valeurs vrai ou faux — ou respectivement 1 ou 0 ;  
   > Type entier signé ou non signé : valeurs codées sur 8 bits, 16 bits, 32 bits voire 64 bits.  
   > Les caractères sont parfois assimilés à des entiers codés sur 8 ou 16 bits (exemples : C et Java) ;  
   > Type réel en virgule flottante.

   **Structure de données:**  
   Une structure de données est une manière d'organiser les données pour les traiter plus facilement. Une structure de données est une mise en œuvre concrète d'un type abstrait.

   **tableaux:**  
   Un tableau est une structure de données (variable complexe) représentant une séquence finie d'éléments auxquels on peut accéder efficacement par leur position, ou indice, dans la séquence. C'est un type de conteneur que l'on retrouve dans un grand nombre de langages de programmation.

   **structures de contrôle :**  
   Les structures de contrôle décrivent l’enchaînement des instructions. Elles permettent des traitements séquentiels, conditionnels ou répétitifs (itératifs).

   **Exception:**  
   Une exception est l'interruption de l'exécution du programme à la suite d'un événement particulier. Le but des exceptions est de réaliser des traitements spécifiques aux événements qui en sont la cause. Ces traitements peuvent rétablir le programme dans son mode de fonctionnement normal, auquel cas son exécution reprend. Il se peut aussi que le programme se termine, si aucun traitement n'est approprié.  
   `Throw exception, try catch`

   **Module:**
   Un module désigne originellement un fichier de code de programmation ou un fichier de librairie statique ou dynamique. Pour reprendre l'image de la programmation objet, un module est une instance unique qui n'utilise pas d'héritage et ne contient aucun module fils. Chaque module peut exporter ou importer certains symboles comme des variables, des fonctions ou des classes. Les modules peuvent se regrouper en package (espace de noms) éventuellement hiérarchique.

   > TL:DR :  identifie une structure de programmation prermettat d’ajouter de nouvelles fonctionnalités

   **Import de module:**  
   Rendre un module accessible à un autre fichier.

   **Commentaire:**  
   Partie de code qui ne s'exécute pas et qui apporte un renseignement pour les autres développeurs, sur le fonctionnement d'une partie du code.

   **Language interprété:**  
   Le code source peut être directement interprété par un programme interpréteur , python,javascrypt...

   **Language Compilé:**  
   Le code source peut être compilé par un programme compilateur en code machine directement exécutable par le processeur , C sera compilé par le compilateur gcc.

   **Language type Bytecode ou code intermédiaire :**  
   Le code source peut être compilé par un programme compilateur en bytecode qui sera interprété ou compilé à la volée par un programme interpréteur , moncode.java compilé par le programme javac en pseudo-code moncode.class interprétable par le programme java.

   **langage de programmation**  
   sert de moyens de communication… :

      * programmeur avec machine

      * programmeur avec d’autre programmeur
  


   **paradigme :**  
   du mot *παράδειγμα* (paradeïgma) en grec ancien qui signifie « modèle » ou « exemple » une représentation du monde, une manière de voir les choses, un modèle cohérent du monde qui repose sur un fondement défini (modèle théorique) il fournit des problèmes types et des solutions.

## 2. Paradigmes

   **Programmation impérative:**
   Décrit les opérations en séquence d’instructions pour modifier l’état du programme • Introduit les concepts de procédures, structures de contrôle, et structures de données.  
   exp : PHP

   **Programmation orientée objet:**
   Consiste à définir et assembler des briques logicielles appelées objets communiquant entre eux par messages (appel de méthode) pour consulter et modifier leur état

   exp :JAVA

   **Programmation déclarative:**  
   https://fr.wikipedia.org/wiki/Programmation_d%C3%A9clarative  
   La programmation déclarative est un paradigme de programmation qui consiste à créer des applications sur la base de composants logiciels indépendants du contexte et ne comportant aucun état interne. Autrement dit, l'appel d'un de ces composants avec les mêmes arguments produit exactement le même résultat, quel que soit le moment et le contexte de l'appel.

   En programmation déclarative, on décrit le quoi, c'est-à-dire le problème. Par exemple, les pages HTML sont déclaratives car elles décrivent ce que contient une page (texte, titres, paragraphes, etc.) et non comment les afficher (positionnement, couleurs, polices de caractères…). Alors qu'en programmation impérative (par exemple, avec le C ou Java), on décrit le comment, c'est-à-dire la structure de contrôle correspondant à la solution.

   C'est une forme de programmation sans effets de bord, ayant généralement une correspondance avec la logique mathématique.  

   **Programmation descriptive:**  
   Décrit des mises en forme **d’objets graphiques**  
   • C’est le moteur de rendu du navigateur qui va interpréter et afficher le résultat
   Exemples : HTML , CSS

   **Programmation fonctionnelle:**  
   Un programme est une **fonction**  
   • Considère le calcul du programme en tant qu’évaluation de fonctions au sens mathématique du terme.  
   • Difficile à aborder pour les programmeurs impératifs, car façon de penser très différente.  
   • Très « tendance », car adopté par les langages récents (fonction lambda entre autres) et adapté aux problématiques exprimables sous forme de flux asynchrones.
   Exemples : Haskell, OCaml, F#.

   **Programmation logique:**  
   • consiste à exprimer les problèmes et les algorithmes sous forme de prédicats, règles.  
   • Utilisé notamment dans le traitement automatique du langage naturel avant le retour des réseaux de neurones artificiels (« deep learning »).  
   Exemples : Prolog.

## 3. Revues webconf, Cours, exercices

* ### 00 - Pour bien démarrer

  *Webconf du 28/02/2020*  

  * Soit le code suivant:

      ```javascript
      var v=5;

      functionf(v, x){
         v=v+1;
         return v+x;
      }

      varz= f(10, 2);
      ```

      Que valent v et z ?

      **V = 5**  
      **Z = 13**  

  * Soit le code suivant en Javascript:

      ```javascript
      function f(v){
      if (v == 0) {
         return 0;
      }
      return v + f(v - 1);
      }
      var r = f(4);
      ```

      Que vaut r ?

      **r = 10**  

  * Soit le code suivant en Javascript :  

      ```javascript
      function f(){
         return 4;
         }

      var x = f;
      var y = f();
      var z = x() + y;
      ```

      **x est une fonction avec la même définition que f**  
      **y = 4**  
      **z = 8**  

  * Lors d’un appel de fonction, les paramètres sont copiés sur quelle mémoire ?
   
      **(1) La pile (stack)**  
      (2) Le tas (heap)

  * Lors d’une allocation dynamique de mémoire, quel type de mémoire est utilisée ?  

      (1) La pile (stack)  
      **(2) Le tas (heap)**

      >Lien en rapport avec ces 2 questions: https://techdifferences.com/difference-between-stack-and-heap.html  
      >Lien complémentaire : https://www.journaldunet.fr/web-tech/developpement/1202909-que-sont-la-pile-stack-et-le-tas-heap/  

  * Quel concept POO est utilisé en combinant des méthodes et des attributs dans une classe ?  

      (1) Polymorphisme  
      **(2) Encapsulation**  
      (3) Abstraction  
      (4) Héritage
   
    **On encapsule des attributs et des méthodes dans une classe**  

  * Quand on parle de membre de classe, on parle de :  

    (1) Uniquement de méthode  
    (2) Uniquement d’attribut (propriété)  
    **(3) Méthode ou attribut**  

  * Quelle garantie nous apporte le principe d’encapsulation ?  

    (1) Il nous garantit uniquement la validité des types des données de nos objets  
    **(2) Il nous garantit la validité des types et des valeurs des données de nos objets**  
    (3) Il nous garantit que l'utilisateur pourra manipuler des objets  

    >**Un objet doit respecter l'interface qu'il promet d'implanter**  

  * Si l’on respecte le principe d’encapsulation, comment procédons-nous pour accéder etmodifier la valeur des attributs de nos objets ?  

    **(1) Nous nous servons d’accesseurs et de mutateurs**  
    (2) Nous créons une classe à part chargée de récupérer et modifier ces valeurs  
    (3) Nous accédons par référence à ces attributs afin de récupérer leurs valeurs et de les modifier depuis l’extérieur de la classe

    >Voir Getter / Setter

  * Quelle est l’utilité d’un constructeur ?  

    (1) Déclarer l’ensemble des caractéristiques et fonctionnalités de l’objet afin de nous en servir  
    (2) Allouer la mémoire nécessaire pour que l’objet créé puisse exister  
    **(3) Effectuer des opérations d’initialisation dès la création de l’objet**

  * Quand on parle de méthode d’instance, on parle de:

    **(1) Une méthode n'agissant que sur un seul objet (instance de la classe) à la fois**  
    (2) Une méthode indépendante de toute instance de la classe.  

    >On créé une instance et c'est uniquement sur cette instance que l'on va agir.

  * Quelle est la différence entre une classe et un objet ?  

    **(1) Une classe est une description comportant un ensemble de caractéristiques et de fonctionnalités dont chaque objet créé à partir de ce modèle héritera.**  
    (2) Un objet est une description comportant un ensemble de caractéristiques et de fonctionnalités dont chaque classe créée à partir de ce modèle héritera.  

    >Penser à la gauffre et au moule à gauffre. La gauffre est l'instance (objet)

  * Quelle est la différence entre un objet et une instance de classe ?  
  
    **Aucune, ce sont des synonymes**  

  * En Java, C#, C++, PHP, ECMAScript 6, quel mot-clé permet de créer une nouvelle instance ?  

    (1)instanceof  
    **(2)new**  
    (3)create  

  * En Java, C#, C++, PHP, quels mots-clés sont utilisés pour spécifier la visibilité des propriétés et des méthodes ?  

    (1)final  
    **(2)private**  
    (3)abstract  
    **(4)protected**  
    **(5)public**  

    > Private : interne à la classe uniquement.  Protected : Accessible uniquement à la classe et ses dérivés (héritage)

  * Quelle visiblité est la moins permissive ?  

    **(1)private**  
    (2)protected  
    (3)public  

    > On accède uniquement à la méthode ou attribut à l'intérieur de la classe uniquement

  * Quel est le principe de l’héritage ?  

    (1) Créer une classe possédant une partie des caractéristiques et fonctionnalités d’une autre classe  
    (2) Créer une classe capable de partager ses fonctionnalités avec une autre classe, et inversement  
    **(3) Créer une classe possédant au moins toutes les caractéristiques et fonctionnalités d’une autreclasse**  

  * Quelle condition nécessaire et suffisante doit-on avoir pour dire qu’une classe B doithériter d’une classe A ?  

    **(1) On doit pouvoir dire : « B est un A »**  
    (2) On doit retrouver des fonctionnalités en commun entre la classe B et la classe A  
    (3) On doit retrouver des caractéristiques en commun entre la classe B et la classe A  

  * En Java, PHP, ECMAScript 6, quel mot-clé permet de procéder à un héritage ?

    (1) herits  
    **(2) extends**  
    (3) childof  

  * En quoi consiste la redéfinition d’une méthode ?

    **(1) Réécrire une méthode déjà implémentée dans la classe mère**  
    (2) Déclarer deux fois la même méthode au sein d’une même classe  
    (3) Empêcher l’héritage d’une méthode au sein d’une classe fille  

    > Override, on pourrait avoir une classe enfant qui hérite d'une classe mère,sert souvent de valeur par défaut et on va override pour les cas particuliers, dans une application par ex on a plein d'animaux qui ont un comportement par défaut mais pour certains qui ne réagissent pas pareil on va redéfinir.

  * Quelle est la différence entre redéfinition de méthode et surcharge d’une méthode ?  

    **Aucune, ce sont des synonymes**  

  * Qu’est-ce qu’une classe abstraite ?  

    **(1) C’est une classe déclarée avec le mot-clé abstract, ne pouvant pas être instanciée et pouvant contenir des méthodes abstraites, donc sans corps de méthode.**  
    (2) C’est une classe ne pouvant pas être héritée.  
    (3) C’est une classe ne pouvant pas avoir de constructeur.  
    (4) C’est une classe du langage Java permettant de créer plusieurs objets en son sein.  

    ```typescript
    abstract class Food{
       abstract showCalories() : void
    }

    class Tomatoes extends Food {
       showCalories(): void {
          console.log(16)
       }
    }

    class Lemon extends Food {
         showCalories(): void {
            console.log(28)
         }
    }
    ```

    >Dès lors que l'on met `extends` il nous faudra obligatoirement une méthode showCalories()

  * Dans quel cas décide-t-on de déclarer une classe abstraite ?  

    (1) Lorsque l’on souhaite empêcher toute classe d’hériter de la dite class  
    **(2) Lorsque l’on souhaite représenter une nature en commun pour plusieurs classes**  
    (3) Lorsque l’on souhaite imposer aux classes enfant de réécrire chacune des méthodes de la classe mère

  * Dans le langage Java, qu’est-ce qu’une interface ?  

    (1) Une fenêtre permettant à l’utilisateur d’interagir avec le programme.  
    (2) Une classe présente dans un package du langage Java servant de base à tous les objets du langage.  
    (3) Une classe abstraite  
    **(4) Une classe 100% abstraite permettant de créer un nouveau super type et jouir du polymorphisme.**  

    > Interface != classe abstraite

    ```java
    public interface Ingestable {
       public void whatHappens();
    }

    abstract class Food {
       abstract void showCalories;
    }

    public class Tomatoes extends Food implements Ingestable {
       void showCalories() {
          System.out.println(16);
       }

       void whatHappens() {
          System.out.println("Hum j'adore quand c'est umami");
       }
    }

    public class Lemon extends Food implements Ingestable {
       void showCalories() {
          System.out.println(28);
       }

       void whatHappens() {
          System.out.println("Frissons dans le dos");
       }
    }

    public class poison implements Ingestable {
       void whatHappens() {
          System.out.println("Ouuuups...");
       }
    }
    ```

    > Un chien et un chat hérite de Animals, mais pas une voiture. Cependant, une voiture, un chat et un chien peuvent tous `bouger()`dans ce cas la on choisira une interface. On va pouvoir lier via l'interface des comportements similaires.

  * Une classe peut être héritée par combien de classes filles ?

    (1) Qu’une seule  
    (2) Ça dépend des langages  
    **(3) Une infinité**  

    >Un aliment peut être hérité d'une infinité de classe fille

  * De combien de classes une classe fille peut-elle hériter ?  

    (1) Qu’une seule  
    **(2) Ça dépend des langages**  

    >Certains langages autorisent l'héritage multiple (Python par ex), java ne l'autorise pas.

* ### 01 - Découverte de Git et Github / Aperçu de Typescript

  *Webconf du 13/03/2020*  
  
  *@todo : Voir si il est pertinent d'approfondir cette webconf*

* ### 02 - Paradigme de programmation impérative

  *Webconf du 03/04/2020*  

  * 5 points à retenir :

    **Notion de séquence d'instructions.**

    ```javascript
    var nbOranges = 4;

    for(i = 0; i < nbOranges; ++i) {
         couperOrange();
         presserOrange();
         }
    ```
    Une séquence d'instruction c'est une "suite" d'instruction, ici on assigne une valeur à une variable `nbOranges` et on fait une boucle sur ce nombre d'orange avec des instructions. C'est cette suite d'instruction qui fera notre programme.

    **Notion d'assignation.**

    On peut assigner à notre boîte id plusieurs formes d'expressions. 

    ```javascript
    var id = "exp";
    // Ou encore
    var id = exp / 10 * 10;
    // Ou encore
    var id = exp();
    ```

    La boite est notre identifiant et on est capable d'assigner une expression a cette id sous plusieurs forme :
    * une chaine de caractère 
    * un calcul
    * une fonction

    On peut assigner toute sorte de chose à notre identifiant.

    **! Attention de pas confondre :**

    ```javascript
    var id = "exp"
    ```

    >une boite id qui stocke "exp" (une chaine de catactère)  

    avec
    ```javascript
    id == "exp"

    //true
    ```

    >Ici on teste l'égalité du contenu id avec la valeur "exp"

    **Instruction conditionnelle**

    ```javascript
    var (jaiFaim) {
       return "miam, je mange";
    } else {
       return "je mange quand même";
    }
    ```

    Exemple en JS, notre if va essayer de savoir si la condition est respectée et va retourner une valeur selon.

    Exercice if / else:

    ```javascript
         function fizzBuzz(number) {
      if (number % 3 == 0 && number % 5 == 0) {
         return "FizzBuzz";
      }

      if (number % 3 == 0) {
         return "Fizz";
      }

      if (number % 5 == 0) {
         return "Buzz";
      }

      return number;
      }

      console.log(fizzBuzz(15));
      console.log(fizzBuzz(10));
      console.log(fizzBuzz(9));
    ```

    >Rappel modulo donne le reste de la division euclidienne 6 % 3 =0 ; 9 % 7 = 2

    **boucle**

    | ind 0 | ind 1 | ind 2 | ind 3 | ind 4 | ind 5 |
    | :---: | ----- | ----- | ----- | ----- | ----- |
    |   8   | 5     | -1    | 5     | 4     | 3     |

    >! le premier indice d'un tableau commence à l'indice 0.  

    ```javascript
    var tableau = [1, 2, 3] // ex initialisation tableau en javascript
    ```

    Si l'on souhaite récupérer la valeur :  

    ```javascript
    tableau[indice]
    ```

    Pour boucler dans un tableau et afficher toutes les valeurs :
    ```javascript
    for(i = 0; i < jeSuisUnTableau.length - 1; ++i) {
       console.log(jeSuisUnTableau[i]); // instruction qui sera réalisée à chaque passage (boucle)
       }
    ```

    Ex: la boucle for, en 3 parties on l'initialisation `i=0`, la condition de sortie `i < jeSuisUnTableau.length - 1`, et le "pas" de l'itération à chaque passage : `++i` .  
    "tant que i est inférieur a (6-1) (5), on fait ++i a chaque boucle.  

    `++i` ou `i++` ?

    ```javascript
    var i = 42;
    var plop = i++
    console.log(plop); // 42
    ```

    plop va prendre la valeur de `i`, 42, puis `i` sera incrémenté **après** l'affectation à plop

    ```javascript
    var i = 42;
    var plop = ++i;
    console.log(plop); //43
    ```
    Ici plop aura la valeur 43 car l'incrémentation de `i` sera faite avant l'affectation à plop.

    



    

timecode : 41:25

