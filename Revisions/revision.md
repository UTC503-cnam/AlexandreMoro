# Revision UTC503 Covid edition

## 1. Définitions générales:

---

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

---

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

## 3. Revue des chapitres  

* ### 00 - Pour bien démarrer

   Webconf du 28/02/2020  

   Soit le code suivant:

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
