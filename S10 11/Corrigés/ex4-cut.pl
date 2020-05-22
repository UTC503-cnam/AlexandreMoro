/* L'ajout du coupe-choix (cut) "!" permet d'arrêter la recherche 
dès que l'élément est trouvé */
 
membre(X, [X|_]) :- write("trouvé"), nl, !.
membre(X, [_|Q]) :- write("continue"), nl, membre(X, Q).

