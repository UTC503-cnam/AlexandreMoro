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