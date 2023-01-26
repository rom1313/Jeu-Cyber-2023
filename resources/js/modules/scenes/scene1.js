//TODO ------- VARIABLES ET IMPORTS -----
// IMPORTS
import { testmj, joueur } from "../index.js";
import { Etats, Joueur } from "../classes.js";
import { fonctionmajtexteinfocombat, degats } from "../fonctions.js";
import { game } from "../index.js"

// VARIABLES
let touchesclavierFLECHES
let touche
export let personnage
let vitessepersonnage
var logo
let camera
export let scene
export let degattexte;
let sourcedelumierejoueur
const genius = $
// variables styles text
let stylemessageinfo
let texttest = `1`
let lumiere1


// initialisation

let etat = new Etats()
// fonctions


//TODO ------- SCENE -----
export class Acceuil extends Phaser.Scene {

    constructor() { super("Acceuil") }// nom de la scene


    //TODO ------- PRELOAD -----

    preload() {

        scene = this // assignation de la scene a une variable nommé scene



        /* this.load.setBaseURL('http://labs.phaser.io'); charger des ressources à partir d'une url */
        console.log(testmj);
        this.load.image('fond', 'img/Map test.png') // import fond de scene
        this.load.image('particule', 'img/particulerouge.png'); //import particule
        this.load.spritesheet("personnage", "img/spriteHomme2.png", { frameWidth: 46, frameHeight: 63 }); // import sprite personnage
        this.load.spritesheet("torche", "img/spritebitte.png", { frameWidth: 46, frameHeight: 63 });
        this.load.spritesheet("filet", "img/spritefilet.png", { frameWidth: 46, frameHeight: 63 });
    }
    //TODO ------- CREATE -----

    create() {


        touche = this.input.keyboard.addKeys('Z,S,Q,D,A,B,C,E,F,G,H,I,J,K,L,M,N,O,P,R,T,U,V,W,X,Y,ESC,SPACE'); // creation des touches

        camera = this.cameras.main; // creation d'une camera
        camera.fadeIn(1500, 1);

        touchesclavierFLECHES = this.input.keyboard.createCursorKeys(); // creation des touches fléchés

        this.background = this.add.image(683, 384, 'fond'); // creation fond de scene 

        personnage = this.physics.add.sprite(500, 246, "personnage")
            .setInteractive(this.input.makePixelPerfect()) // hitbox parfaite
            .setSize(30, 50, true) // hitbox
            .setBounce(1, 1) // rebond sur colision
            .setCollideWorldBounds(true) // colision du monde
            .setDepth(2) // z-index
            .setScale(1, 1); // scale

        // creation personnage
        this.torche = this.physics.add.sprite(500, 246, "torche")
        this.filet = this.physics.add.sprite(150, 0, "filet").setVelocity(0, 300).setCollideWorldBounds(true).setBounce(1, 1).setSize(10, 10, true).setScale(2,2)
        /*  personnage.alpha = 1; // changer opacité du personnage */



        var particles = this.add.particles('filet'); // creation particule

        var emitter = particles.createEmitter({ speed: 1, scale: { start: 0, end: 1, quantity: 10 }, blendMode: 'ADD' }); // config des particules

        logo = this.physics.add.image(400, 100, 'logo'); // creation du logo 
        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);


        emitter.startFollow(logo);

        // creation de styles texte 
        stylemessageinfo = { font: "15px impact", fill: "red", align: "center", display: "flex", justifyContent: "center", textShadow: "4px 5px 16px green", fontWeight: 'bold', stroke: "#000000", strokeThickness: 1.5 } // syle message info
        degattexte = scene.add.text(personnage.x, personnage.y, "", stylemessageinfo).setDepth(2) // creation message info text vide
        // todo ------------- Colisions ---------------------->

        this.physics.add.collider(personnage, [logo], // ajout de colision entres sprites
            function colision(personnage, collisionsprite) {
                camera.shake(1000, 0.025);
                /*       etat.stun(joueur); */
                /* fonctioninfocombat(messageinfocombatjoueur, "-40")
                fonctionmajtexteinfocombat(messageinfocombatjoueur); */
            } // fonction lors de la colision
        );
        // todo ----- ANIMATIONS Sprite
        // todo -----  Personnage
        // marche bas
        this.anims.create({
            key: "bas",
            frames: this.anims.generateFrameNumbers("personnage", {
                frames: [0, 1, 0, 2,]
            }),
            frameRate: 6,
            repeat: -1

        });
        // marche haut
        this.anims.create({
            key: "haut",
            frames: this.anims.generateFrameNumbers("personnage", {
                frames: [6, 7, 6, 8]
            }),
            frameRate: 6,
            repeat: -1

        });
        // marche gauche
        this.anims.create({
            key: "gauche",
            frames: this.anims.generateFrameNumbers("personnage", {
                frames: [3, 4, 5]
            }),
            frameRate: 6,
            repeat: -1

        });
        // marche droite
        this.anims.create({
            key: "droite",
            frames: this.anims.generateFrameNumbers("personnage", {
                frames: [9, 10, 11]
            }),
            frameRate: 6,
            repeat: -1

        });
        // todo -----  bitte
        this.anims.create({
            key: "bitte",
            frames: this.anims.generateFrameNumbers("torche", {
                frames: [0, 1, 2, 1, 0]
            }),
            frameRate: 5,
            repeat: -1

        });
        this.torche.play("bitte");


        // todo -----  filet
        this.anims.create({
            key: "filet",
            frames: this.anims.generateFrameNumbers("filet", {
                frames: [0, 1, 2, 3, 2, 1,]
            }),
            frameRate: 20,
            repeat: -1

        });
        this.filet.play("filet");


        // todo ----- ANIMATIONS Global

        /*  this.tweens.add({
             targets: personnage, // cible de l'effet 
             alpha: { from: 0, to: 1 },
             ease: "Sine.InOut",
             duration: 3000,
             repeat: -1,
             yoyo: true
         }); // effet apparition EXEMPLE */
        // todo ----- Création de lumières

        /*  personnage.setPipeline("Light2D"); */
        /* this.background.setPipeline("Light2D");
        this.lights.setAmbientColor(55, 555, 255);
        lumiere1 = this.lights.addLight(1000, 100, 766).setIntensity(3); */

        /*      this.lights.enable(); */


        // todo ------ EVENTS TOUCHES

        // touche déplacement bas ----------------->

        touche.S.on("down", function (event) {
            vitessepersonnage = joueur.vitesse

            // vitesse normal
            if (vitessepersonnage === 1) {
                personnage.setVelocity(0, 150);
                personnage.play("bas");
            }
            // vitesse courir
            else if (vitessepersonnage === 2) {
                personnage.setVelocity(0, 190);
                personnage.play("bas");
            }
            // vitesse boosté
            else if (vitessepersonnage === 3) {
                personnage.setVelocity(0, 240);
                personnage.play("bas");
            }
            // vitesse 0
            else if (vitessepersonnage === 0) {
                personnage.setVelocity(0, 0);
            }
            // vitesse réduite
            else if (vitessepersonnage === 0.5) {

            }

        });

        // touche déplacement haut ----------------->

        touche.Z.on("down", function (event) {
            personnage.setVelocity(0, -150);
            personnage.play("haut");
        });
        // touche déplacement gauche ----------------->

        touche.Q.on("down", function (event) {
            personnage.setVelocity(-150, 0);
            personnage.play("gauche");
        });

        // touche déplacement droite ----------------->

        touche.D.on("down", function (event) {
            personnage.setVelocity(150, 0);
            personnage.play("droite");
        });

        // touche ECHAP ----------------->
        touche.ESC.on("down", function (event) {
            degats(5, joueur.def)

        });

        // touche ESPACE ----------------->
        touche.SPACE.on("down", function (event) {

            if (joueur.vitesse === 1) { joueur.vitesse = 2 }
            else if (joueur.vitesse === 2) { joueur.vitesse = 1 }
            scene.physics.moveToObject(logo, personnage, 100);


        });



        // todo ------ Autres / test

        this.input.setDraggable(personnage);
        personnage.on('drag', function (pointer, dragX, dragY) {

            personnage.x = dragX;
            personnage.y = dragY;

        });
        // creation d'un sprite draggable


        var pointer = this.input.activePointer; // recuperation de la souris (pointer)
        /* this.input.on('pointermove', () => { console.log(pointer.x); }) // event souris bouge */
        /*  this.input.on('pointerdown', () => { console.log('click appuyé'); }) // event souris click gaucher  */

        var combo = this.input.keyboard.createCombo(('MONEY'), { resetOnMatch: true }); // creation dun comba de touche (touche une apres l autre M puis O etc..)
        this.input.keyboard.on('keycombomatch', function (event) {  //event combo effectué
            console.log('Bravo , le code money vous donne 1000 pieces');


        });

        personnage.on('pointerover', function () {

            this.setTint(0xff0000);

        });

        personnage.on('pointerout', function () {

            this.setTint();

        });




    } // fin de create ()
    //TODO ------- UPDATE -----


    update() {


        // Stopper les mouvements

        if (touche.Q.isUp && touche.S.isUp && touche.D.isUp && touche.Z.isUp) {
            personnage.setVelocity(0, 0);
            personnage.stop()

        }
        /* // diagonale haut/droite
        if (touche.Z.isDown && touche.D.isDown) {
            personnage.setVelocity(100, -100);
            personnage.play("haut");
        }
        // diagonale bas/droite
        if (touche.S.isDown && touche.D.isDown) {
            personnage.setVelocity(100, 100);
            personnage.play("bas");
        }
        // diagonale haut/GAUCHE
        if (touche.Z.isDown && touche.Q.isDown) {
            personnage.setVelocity(-100, -100);
            personnage.play("haut");
        }
        // diagonale bas/GAUCHE
        if (touche.S.isDown && touche.Q.isDown) {
            personnage.setVelocity(-100, 100);
            personnage.play("bas");
        } */


        degattexte.setPosition(personnage.x - 3.3, personnage.y - 49); // maj position du text degat sur le joueur




    } // fin update()

    //TODO ------- FIN DE SCENE -----
}