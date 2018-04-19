var GameOver = {
    create: function(){
        this.add.sprite(0,0,'background');
        
        var stil = {font: '50px Arial'};
        var stil2 = {font: '15px Arial'};
        var stil3 = {font: '22px Arial'};
        var text = this.add.text(game.world.centerX,200, 'GAME OVER', stil);
        text.anchor.setTo(0.5);
   
        var namn = this.add.text(game.world.centerX, 250, 'Försök igen', {fontsize: '55px'});
        namn.anchor.setTo(0.5);
            
        var button = game.add.button(game.world.centerX,game.world.centerY, 'play');
        button.anchor.setTo(0.5);

        button.events.onInputUp.add(function(){
            musik.stop();
            this.state.start('GameState', true, false);
        },this); 
        
        var licens = this.add.text(game.world.centerX,500, 'Bildkällor & licenser: \nBilder från Openclipart med licensen public domain: Plattform1, plattform2, plattform3, snöflinga, bakgrund, fågel \nBilder från Gameartguppy med licensen CC BY: Pingvin & monster', stil2);
        licens.anchor.setTo(0.5);
        
        var elev = this.add.text(game.world.centerX,580, 'Lovisa Anderson Ullvigymnasiet', stil3);
        elev.anchor.setTo(0.5);
    }
};