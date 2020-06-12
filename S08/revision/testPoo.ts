import { extend, stringToToken } from "ntypescript";

export abstract class Jeux {
  private __nom: string;
  protected _editeur: string;
  protected _nbreDeJoueur: number;

  constructor(nom: string, editeur: string, nbreDejoueur: number) {
    this.__nom = nom;
    this._editeur = editeur;
    this._nbreDeJoueur = nbreDejoueur;
  }

  get nom() {
    return this.__nom;
  }

  get editeur() {
    return this._editeur;
  }

  get nbreDejoueur() {
    return this._nbreDeJoueur;
  }

  protected abstract aGagne(): boolean;
}

export class VideoGame extends Jeux {
  private aTueBoss: boolean;

  constructor(nom: string, editeur: string, nbreDejoueur: number) {
    super(nom, editeur, nbreDejoueur);
    this.aTueBoss = false;
  }

  aGagne(): boolean {
    return this.aTueBoss;
  }
}

export class BoardGame extends Jeux {
  private aLeplusDePoint: boolean;

  constructor(nom: string, editeur: string, nbreDejoueur: number) {
    super(nom, editeur, nbreDejoueur);
    this.aLeplusDePoint = false;
  }

  aGagne(): boolean {
    return this.aLeplusDePoint;
  }
}
