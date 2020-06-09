let numbers = [100, 34, 5, 67, 72];

// Cette interface, couplée aux définitions des prototypes
// ci-dessous permettent d'ajouter les méthodes min et max
// à un tableau.
interface Array<T> {
    min(): T;
    max(): T;
}

Array.prototype.min = function<T>(){
    // Notre fonction récursive est compute_min.
    // J'ai choisi d'utiliser un index pour parcourir récursivement le tableau :
    // min = Math.min(arr[i], compute_min(arr)(i + 1)
    let compute_min = arr => i => arr.length == 0?null:arr.length==1?arr[0]:i==arr.length - 1?arr[i]:Math.min(arr[i], compute_min(arr)(i + 1));
    return compute_min(this)(0);
    // On aurait pu choisir d'utiliser slice, plus élégant mais plus couteux, car effectue N copie du tableau :
    // min = Math.min(arr[i], arr.slice(1).min())
}

Array.prototype.max = function<T>(){
    let compute_max = arr => i => arr.length == 0?null:arr.length==1?arr[0]:i==arr.length - 1?arr[i]:Math.max(arr[i], compute_max(arr)(i + 1));
    return compute_max(this)(0);
}


let minimum = numbers.min();
let maximum = numbers.max();

console.log(`Min is ${minimum}, max is ${maximum}`);