let touchesclavier
let personnage


export class Acceuil extends Phaser.Scene {
    constructor() {
        super("Acceuil");
    }
    //-----------------------------------
    preload() {
        /*     this.load.setBaseURL('http://labs.phaser.io'); */

        /* this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png'); */
        this.load.image('fond', '../img/Map test.png')
        this.load.image('particule', '../img/particulerouge.png');
        this.load.spritesheet("personnage", "../img/sprite1.png", {
            frameWidth: 46,
            frameHeight: 63
        });
    }

    create() {
        this.add.image(683, 384, 'fond');
        personnage = this.physics.add
            .sprite(500, 246, "personnage")
            .setInteractive(this.input.makePixelPerfect()).setSize(63, 46, true).setBounce(1, 1).setCollideWorldBounds(true);
        /* $spriteildaa.setSize(228, 757, true);
        $spriteildaa.setDepth(2);
        $spriteildaa.setScale(0.7, 0.7); */

        var particles = this.add.particles('particule');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);


        this.anims.create({
            key: "bas",
            frames: this.anims.generateFrameNumbers("personnage", {
                frames: [0, 1, 0, 2]
            }),
            frameRate: 5,
            repeat: -1

        });
        touchesclavier = this.input.keyboard.createCursorKeys();


        touchesclavier.down.on("down", function (event) {


            personnage.setVelocity(0, 120);

            personnage.play("bas");

        });
    }
    update() {

        touchesclavier.down.on("up", function (event) {
            personnage.stop();
            //  perso.play("walk");
            personnage.setVelocity(0, 0);
        });
    }


}