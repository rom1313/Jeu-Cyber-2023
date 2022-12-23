//TODO ----------------------------------------------
//TODO ------- IMPORTS ET DECLARATION -----
//TODO ----------------------------------------------
const genius = $
import { Joueur } from "./classes.js";
import { prenom, modifierargent } from "./module1.js";
console.log(genius.date());
export let joueur = new Joueur('Invité')
console.log(prenom);
console.log(joueur);

genius.event("#button", "mousedown", () => {
    modifierargent(joueur,10)
})