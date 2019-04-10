var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {
    preload: preload, create: create, update: update
});
var ball;

function preload() {
    handleRemoteImagesOnJSFiddle();
    game.scale.scaleMode = Pharser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
    game.load.image('ball', 'img/ball.png');
}
function create() {
    ball = game.add.sprite(50, 50, 'ball');
}
function update() { }
function handleRemoteImagesOnJSFiddle() {
    game.load.baseURL = 'https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/';
    game.load.crossOrigin = 'anonymous';
}