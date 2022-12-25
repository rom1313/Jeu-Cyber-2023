//TODO ----------------------------------------------
//TODO ------- IMPORTS ET DECLARATION -----
//TODO ----------------------------------------------
const genius = $
import { Joueur } from "./classes.js";
import { prenom, modifierargent } from "./module1.js";
 import { game } from "./scenes/scene1.js"; 
console.log(genius.date());
export let joueur = new Joueur('Invité')
console.log(prenom);
console.log(joueur);
/* console.log(game); */
console.log(window.innerWidth);
console.log(window.innerHeight);
genius.event("#button", "mousedown", () => {
    modifierargent(joueur, 10)
})