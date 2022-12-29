//TODO ------- VARIABLES ET IMPORTS -----
let touchesclavier
let personnage
import { testmj } from "../index.js";

//TODO ------- SCENE -----
export class Acceuil extends Phaser.Scene {

    constructor() {
        super("Acceuil"); // nom de la scene 
    }
    //TODO ------- PRELOAD -----

    preload() {
        /* this.load.setBaseURL('http://labs.phaser.io'); charger à partir d'une url */
        console.log(testmj);
        this.load.image('fond', '../img/Map test.png') // import fond de scene
        this.load.image('particule', '../img/particulerouge.png'); //import particule
        this.load.spritesheet("personnage", "../img/sprite1.png", { frameWidth: 46, frameHeight: 63 }); // import sprite personnage
    }
    //TODO ------- CREATE -----

    create() {

        touchesclavier = this.input.keyboard.createCursorKeys(); // assignation aux touches

        this.add.image(683, 384, 'fond'); // creation fond de scene 

        personnage = this.physics.add.sprite(500, 246, "personnage").setInteractive(this.input.makePixelPerfect()).setSize(63, 46, true).setBounce(1, 1).setCollideWorldBounds(true);
        // creation personnage
        personnage.setDepth(2);
        personnage.setScale(2, 2);

        /* 
        personnage.setDepth(2); // z-index
        personnage.setScale(0.7, 0.7);// scale 
        */

        var particles = this.add.particles('particule'); // creation particule
        personnage.setDepth(1);
        var emitter = particles.createEmitter({ speed: 50, scale: { start: 0, end: 0.3 }, blendMode: 'ADD' }); // config des particules

        var logo = this.physics.add.image(400, 100, 'logo'); // creation du logo 
        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(personnage);

        // todo ----- ANIMATIONS

        // marche bas
        this.anims.create({
            key: "bas",
            frames: this.anims.generateFrameNumbers("personnage", {
                frames: [0, 1, 2]
            }),
            frameRate: 6,
            repeat: -1

        });
        // marche haut
        this.anims.create({
            key: "haut",
            frames: this.anims.generateFrameNumbers("personnage", {
                frames: [6, 7, 8]
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


        // EVENTS TOUCHES

        touchesclavier.down.on("down", function (event) {
            personnage.setVelocity(0, 120);
            personnage.play("bas");
        });


        touchesclavier.up.on("down", function (event) {
            personnage.setVelocity(0, -120);
            personnage.play("haut");
        });
        touchesclavier.left.on("down", function (event) {
            personnage.setVelocity(-120, 0);
            personnage.play("gauche");
        });
        touchesclavier.right.on("down", function (event) {
            personnage.setVelocity(120, 0);
            personnage.play("droite");
        });



    }
    //TODO ------- UPDATE -----


    update() {

        // EVENT TOUCHES

        touchesclavier.down.on("up", function (event) {
            personnage.stop("bas");
            personnage.setVelocity(0, 0);
        });
        touchesclavier.up.on("up", function (event) {
            personnage.stop("haut");
            personnage.setVelocity(0, 0);
        });
        touchesclavier.left.on("up", function (event) {
            personnage.stop("gauche");
            personnage.setVelocity(0, 0);
        });
        touchesclavier.right.on("up", function (event) {
            personnage.stop("droite");
            personnage.setVelocity(0, 0);
        });

    }

    //TODO ------- FIN DE SCENE -----
}