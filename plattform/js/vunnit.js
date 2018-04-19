var vunnit = {
    create: function(){
    
       this.add.sprite(0,0,'background');

        var stil = {font: '50px Arial'};
        
        var text = this.add.text(game.world.centerX,200, 'GRATTIS!', stil);
        text.anchor.setTo(0.5);
    
    }   
};