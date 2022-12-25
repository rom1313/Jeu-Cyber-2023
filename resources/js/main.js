//TODO ----------------------------------------------
//TODO ------- NEUTRALINO -----
//TODO ----------------------------------------------


//TODO ------- FONCTION FERMER JEU -----

function fermerjeu() {
    Neutralino.app.exit();
}

//TODO ------- FONCTION CENTRER APP ECRAN -----
Neutralino.events.on('ready', () => {
    Neutralino.window.move((screen.width / 2) - 684, (screen.height / 2) - 383);

});

//TODO ------- LANCEMENT -----

Neutralino.init();

//TODO ------- NEUTRALINO EVENT-----

Neutralino.events.on("windowClose", fermerjeu);




