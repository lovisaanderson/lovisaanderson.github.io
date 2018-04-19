var antal = 7;
    SPEED = 180;
    JUMP = 500;

var door;
var text='';

var GameState = {
    create: function(){
        this.add.sprite(0,0,'background');
        platform1 = this.add.sprite(100,500,'plattform');
        platform2 = this.add.sprite(600,500,'plattform');
        platform3 = this.add.sprite(325,350,'plattform');
        pingvin = this.add.sprite(200,20,'pingvin');
        pingvin.anchor.setTo(0.5);
        storplatform = this.add.sprite(0,670,'storplattform');
        platform4 = this.add.sprite(150,250,'isplattform');
        platform5 = this.add.sprite(800,100,'isplattform');
        platform6 = this.add.sprite(700,200,'isplattform');
        platform7 = this.add.sprite(70,100,'isplattform');
        platform8 = this.add.sprite(400,170,'isplattform3');
        door = this.add.sprite(400,100,'door');
        door.visible = false;
        
        mask1 = this.add.sprite(50,640,'mask');
        mask1.scale.setTo(-1,1);
        mask1.anchor.setTo(0.5);
        mask1.riktning = 'h';
        mask2 = this.add.sprite(500,640,'mask');
        mask2.scale.setTo(-1,1);
        mask2.riktning = 'h';
        mask2.anchor.setTo(0.5);
        
        snow1 = this.add.sprite(100,600,'snow');
        snow2 = this.add.sprite(600,600,'snow');
        snow3 = this.add.sprite(320,430,'snow');
        snow4 = this.add.sprite(800,430,'snow');
        snow5 = this.add.sprite(820,40,'snow');
        snow6 = this.add.sprite(40,300,'snow');
        snow7 = this.add.sprite(440,110,'snow'); 

        this.physics.enable([pingvin, platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8, snow1, snow2, snow3, snow4, snow5, snow6, snow7, storplatform, door, mask1, mask2], Phaser.Physics.ARCADE);

        pingvin.body.gravity.y = 600;
        pingvin.body.collideWorldBounds = true; 

        platform1.body.allowGravity = false;
        platform1.body.immovable = true;
        platform2.body.allowGravity = false;
        platform2.body.immovable = true;
        platform3.body.allowGravity = false;
        platform3.body.immovable = true;
        platform4.body.allowGravity = false;
        platform4.body.immovable = true;
        platform5.body.allowGravity = false;
        platform5.body.immovable = true;
        platform6.body.allowGravity = false;
        platform6.body.immovable = true;
        platform7.body.allowGravity = false;
        platform7.body.immovable = true;
        platform8.body.allowGravity = false;
        platform8.body.immovable = true;
        snow1.body.allowGravity = false;
        snow1.body.immovable = true;
        snow2.body.allowGravity = false;
        snow2.body.immovable = true;
        snow3.body.allowGravity = false;
        snow3.body.immovable = true;
        snow4.body.allowGravity = false;
        snow4.body.immovable = true;
        snow5.body.allowGravity = false;
        snow5.body.immovable = true;
        snow6.body.allowGravity = false;
        snow6.body.immovable = true;
        snow7.body.allowGravity = false;
        snow7.body.immovable = true;
        storplatform.body.allowGravity = false;
        storplatform.body.immovable = true;
        
        text = game.add.text(20, 20, "Antal kvar: 7", {
        font: "30px Arial",
        fill: "#ff0044"
    });

        musik = this.add.audio('bakgrundsmusik');
        musik.play();
        
        fail = this.add.audio('fail');
        
        point = this.add.audio('point');
        
        pil = this.input.keyboard.createCursorKeys();
        jumpBotton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        jumpBotton2 = this.input.keyboard.addKey(Phaser.Keyboard.UP);    

        pingvin.animations.add('go',[0,1,2,3,2,1],6,true);       
        pingvin.animations.add('idle',[4,4,4,4,4,4,4,5],5,true);
        pingvin.animations.play('idle');

        mask1.animations.add('kryp',[0,1,2,3],5,true);
        mask1.animations.play('kryp');
        
        mask2.animations.add('kryp',[0,1,2,3],5,true);
        mask2.animations.play('kryp');
        
        
    },
    update: function() {
        
        this.physics.arcade.overlap(pingvin, [snow1, snow2, snow3, snow4, snow5, snow6, snow7], this.collisionHandler);
   
        if(door.visible == true){
            this.physics.arcade.overlap(pingvin, door, this.nextlevelHandler);
        }
        
        this.physics.arcade.collide(pingvin, [platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8, storplatform, snow1, snow2, snow3, snow4, snow5, snow6, snow7]);
        
        this.physics.arcade.overlap(pingvin, [mask1,mask2] , this.killpingvin);
    
        if(jumpBotton.isDown && pingvin.body.touching.down || jumpBotton2.isDown && pingvin.body.touching.down ){
            pingvin.body.velocity.y = -500;
        }

        pingvin.body.velocity.x = 0;
        
        if(pingvin.y > game.world.height){
            this.state.start('GameOver', true, false);
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
            antal = 0;
        }
        //förflytta pingvinen med piltangenter
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            pingvin.body.velocity.x = SPEED;
            pingvin.scale.setTo(1,1);
            pingvin.animations.play("go"); 
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            pingvin.body.velocity.x = -SPEED;
            pingvin.scale.setTo(-1,1);
            pingvin.animations.play("go");
        }
        else{
            pingvin.animations.play("idle");
        }
        if(mask1.x <= 50 && mask1.riktning == 'v') {
            mask1.riktning = 'h';
            mask1.scale.setTo(-1,1);
        }
        else if(mask1.x >= 500 && mask1.riktning == 'h') {
            mask1.riktning = 'v';          
        }
        if(mask1.riktning == 'v'){
            mask1.x--;
            mask1.scale.setTo(1,1);
        }
        else{
             mask1.x++;
        }
        if(mask2.x <= 500 && mask2.riktning == 'v') {
            mask2.riktning = 'h';
            mask2.scale.setTo(-1,1);
        }
        else if(mask2.x >= 920 && mask2.riktning == 'h') {
            mask2.riktning = 'v';          
        }
        if(mask2.riktning == 'v'){
            mask2.x--;
            mask2.scale.setTo(1,1);
        }
        else{
             mask2.x++;
        }
        
    },
        //vid kontakt av pingvinen till snöflinga försvinner snöflingan
    collisionHandler: function (pingvin, snow){
            snow.kill();
            antal = antal-1;
            console.log(antal);
            point.play();
        
         text.setText("Antal kvar: " + antal);
        
        if(antal <= 0 && snow7.visible == false) {
                door.visible = true;    
            } 
    },
        killpingvin: function (pingvin, mask){
            pingvin.kill();
            game.state.start('GameOver');
             fail.play();
              
        },
            //tar en till nivå två genom att ta sig till igloon
        nextlevelHandler: function (pingvin, door){
                
                game.state.start('level2');
            
        }
};