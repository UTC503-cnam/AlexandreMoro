#include <stdio.h>

int main(){
	
	int n = 5;
	int factorielle = n;
    int boucle = n;

    while ( boucle > 1)
    {
        factorielle = factorielle * (boucle - 1);
        boucle--;
    }
    
	printf("La factorielle de %d est égale à %d\n", n, factorielle);
}