var level2 = {
    create: function(){
        antal = 7;
        console.log("DU ÄR I LEVEL 2");

        this.add.sprite(0,0,'background');
        platform1 = this.add.sprite(20,350,'plattform');
        platform2 = this.add.sprite(75,500,'plattform');
        platform3 = this.add.sprite(420,425,'plattform');
        pingvin = this.add.sprite(200,20,'pingvin');
        storplatform = this.add.sprite(0,670,'storplattform');
        platform4 = this.add.sprite(150,175,'isplattform');
        platform5 = this.add.sprite(750,270,'isplattform');
        platform6 = this.add.sprite(400,250,'isplattform');
        platform7 = this.add.sprite(600,100,'isplattform');
        platform8 = this.add.sprite(850,525,'isplattform3');
        door = this.add.sprite(850,440,'door');
        door.visible = false;

        mask1 = this.add.sprite(50,640,'mask');
        mask1.scale.setTo(-1,1);
        mask1.anchor.setTo(0.5);
        mask1.riktning = 'h';
        mask2 = this.add.sprite(500,640,'mask');
        mask2.scale.setTo(-1,1);
        mask2.riktning = 'h';
        mask2.anchor.setTo(0.5);

        snow1 = this.add.sprite(630,40,'snow');
        snow2 = this.add.sprite(75,600,'snow');
        snow3 = this.add.sprite(640,370,'snow');
        snow4 = this.add.sprite(200,450,'snow');
        snow5 = this.add.sprite(780,200,'snow');
        snow6 = this.add.sprite(900,620,'snow');
        snow7 = this.add.sprite(410,190,'snow');

        bird1 = this.add.sprite(700,100,'bird');
        bird1.scale.setTo(1,1);
        bird1.anchor.setTo(0.5);
        bird1.riktning = 'h';
        bird2 = this.add.sprite(500,400,'bird');
        bird2.scale.setTo(1,1);
        bird2.riktning = 'h';
        bird2.anchor.setTo(0.5);



        this.physics.enable([pingvin, platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8, snow1, snow2, snow3, snow4, snow5, snow6, snow7, storplatform,bird1, bird2,mask1,mask2], Phaser.Physics.ARCADE);

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


        pil = this.input.keyboard.createCursorKeys();
        jumpBotton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


        pingvin.animations.add('go',[0,1,2,3,2,1],6,true);       
        pingvin.animations.add('idle',[4,4,4,4,4,4,4,5],5,true);
        pingvin.animations.play('idle');

        mask1.animations.add('kryp',[0,1,2,3],5,true);
        mask1.animations.play('kryp');

        mask2.animations.add('kryp',[0,1,2,3],5,true);
        mask2.animations.play('kryp');

        bird1.animations.add('flyg',[0,1,2,3,4,5,6,7],5,true);
        bird1.animations.add('flyg-h',[0,1,2,3,4,5,6,7],5,true);
        bird1.animations.add('flyg-v',[8,9,10,11,12,13,14,15],5,true);
        bird1.animations.add('flyg-u',[0,1,2,3],7,true);
        bird1.animations.add('flyg-n',[0,1],5,true);

        bird1.animations.add('flyg-u');
        bird1.animations.play('flyg');
        bird1.body.velocity.x = 100;

        bird2.animations.add('flyg',[0,1,2,3,4,5,6,7],5,true);
        bird2.animations.add('flyg-h',[0,1,2,3,4,5,6,7],5,true);
        bird2.animations.add('flyg-v',[8,9,10,11,12,13,14,15],5,true);
        bird2.animations.add('flyg-u',[0,1,2,3],7,true);
        bird2.animations.add('flyg-n',[0,1],5,true);

        bird2.animations.add('flyg-u');
        bird2.animations.play('flyg');
        bird2.body.velocity.x = 100;

    },
    update: function() {
          
        this.physics.arcade.overlap(pingvin, [snow1, snow2, snow3, snow4, snow5, snow6, snow7], this.collisionHandler);

        if(door.visible == true){
            console.log('slutet');
            this.physics.arcade.overlap(pingvin, door, this.nextlevelHandler);
        }

        this.physics.arcade.collide(pingvin, [platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8, storplatform, snow1, snow2, snow3, snow4, snow5, snow6, snow7]);

        this.physics.arcade.overlap(pingvin, [mask1,mask2,bird1,bird2] , this.killpingvin);


        if(jumpBotton.isDown && pingvin.body.touching.down){
            pingvin.body.velocity.y = -500;
        }

        pingvin.body.velocity.x = 0;

        if(pingvin.y > game.world.height){
            this.state.start('GameOver', true, false);

        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
            antal = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            pingvin.body.velocity.x = SPEED;
            pingvin.scale.setTo(1,1);
            pingvin.animations.play("go");

        }else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
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

        //bird riktning
        if(bird1.x >= 935 && bird1.riktning == 'h') {
            bird1.riktning = 'v';
            bird1.scale.setTo(-1,1);
            bird1.body.velocity.x = -100;
        }
        else if(bird1.x <= 35 && bird1.riktning == 'v') {
            bird1.riktning = 'h';  
            bird1.scale.setTo(1,1);
            bird1.body.velocity.x = 100;      
        }
        if(bird2.x >= 935 && bird2.riktning == 'h') {
            bird2.riktning = 'v';
            bird2.scale.setTo(-1,1);
            bird2.body.velocity.x = -100;
        }
        else if(bird2.x <= 35 && bird2.riktning == 'v') {
            bird2.riktning = 'h';
            bird2.scale.setTo(1,1);
            bird2.body.velocity.x = 100;
        }

    },
    collisionHandler: function (pingvin, snow){
        snow.kill();
        antal = antal-1;
        console.log(antal);

        if(antal <= 0) {
            door.visible = true;
        }
    },
    killpingvin: function (pingvin, mask){
                pingvin.kill();
                game.state.start('GameOver');
    },
    nextlevelHandler: function (pingvin, door){
        console.log('slutet');
                game.state.start('vunnit');  
        
    },

    
    };