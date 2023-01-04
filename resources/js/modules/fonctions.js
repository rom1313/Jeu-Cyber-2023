//TODO ----------------------------------------------
//TODO ------- IMPORTS ET DECLARATION -----
//TODO ----------------------------------------------
export const prenom = "romain5"
const genius = $

/* export function argent() {
    let image = document.querySelector("#image")
    image.src = "img/Map%20test2.png"
    console.log(image.src);
    console.log(joueur);
} */

export function modifierargent(joueur, montant) {
    joueur.argent += montant
    console.log(joueur);
    document.querySelector("#argentjoueur").textContent = joueur.argent

}


export function modifieretat(joueur) {


}


export function affichermessagesysteme(joueur, montant) {
    joueur.argent += montant
    console.log(joueur);
    document.querySelector("#argentjoueur").textContent = joueur.argent

}
export function affichermessagedialogue(joueur, montant) {
    joueur.argent += montant
    console.log(joueur);
    document.querySelector("#argentjoueur").textContent = joueur.argent

}


export function fonctionmajtexteinfocombat(variabledutexte) {
    genius.timeursecondes(2,()=>{
        variabledutexte.text = ""
    })
    console.log(variabledutexte);
}
