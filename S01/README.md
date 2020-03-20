## Séance 01
### UTC503 Exercices

***
[Page notion.so](https://www.notion.so/alexandremoro/01-Introduction-1f4417afe6b247ce97443d999acb51be)

### Familiarisez-vous avec les notions suivantes :
---
**Instruction:**

>Une instruction informatique désigne une étape dans un programme informatique. Une instruction dicte à l'ordinateur l'action nécessaire qu'il doit effectuer avant de passer à l'instruction suivante. Un programme informatique est constitué d'une suite d'instructions.  

**Mot clé:**

> Un mot-clé est un nom ayant une signification spéciale, et qui ne peut pas être utilisé comme identificateur de classe, de méthode ou de variable.

**Variable :**

http://pise.info/algo/variables.htm

> Dans un programme informatique, on va avoir en permanence besoin de stocker provisoirement des valeurs. Il peut s’agir de données issues du disque dur, fournies par l’utilisateur (frappées au clavier), ou que sais-je encore. Il peut aussi s’agir de résultats obtenus par le programme, intermédiaires ou définitifs. Ces données peuvent être de plusieurs types (on en reparlera) : elles peuvent être des nombres, du texte, etc. Toujours est-il que dès que l’on a besoin de stocker une information au cours d’un programme, on utilise une variable.
Pour employer une image, une variable est une boîte, que le programme (l’ordinateur) va repérer par une étiquette. Pour avoir accès au contenu de la boîte, il suffit de la désigner par son étiquette.

**Constante :**

> une constante est un identificateur associé à une valeur fixe. Syntactiquement, cet identificateur a tous les aspects d'une variable. Cependant, il n'est possible de lui affecter une valeur qu'une seule fois, généralement au moment du lancement du programme.

**identifiant:**

https://fr.wikipedia.org/wiki/Identificateur

> un identificateur ou identifiant est un mot choisi par le programmeur et qui, tel une étiquette, désigne une donnée du programme : variable, constante, procédure, type, etc. Un identifiant et sa valeur forment une sorte de symbole, comparables à ceux des mathématiques, à la différence qu'en programmation courante la valeur peut changer au cours du temps.

**Type:**

https://fr.wikipedia.org/wiki/Type_(informatique)

>un type de donnée, ou simplement un type, définit la nature des valeurs que peut prendre une donnée, ainsi que les opérateurs qui peuvent lui être appliqués.

**structure de données:**

https://fr.wikipedia.org/wiki/Structure_de_donn%C3%A9es

>Une structure de données est une manière d'organiser les données pour les traiter plus facilement. Une structure de données est une mise en œuvre concrète d'un type abstrait.

**tableaux:**

>Un tableau est une structure de données représentant une séquence finie d'éléments auxquels on peut accéder efficacement par leur position, ou indice, dans la séquence. C'est un type de conteneur que l'on retrouve dans un grand nombre de langages de programmation.

*Dans les langages à typage statique (comme C, Java et OCaml), tous les éléments d’un tableau doivent être du même type. Certains langages à typage dynamique (tels APL et Python) permettent des tableaux hétérogènes.*

**structures de contrôle :**

http://python-liesse.enseeiht.fr/cours/structures_controle.html

>Les structures de contrôle décrivent l’enchaînement des instructions. Elles permettent des traitements séquentiels, conditionnels ou répétitifs (itératifs).

**exception:**

https://fr.wikibooks.org/wiki/Programmation_C%2B%2B/Les_exceptions

>Une exception est l'interruption de l'exécution du programme à la suite d'un événement particulier. Le but des exceptions est de réaliser des traitements spécifiques aux événements qui en sont la cause. Ces traitements peuvent rétablir le programme dans son mode de fonctionnement normal, auquel cas son exécution reprend. Il se peut aussi que le programme se termine, si aucun traitement n'est approprié.

**module:**  

http://dictionnaire.sensagent.leparisien.fr/Module%20(programmation)/fr-fr/

>Un module désigne originellement un fichier de code de programmation ou un fichier de librairie statique ou dynamique.
Pour reprendre l'image de la programmation objet, un module est une instance unique qui n'utilise pas d'héritage et ne contient aucun module fils. Chaque module peut exporter ou importer certains symboles comme des variables, des fonctions ou des classes. Les modules peuvent se regrouper en package (espace de noms) éventuellement hiérarchique.

**import de module:**

http://www.xavierdupre.fr/app/teachpyx/helpsphinx/c_module/module.html

>Il est souvent préférable de répartir le code d’un grand programme sur plusieurs fichiers. Parmi tous ces fichiers, un seul est considéré comme fichier principal, il contient son point d’entrée, les premières instructions exécutées. Les autres fichiers sont considérés comme des modules, en quelque sorte, des annexes qui contiennent tout ce dont le fichier principal a besoin.

**commentaire:**

>Les commentaires sont, en programmation informatique, des portions du code source ignorées par le compilateur ou l’interpréteur, car destinées en général à un lecteur humain et non censées influencer l’exécution du programme.  
Les commentaires sont le plus souvent utilisés pour expliquer le code ; certains outils, appelés générateurs de documentation, permettent d’extraire l’information disponible dans les commentaires pour créer automatiquement une documentation du programme.
On utilise parfois une mise en commentaires pour court-circuiter quelque temps une section de code, mais aussi pour préciser des contraintes ou des propriétés, notamment des préconditions, des postconditions et des invariants comme cela se fait dans la programmation par contrat.

### Quelles différences faites-vous entre définition et déclaration ?

http://public.iutenligne.net/informatique/algorithme-et-programmation/priou/LangageC/93_premier_avertissement__dclaration__dfinition_de_fonction.html

>Déclarer une fonction, sous la forme d'un prototype : c'est la traduction en Langage C du dessin du bloc fonctionnel. Ce mode d'emploi de la fonction est destiné au programmeur humain et au compilateur.

* Exemple
```C
double calculer_delta(double a,double b,double c);
```
>Définir une fonction : beaucoup plus complète que la déclaration qu'elle reprend dans sa ligne d'en‐tête, la définition donne la suite des instructions qui composent la fonction, c'est‐à‐dire le code interne de la fonction.

```C
double = calculer_dela( double a, double b, double c ) {
    return ( b*b - 4.*a*c ) ;
}
```
https://fr.wikipedia.org/wiki/D%C3%A9claration_(informatique)

En programmation informatique, la déclaration permet d'indiquer au compilateur l'existence d'une entité informatique (variable, routine, etc.) , en spécifiant:  

* Son identifiant
* Son type de données (dans le cas d'un langage typé)
* Les paramètres (Identifiant et Type)

>Avec certains langages de programmation, notamment le langage C/C++, il est nécessaire de déclarer les entités informatiques avant de pouvoir les utiliser.

Il faut bien différencier la déclaration et la définition. Alors que la déclaration ne fait qu'indiquer l'existence d'une entité informatique sans la créer, la définition l'instancie, c'est-à-dire qu'elle la crée. Par exemple, l'implémentation d'une routine est sa définition.

### Quelles différences faites-vous entre procédures, fonctions, méthodes ?
---
**Procédures :**

>Une procédure est un bout de code qui a un nom et qui peut être appelé depuis le reste du programme. En java, une procédure est forcément déclarée dans une classe. Dans sa forme la plus simple, elles’exprime ainsi:

```Java
public static voidnomDeLaProcédure() {
// Corps de la procédure...}
}
```

**Fonctions :**

Une fonction ressemble à une procédure, mais sa pour tâche est de renvoyer une valeur, qui sera utilisée par la suite. L’exemple le plus immédiat, ce sont les fonctions mathématiques. La fonction cos, de la classe Math, calcule ainsi le cosinus de son argument. On l’utilise de la manière suivante :

```Java
double x= 3;double y= Math.cos(x/2);
```
> ! La grande différence entre procédures et fonctions est doncque ces dernières renvoient quelquechose.

**Méthodes :**

En programmation orientée objet (POO), une **méthode** est une **routine membre d'une classe**.

Une méthode peut être:

* Une méthode d'instance n'agissant que sur un seul objet (instance de classe) à la fois.
* Une méthode statique ou méthode de classe, indépendante de toute instance de classe.

En programmation orientée objet, on utilise parfois le terme spécifique d'invocation de méthode pour désigner l'appel d'une telle fonction d'une classe.  

### Indiquer pour chacun des langages suivants les paradigmes utilisés :
---

* Assembleur  
    Impératif
* Logo  
    Orienté objet
    >Note: Je ne me souviens pas avoir fait d'objet sur MO5/TO7 :D
* CSS  
    Ce n'est pas un langage (???)

### Sans modifier sa grammaire, comment peut-on intégrer un pradigme à un langage ?
---
>On peut tout a fait rajouter un paradigme à un langage, il nous faudra alors utiliser la grammaire à notre disposition pour créer les modules, fonctions et méthodes nécessaires à son utilisation.

[Exemple : gestion des objets en C](https://www.codementor.io/@michaelsafyan/object-oriented-programming-in-c-du1081gw2)

### Préparer votre environnement pour TypeScript
---

>La procédure ci-dessous sera faite pour visual studio code sous linux (popOS!, un dérivé d'ubuntu)

https://code.visualstudio.com/docs/languages/typescript

*installation de node.js*

```Bash
sudo apt-get install nodejs
```
Visual Studio inclus de base le support du langage TypeScript mais le compilateur **tsc**. Il va falloir installer ce dernier, soit de manière globale sur le système ou dans le *workspace* (espace de travail de visual studio).  
La manière la plus simple d'installer TypeScript est de passer par npm, le **N**ode.js **P**ackage **M**anager.

```Bash
sudo apt-get install npm
```

Une fois npm installé, nous pouvons installer npm de manière globale avec le paramètre -g .

```Bash
sudo npm install -g typescript
```
La commande ```tsc --version``` renvoi la version installée sur le système
```Bash
alexandremoro@alex-pop-os:~/Cnam$ tsc --version
Version 3.8.3
```
Une autre solution est d'installer le compilateur TypeScript localement dans le projet  ```npm install --save-dev typescript``` afin de ne pas interférer avec d'autres projets TypeScript.  

![Screenshot](https://i.imgur.com/5dfWfBg.png)

### Allez sur le **Coding Ground** de tutorialpoint.com https://www.tutorialspoint.com/codingground.htm. Essayer le "Hello World" en Scheme, Prolog, SmallTalk et autres langages.

---

* Scheme
```Scheme
(display "Hello World")
(newline)
```
>$gosh main.sc  
Hello World

* Prolog  
```prolog
:- initialization(main).
main :- write('Hello World!').
```
>$gprolog --consult-file main.pg
GNU Prolog 1.4.4 (64 bits)
Compiled Feb 10 2017, 19:52:45 with gcc
By Daniel Diaz
Copyright (C) 1999-2013 Daniel Diaz
compiling /home/cg/root/3884193/main.pg for byte code...
/home/cg/root/3884193/main.pg compiled, 2 lines read - 299 bytes written, 7 ms
Hello World!| ?- 

* Smalltalk  
```Smalltalk
Transcript show: 'Hello, world!'.
```
>$gst main.gst  
Hello, world!

![](https://choualbox.com/Img/138183061693.jpg)

* Python 3
  
```Python
print ("Hello World!")
```
>$python3 main.py  
Hello World!

* java
```Java
public class HelloWorld{

     public static void main(String []args){
        System.out.println("Hello World");
     }
}
```
>**\$javac HelloWorld.java  
$java -Xmx128M -Xms16M HelloWorld**  
Hello World

* C#
```C#
using System.IO;
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}
```
>**\$mcs \*.cs -out:  
main.exe  
\$mono main.exe**  
Hello, World!
