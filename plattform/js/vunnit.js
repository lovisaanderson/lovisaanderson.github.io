var vunnit = {
    create: function(){
    
       this.add.sprite(0,0,'background');

        var stil = {font: '50px Arial'};
        var stil2 = {font: '15px Arial'};
        var stil3 = {font: '30px Arial'};
        
        var text = this.add.text(game.world.centerX,200, 'GRATTIS!', stil);
        text.anchor.setTo(0.5);
    
        var licens = this.add.text(game.world.centerX,500, 'Bildkällor & licenser: \nBilder från Openclipart med licensen public domain: Plattform1, plattform2, plattform3, snöflinga, bakgrund, fågel \nBilder från Gameartguppy med licensen CC BY: Pingvin & monster', stil2);
        licens.anchor.setTo(0.5);
        
        var elev = this.add.text(game.world.centerX,500, 'Lovisa Anderson Ullvigymnasiet', stil3);
        elev.anchor.setTo(0.5);
        
    }   
};