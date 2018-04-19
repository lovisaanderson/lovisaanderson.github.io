var GameStart = {
    preload: function(){
        this.load.image('background', 'assets/vinter.png');
        this.load.image('plattform', 'assets/isplattform.png');
        this.load.spritesheet('pingvin', 'assets/player.png', 56,63,6);
        this.load.image('play', 'assets/playbutt.png');
        this.load.image('snow', 'assets/snow.png');
        this.load.image('storplattform', 'assets/isbotten.png');
        this.load.image('plattform', 'assets/isplattform2.png');
        this.load.image('isplattform', 'assets/isplattform2.png');
        this.load.image('isplattform3', 'assets/isplattform3.png');
        this.load.image('door', 'assets/igloo.png');
        this.load.spritesheet('mask', 'assets/mask.png',128,60,4);
        this.load.image('space', 'assets/space.png');
        this.load.image('bild1', 'assets/bild1.png');
        this.load.spritesheet('bird', 'assets/bird.png',100,67);
        this.load.audio('bakgrundsmusik', ['assets/ljud.mp3','assets/ljud.mp3']);
        this.load.audio('fail',['assets/fail.mp3']); 
        this.load.audio('point',['assets/point.mp3']);
    },
    create: function(){
        this.add.sprite(0,0, 'background');
        this.add.sprite(700,450, 'space');
        this.add.sprite(20,450, 'bild1');
        
        var namn = this.add.text(game.world.centerX, 200, 'Peter Pingvin', {font: "bold 70px Arial"});
        namn.anchor.setTo(0.5);
        
        var button = game.add.button(game.world.centerX,game.world.centerY, 'play');
        button.anchor.setTo(0.5);
        
        button.events.onInputUp.add(function(){
            this.state.start('GameState', true, false);
        },  this);   
    },
};














