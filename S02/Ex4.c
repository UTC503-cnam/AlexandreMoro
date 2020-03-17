#include <stdio.h>

int factorielle(int n){
	
    while (n > 1) {
        return n * factorielle( n - 1 );
    }
}

int main(){
	int n = 5;
    int x = factorielle(n); // pour debug mais inutile autrement
	printf(" la factorielle (en récursif) de %d est égale à %d\n ", n, x);
}

