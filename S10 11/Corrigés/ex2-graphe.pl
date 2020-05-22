arc(aa, bb).
arc(aa, cc).
arc(cc, dd).
arc(bb, ee).
arc(bb, dd).
arc(ee, dd).
arc(ee, ff).
arc(dd, ff).

chemin(D, A, []) :- arc(D, A).
chemin(D, A, [X|Q]) :- arc(D, X), chemin(X, A, Q).

/* chemins menant à ff */
chemin(X, ff, L).

/* chemins partant de aa */
chemin(aa, X, L).

/* tous les chemins possibles */
chemin(X, Y, L).

/* les chemins dont dd est exactement le 2ème point intermédiaire */
chemin(X, Y, [P, dd | Q]).