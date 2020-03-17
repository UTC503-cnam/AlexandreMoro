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