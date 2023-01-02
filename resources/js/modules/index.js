//TODO ----------------------------------------------
//TODO ------- Main Script -----
//TODO ----------------------------------------------
export let testmj = 'ouiiii'

//TODO ------- IMPORTS ET DECLARATION -----

const genius = $
/* import { Phaser } from "../phaser.js"; */
import { Joueur } from "./classes.js";
import { prenom, modifierargent } from "./fonctions.js";
import { Acceuil } from "./scenes/scene1.js";
/* import { game } from "./scenes/scene1.js"; */

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
    resolution: window.devicePixelRatio,
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

oncontextmenu = () => { return false }

/* genius.event("#button", "mousedown", () => {
    modifierargent(joueur, 10)
}) */

ononline = () => {
    console.log('en ligne !');
}
onoffline = () => {
    console.log('hors ligne  !');
}
onclick = () => {
    console.log('clik !');
}

console.log(window);