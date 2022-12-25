document.wind
var config = {
    type: Phaser.AUTO,

    width: 1366,
    height: 768,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    },
    /* scale: {
        parent: "body",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    } */
};

export var game = new Phaser.Game(config);

function preload() {
    /*     this.load.setBaseURL('http://labs.phaser.io'); */

    /* this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png'); */
    this.load.image('fond', '../img/Map test.png')
    this.load.image('particule', '../img/particulerouge.png');
}

function create() {
    this.add.image(683, 384, 'fond');

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
}