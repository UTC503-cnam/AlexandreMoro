gen(X, M) :- between_(0, M, X).
/* between_(I,J,K) is true if K is an integer between I and J inclusive. */
between_(I,J,I) :- I =< J.
between_(I,J,K) :- I < J, I1 is I+1, between_(I1,J,K).

/* Trouve les combinaisons de A et B telles que X = A * B. */
combi_mult(X, A, B) :- gen(A, X), gen(B, X), X is A*B.