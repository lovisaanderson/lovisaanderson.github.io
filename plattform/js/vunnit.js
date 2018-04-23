var vunnit = {
    create: function(){
        //Lägger in bakgrund
       this.add.sprite(0,0,'background');
        
        //Skapar textstilar
        var stil = {font: '50px Arial'};
        var stil2 = {font: '15px Arial'};
        var stil3 = {font: '15px Arial'};
        var stil4 = {font: '22px Arial'};
        
        //Text & dess placering
        var text = this.add.text(game.world.centerX,150, 'GRATTIS!', stil);
        text.anchor.setTo(0.5);
        
        //Text om licenser för bilder
        var licens = this.add.text(game.world.centerX,420, 'Bildkällor & licenser: \nBilder från Openclipart med licensen public domain: Plattform1, plattform2, plattform3, snöflinga, bakgrund, fågel \nBilder från Gameartguppy med licensen CC BY: Pingvin & monster', stil2);
        licens.anchor.setTo(0.5);
        
        //Text om licencer för ljud
        var ljudlicens = this.add.text(265,510, 'Ljudkällor & licenser: \nBackgrundsljud från soundimage.org med \nPoängljud från freesfx.co.uk  \nGameoverljud från soundeffectsplus.com', stil3);
        ljudlicens.anchor.setTo(0.5);
        
        //Namn & skola
        var elev = this.add.text(game.world.centerX,580, 'Lovisa Anderson Ullvigymnasiet', stil4);
        elev.anchor.setTo(0.5);
    }   
};