var GameOver = {
    create: function(){
        this.add.sprite(0,0,'background');
        
        var stil = {font: '50px Arial'};
        var text = this.add.text(game.world.centerX,200, 'GAME OVER', stil);
        text.anchor.setTo(0.5);
   
        var namn = this.add.text(game.world.centerX, 250, 'Försök igen', {fontsize: '55px'});
        namn.anchor.setTo(0.5);
            
        var button = game.add.button(game.world.centerX,game.world.centerY, 'play');
        button.anchor.setTo(0.5);

        button.events.onInputUp.add(function(){
            this.state.start('GameState', true, false);
        },this); 
    }
};