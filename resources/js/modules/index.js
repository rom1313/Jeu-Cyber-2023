//TODO ----------------------------------------------
//TODO ------- Main Script -----
//TODO ----------------------------------------------


//TODO ------- IMPORTS ET DECLARATION -----

const genius = $
/* import { Phaser } from "../phaser.js"; */
import { Joueur } from "./classes.js";
import { prenom, modifierargent } from "./module1.js";
import { Acceuil } from "./scenes/scene1.js";
/* import { game } from "./scenes/scene1.js"; */
oncontextmenu = () => {
    return false
}
//TODO ------- programme -----

console.log(genius.date());
let joueur = new Joueur('Invité')
console.log(prenom);
console.log(joueur);
/* console.log(game); */
console.log(window.innerWidth);
console.log(window.innerHeight);
//TODO ------- PHASER -----
var config = {
    type: Phaser.AUTO,
    width: 1366,
    height: 768,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [Acceuil],
};

var game = new Phaser.Game(config);

//TODO ------- EVENTS -----

genius.event("#button", "mousedown", () => {
    modifierargent(joueur, 10)
})