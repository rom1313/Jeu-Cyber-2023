//TODO ----------------------------------------------
//TODO ------- IMPORTS ET DECLARATION -----
//TODO ----------------------------------------------
export const prenom = "romain5"

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