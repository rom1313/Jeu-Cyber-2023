//TODO ----------------------------------------------
//TODO ------- Main Script -----
//TODO ----------------------------------------------
export let testmj = 'ouiiii'
const socket = io("http://localhost:13000");

//TODO ------- IMPORTS ET DECLARATION -----

const genius = $
/* import { Phaser } from "../phaser.js"; */
import { Joueur, event } from "./classes.js";
import { modifierargent } from "./fonctions.js";
import { Acceuil } from "./scenes/scene1.js";
/* import { game } from "./scenes/scene1.js"; */

//TODO ------- programme -----


export let joueur = new Joueur('Invité')

console.log(joueur);
/* console.log(game); */
/* console.log(window.innerWidth);
console.log(window.innerHeight); */


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
    document.querySelector("#notifinternet").src = "img/interneton.png"
    console.log('en ligne !');
}
onoffline = () => {
    document.querySelector("#notifinternet").src = "img/internetoff.png"
    console.log('hors ligne  !');
}
onclick = () => {
    console.log('clik !');
    document.querySelector("html").dispatchEvent(event)
}

onload = () => {
    // internet tcheck
    if (navigator.onLine === true) {
        document.querySelector("#notifinternet").src = "img/interneton.png"
    }
    else {
        document.querySelector("#notifinternet").src = "img/internetoff.png"
    }

    //socket event
    let datajoueur = joueur
    socket.emit('connexionjeu', datajoueur)
}

genius.event("html", "customevent", () => {
    console.log('custom event ! ');
})


genius.event("#notifinternet", "mouseover", (e) => {
    let p = genius.element("p", "#infobulle")
    p.style.left = "70px"
    p.style.top = "17px"
    console.log(e.target.src);
    if (e.target.src === "http://localhost:12000/img/interneton.png") {
        genius.textContent('Online', "#infobulle")
    }
    else {
        genius.textContent('Offline', "#infobulle")
    }




})
genius.event("#notifinternet", "mouseout", (e) => {
    document.querySelector("#infobulle").remove()


    console.log(e.clientX);
})

//TODO ------- SOCKET -----

console.log(navigator.onLine);
console.log(navigator.pointer);