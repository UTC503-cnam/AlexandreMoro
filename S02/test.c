#include <stdio.h>
#define N 5


void main() {

    int e[N] = {1,5,2,4,3};
    int byteSize = sizeof(e);
    int intSize = sizeof(int);
    int size = sizeof(e)/sizeof(int);

    printf( "%d %d" , size, byteSize );

}

