    
/* facts from the family tree of the Stark family. */
/* parent(X, Y) is true when X is the parent of Y. */
parent(rickard_stark,		edwyle_stark).
parent(brandon_stark_snr,	rickard_stark).
parent(ned_stark,		rickard_stark).		/* ned = eddard */ 
parent(benjen_stark,		rickard_stark).
parent(lyanna_stark,		rickard_stark).
parent(jon_snow,		ned_stark).
parent(rob_stark,		ned_stark).
parent(sansa_stark,		ned_stark).
parent(arya_stark,		ned_stark).
parent(bran_stark,		ned_stark).		/* bran = brandon jnr */ 
parent(rickon_stark,		ned_stark).		
parent(rob_stark,		catelyn_tully).
parent(sansa_stark,		catelyn_tully).
parent(arya_stark,		catelyn_tully).
parent(bran_stark,		catelyn_tully).
parent(rickon_stark,		catelyn_tully).

/* facts from the family tree of the Lannister family */
parent(tywin_lannister,		tytos_lannister).
parent(kevan_lannister,		tytos_lannister).
parent(tygett_lannister,	tytos_lannister).
parent(gerion_lannister,	tytos_lannister).
parent(genna_lannister,		tytos_lannister).
parent(cersei_lannister,	tywin_lannister).
parent(jaime_lannister,		tywin_lannister).
parent(tyrion_lannister,	tywin_lannister).
parent(cersei_lannister,	joanna_lannister).
parent(jaime_lannister,		joanna_lannister).
parent(tyrion_lannister,	joanna_lannister).
parent(joffrey_baratheon,	cersei_lannister).
parent(myrcella_baratheon,	cersei_lannister).
parent(tommen_baratheon,	cersei_lannister).
parent(joffrey_baratheon,	robert_baratheon).
parent(myrcella_baratheon,	robert_baratheon).
parent(tommen_baratheon,	robert_baratheon).
parent(lancel_lannister,	kevan_lannister).
parent(willem_lannister,	kevan_lannister).
parent(martyn_lannister,	kevan_lannister).
parent(janei_lannister,		kevan_lannister).
parent(lancel_lannister,	dorna_swift).
parent(willem_lannister,	dorna_swift).
parent(martyn_lannister,	dorna_swift).
parent(janei_lannister,		dorna_swift).
parent(tyrek_lannister,		tygett_lannister).
parent(tyrek_lannister,		darlessa_marbrand).
parent(joy_hill,		gerion_lannister).
parent(cleos_frey,		genna_lannister).
parent(lyonel_frey,		genna_lannister).
parent(tion_frey,		genna_lannister).
parent(red_walder_frey,		genna_lannister).
parent(cleos_frey,		emmon_frey).
parent(lyonel_frey,		emmon_frey).
parent(tion_frey,		emmon_frey).
parent(red_walder_frey,		emmon_frey).
parent(tywin_frey,		cleos_frey).
parent(willem_frey,		cleos_frey).
parent(tywin_frey,		jeyne_darry).
parent(willem_frey,		jeyne_darry).

/* females among Stark family */
female(lyanna_stark).
female(catelyn_tully).
female(sansa_stark).
female(arya_stark).

/* females among Lannister family */
female(joanna_lannister).
female(gerion_lannister).
female(genna_lannister).
female(cersei_lannister).
female(myrcella_baratheon).
female(dorna_swift).
female(janei_lannister).
female(darlessa_marbrand).
female(joy_hill).
female(jeyne_darry).

/* males among Stark family */
male(edwyle_stark).
male(rickard_stark).
male(brandon_stark_snr).
male(ned_stark).
male(benjen_stark).
male(jon_snow).
male(rob_stark).
male(bran_stark).
male(rickon_stark).

/* males among Lannister family */
male(tytos_lannister).
male(tywin_lannister).
male(kevan_lannister).
male(tygett_lannister).
male(jaime_lannister).
male(robert_baratheon).
male(tyrion_lannister).
male(joffrey_baratheon).
male(tommen_baratheon).
male(lancel_lannister).
male(willem_lannister).
male(martyn_lannister).
male(tyrek_lannister).
male(emmon_frey).
male(cleos_frey).
male(lyonel_frey).
male(tion_frey).
male(red_walder_frey).
male(tywin_frey).
male(willem_frey).

