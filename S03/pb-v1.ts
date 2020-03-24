// Retourne x si non nuln defaut sinon.
// x et défaut sont des nombres

function defautSiNul(x : number, defaut: number) : number {
    if (x == null)
    return defaut;
    else
    return x;
}

