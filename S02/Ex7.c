#include <stdio.h>
#include <math.h>

#define N 5

int multiply (int valeur, int coef ){
    return valeur * coef;
}

int power ( int valeur, int exp ) {

    double result = pow((double)valeur,(double)exp);
    return (int) result;

}

int cap (int valeur, int cap) {
    if (valeur > cap) {
        return valeur = cap;
    } else {
        return valeur ;
    }
}

void operation ( int inpuTable[], int outputTable[], int (*ptr)(), int option ){

    
    for (int i = 0; i < N; i++ ){
        outputTable[i] = ptr(inpuTable[i], option);
       
    }

}

int main( int argc, char *argv[] ) {

    int e[N] = {1,5,2,4,3};

    int eDouble[N];
    operation(e,eDouble,multiply,2);

    int etriple[N];
    operation(e,etriple,multiply,3);

    int ePow2[N] = {};
    operation(e,ePow2,power,2);

    int eCap[N];
    operation(e,eCap,cap,3);

    return 0;


}