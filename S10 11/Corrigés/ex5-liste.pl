conc([], L2, L2).
conc([X|Q], L2, [X|R3]) :- conc(Q, L2, R3).

/* X est dernier élément de la liste [1, 2, 3] */
conc(_, [X], [1, 2, 3]).

/* X est premier élément de la liste [1, 2, 3] */
conc([X], _, [1, 2, 3]).

/* X est le 2eme éléments de la liste [1, 2, 3] */ 
conc([_, X|_], _, [1, 2, 3]).