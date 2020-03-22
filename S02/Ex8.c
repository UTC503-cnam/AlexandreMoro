//code 1

dessineTriangle( int x, int y, bool gras ) {
	positionneCrayon(x, y);
	traceTriangle();
	if (gras) {
		positionneCrayon(x, y);
		pause(5);
		traceTriangle();			
	}
}

dessineEtoile(int x, int y, bool gras, int nbBranche){
	positionneCrayon(x, y);
	traceEtoile(nbBranche);
	if (gras){
		positionneCrayon(x, y);
		pause(5);
		traceEtoile(nbBranche);
	}
}

// 