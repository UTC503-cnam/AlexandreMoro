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

printf(" La factorielle de %d est égale à %d\n", n, factorielle);

}