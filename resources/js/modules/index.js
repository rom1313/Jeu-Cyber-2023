//TODO ----------------------------------------------
//TODO ------- Main Script -----
//TODO ----------------------------------------------
export let testmj = 'ouiiii'
const socket = io("http://localhost:13000");

//TODO ------- IMPORTS ET DECLARATION -----

const genius = $
/* import { Phaser } from "../phaser.js"; */
import { Joueur } from "./classes.js";
import { modifierargent } from "./fonctions.js";
import { Acceuil } from "./scenes/scene1.js";
/* import { game } from "./scenes/scene1.js"; */

//TODO ------- programme -----


export let joueur = new Joueur('Invité')

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

export var game = new Phaser.Game(config);

//TODO ------- EVENTS  Window -----

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

onload = () => {
    let datajoueur = joueur
    socket.emit('connexionjeu', datajoueur)
}

//TODO ------- SOCKET -----

