//TODO ----------------------------------------------
//TODO ------- CLASSES-----
//TODO ----------------------------------------------

//TODO ------- JOUEUR -----
export class Joueur {

    constructor(nom) {

        this.nom = nom
        this.argent = 0
        this.classe = 'vide'
        this.spe = 'vide'
        this.personnage = 'vide'
        this.vitesse = 1
        this.visible = true
        this.etat = ""
    }
}

//TODO ------- OBJET -----
export class Objet {
    constructor(nom, prix, img, type, description, effet, createur, qualite, metal, bio) {
        this.nom = nom;
        this.prix = prix;
        this.effet = effet
        this.img = img
        this.type = type
        this.description = description
        this.createur = createur
        this.qualite = qualite
        this.metal = metal;
        this.bio = bio

    }
}
//TODO ------- ETATS -----

export class Etats {
    constructor() { }
    stun(joueur) { joueur.vitesse = 0; }
    ralenti(joueur) { }
    empoisoner(joueur) { }
    invisible(joueur) { }
    grandir(joueur) { joueur.setScale(2, 2); }
    enleveretat(joueur) {
        joueur.etat = ""
    }


}