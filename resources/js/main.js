//TODO ----------------------------------------------
//TODO ------- NEUTRALINO -----
//TODO ----------------------------------------------


//TODO ------- FONCTION FERMER JEU -----

function fermerjeu() {
    Neutralino.app.exit();
}

//TODO ------- FONCTION CENTRER APP ECRAN -----
Neutralino.events.on('ready', () => {
    Neutralino.window.move((screen.width / 2) - 683, (screen.height / 2) - 384);

});

//TODO ------- LANCEMENT -----

Neutralino.init();
Neutralino.window.focus();

//TODO ------- NEUTRALINO EVENT-----

Neutralino.events.on("windowClose", fermerjeu);




