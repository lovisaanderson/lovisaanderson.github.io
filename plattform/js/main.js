var game = new Phaser.Game(1000,700,Phaser.AUTO);

game.state.add('GameStart', GameStart);
game.state.add('GameState', GameState);
game.state.add('GameOver', GameOver);
game.state.add('level2', level2);
game.state.add('vunnit', vunnit);
game.state.start('GameStart');
