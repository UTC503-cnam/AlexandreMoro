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