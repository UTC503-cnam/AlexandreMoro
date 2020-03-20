## Séance 02
### UTC503 Exercices

> Todo Ex8


# Exercice 1

>Sachant qu'une instruction de bouclage peut être vue comme la combinaison d'une instruction de branchement\
>conditionnel et d'une instruction de saut, codez l'algorithme suivant sans instruction de bouclage, mais en utilisant goto et if/else :

```C
#include <stdio.h>

int main(void) {
    
    int n = 5;
    int factorielle = n;
    int saut = n;

boucle:

    if ( saut > 1 ) {
        
        factorielle = factorielle * (saut - 1);
        saut--;
        
        goto boucle;

    }

fin:

printf(" La factorielle de %d est égale à %d\n", n, factorielle);

}
```
# Exercice 2

>Codez la factorielle avec une instruction de bouclage :

```C
#include <stdio.h>

int main(){
	// factorielle de N = N * (N - 1) * (N - 2) * ( N - i) * ... 1
	int n = 5;
	int factorielle = n;
    int boucle = n;
	// Codez ici

    while ( boucle > 1)
    {
        factorielle = factorielle * (boucle - 1);
        boucle--;
    }
    
	printf("La factorielle de %d est égale à %d\n", n, factorielle);
}
```
# Exercice 3

>Codez la factorielle avec une fonction contenant une instruction de bouclage :

```C
int factorielle(int n) {

    int resultat = n;

	while (n > 1)
    {
       resultat = resultat * (n -1);
       n--;
    }

    return resultat;
    
}
int main() {
	int n = 5;
    factorielle(n);
	printf(" La factorielle de %d est égale à %d\n", n, factorielle(n));
}
```
# Exercice 4

>Codez la factorielle avec une fonction récursive (sans instruction de bouclage)

```C
#include <stdio.h>

int factorielle(int n){
	
    while (n > 1) {
        return n * factorielle( n - 1 );
    }
}

int main(){
	int n = 5;
    int x = factorielle(n); // pour visu debug mais inutile autrement l'appel peut se faire dans la fonction printf
	printf(" la factorielle (en récursif) de %d est égale à %d\n ", n, x);
}

```

# Exercice 5

>Limite de la récursivité\
>Quelle limite identifiez-vous aux appels récursifs ?\
>Indice : un site très populaire chez les codeurs porte son nom.\

![](https://ispeakcode.com/blog/wp-content/uploads/2018/07/stackoverflow-1.png)
```
Nous risquons une surchage de la pile (stack overflow), si trop d'appels sont effectués\
il y aura saturation de l'espace alloué.
```

# Exercice 6

>Pour chaque valeur d'un tableau d'entrée, map consiste à calculer une autre valeur selon un algorithme et à la \
>stocker à la même position dans un tableau résultat. Complétez les 4 fonction mapX.

```C
#include <stdio.h>

#define N 5 //constante de préprocesseur

//Cette directive permet de définir une constante de préprocesseur. 
//Cela permet d'associer une valeur à un mot. Voici un exemple :

	//void mapDouble(int e[], int r[]){

	//Aide : lire la ième case du tableau e : e[i]
	//Aide : affecter la ième case du tableau r : r : r[i] = valeur;
	//Aide : le tableau est accessible de 0 à N - 1, ie de e[O] à e[4] en l'occurence
	//Codez les 3 lignes ici 

void mapDouble (int e[], int r[] ){

	for(int i = 0; i < N ; i++) {
        r[i] = e[i]*2;
    }
	
}

void mapTriple (int e[], int r[] ){
	
	for(int i = 0; i < N ; i++) {
		r[i] = e[i]*3;
	}

}

void mapSquare( int e[], int r[] ){
	
	for (int i = 0; i < N ; i++) {
		r[i] = e[i]*e[i];
	}

}

void mapMaximize3(int e[], int r[] ){
	for (int i = 0; i < N ; i++ ) {
		if (e[i] > 3) {
			r[i] = 3;
		} 
		else
		{
			r[i] = e[i];
		}
	}
}

int main() {

	int e[N] = {1, 5, 2, 4, 3};
	
	int r_double[N];

	mapDouble(e, r_double); // r_double contiendra {2, 10, 4, 8, 6}
	
	int r_triple[N];

	mapTriple(e, r_triple); // r_triple contiendra {3, 15, 6, 12, 9}
    
	int r_square[N];

    mapSquare(e, r_square); //r_square contiendra {1, 25, 4, 16, 9}
	
	int r_maximize3[N];

	mapMaximize3(e, r_maximize3); // r_maximize3 contiendra {1, 3, 2, 3, 3} 
}
```

# Exercice 7

> Dans ex6, d'une fonction à l'autre, n'avez-vous pas éprouvé une sensation de "déjà-vue" ?\
> Peut-on factoriser ce code ?\
> Quel mécanisme nous faudrait-il ?

```
Passer une fonction en paramètre nous permettrait de n'avoir qu'une boucle for. (??)
```

*Essai en TypeScript*

```TypeScript

function multiply(e: number, m:number) {
    return e * m;
}
 
function power(e: number, p: number) {
    return Math.pow(e, p);
}

function cap(e: number, cap: number) {
    if (e > 3) {
       return e = cap;
    } else {
        return e;
    }
}
        
function operation(inputTable: number[], outputTable: number[], func: Function, option: number) {
    
    for (let i in inputTable) {
      outputTable[i] = func(inputTable[i], option);
    }
    return outputTable;
}

let table2:number[] = new Array(1, 5, 2, 4, 3);

let tableDouble2:number[] = new Array();
operation(table2, tableDouble2, multiply, 2);

let tableTriple2:number[] = new Array();
operation(table2, tableTriple2, multiply, 3);

let tableSquare2: number[] = new Array();
operation(table2, tableSquare2, power, 2);

let tableCap3: number[] = new Array();
operation(table2, tableCap3, cap, 3);

```

> Alors je débute en programmation :D donc Je pense (naïvement surement) que procéder de cette manière permet de \
> Rajouter des fonctions sans passer par un switch/case qui demanderait de modifier 2 parties et serait de plus\
> en plus lent au fil des rajouts.

# Exercice 8

**A FAIRE**

# Exercice 9

> Pour le fun \
> Sur https://www.calormen.com/jslogo/ , tracez 5 étoiles alignées avec un minimum d'instruction.

```
make "pos 0
to star
repeat 5 [ rt 18 fd 50 rt 144 fd 50 lt 90]
penup
make "pos :pos+150
setxy :pos 0
pendown
END
repeat 5 [ star ]
```
> En sortie :  

![Général des armées](https://tof.cx/images/2020/03/20/a1e97e579d93601538638c9f65c8e2e1.png)

![Je suis ton père](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Thomson_MO5-IMG_1732.jpg/800px-Thomson_MO5-IMG_1732.jpg)


