interface Iterateur<T>{
    aUnSuivant(): boolean;
    suivant(): T;
}

class Fibonacci {
    // fibonacci(n) = fibonnacci(n-1) + fibonnacci(n-2)
}

// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
f = new Fibonacci(10); // (**)
while(f.aUnSuivant()){
    console.log(`${f.suivant()},`);
}

// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton
