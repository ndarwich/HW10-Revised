function damage(minDmg, maxDmg, defense) {
  return Math.floor(minDmg + Math.random()*(maxDmg-minDmg) - defense);
}

var mainState = {
    preload: function() {
		game.load.image('background' , 'assets/mountain.jpg');
		game.load.audio('music', 'assets/peak.mp3');
		game.load.image('player' , 'assets/player.png');
		game.load.image('enemy' , 'assets/boss.png');

    },

    create: function() {
	// game.stage.backgroundColor = '#94fcc0';
    this.background = game.add.tileSprite(0,0,800,600,'background');
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.player = game.add.sprite(600, 300, 'player');
		game.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds=true;

		this.enemy = game.add.sprite(50, 150, 'enemy');
		game.physics.arcade.enable(this.enemy);

		this.input = game.input.keyboard.createCursorKeys();
		this.song = game.sound.play('music');
    },

    update: function() {
game.physics.arcade.overlap(this.player, this.enemy, this.over, null, this);

		this.player.body.velocity.y = 0;
		this.player.body.velocity.x = 0;

	if(this.input.up.isDown){
		this.player.body.velocity.y = -150;
	}
	if(this.input.down.isDown){
		this.player.body.velocity.y = 150;
	}
	if(this.input.right.isDown){
		this.player.body.velocity.x = 150;
	}
	if(this.input.left.isDown){
		this.player.body.velocity.x = -150;
	}
    },

	over: function(){
		this.song.pause();
		game.state.start('fmain');
	},

};

var mainB = {
    preload: function() {
		game.load.image('background' , 'assets/grass.jpg');
		game.load.image('player' , 'assets/player.png');
		game.load.image('enemy' , 'assets/enemy.png');
		game.load.audio('music', 'assets/city.mp3');
    },

    create: function() {
		this.background = game.add.tileSprite(0,0,800,600,'background');
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.player = game.add.sprite(50, 50, 'player');
		game.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds=true;
		this.enemy = game.add.sprite(600, 500, 'enemy');
		game.physics.arcade.enable(this.enemy);

		this.input = game.input.keyboard.createCursorKeys();
		this.song = game.sound.play('music');

    },

    update: function() {
		game.physics.arcade.overlap(this.player, this.enemy, this.over, null, this);

		this.player.body.velocity.y = 0;
		this.player.body.velocity.x = 0;

	if(this.input.up.isDown){
		this.player.body.velocity.y = -150;
	}
	if(this.input.down.isDown){
		this.player.body.velocity.y = 150;
	}
	if(this.input.right.isDown){
		this.player.body.velocity.x = 150;
	}
	if(this.input.left.isDown){
		this.player.body.velocity.x = -150;
	}

    },

	over: function(){
		this.song.pause();
		game.state.start('cmain');
	},
};

var mainJapan = {
    preload: function() {
		game.load.image('background' , 'assets/tokyo.jpg');
		game.load.image('player' , 'assets/player.png');
		game.load.image('enemy' , 'assets/samurai.png');
		game.load.audio('music', 'assets/asianmusic.mp3');
    },

    create: function() {
		this.background = game.add.tileSprite(0,0,800,600,'background');
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.player = game.add.sprite(700, 450, 'player');
		game.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds=true;
		this.enemy = game.add.sprite(50, 400, 'enemy');
		game.physics.arcade.enable(this.enemy);

		this.input = game.input.keyboard.createCursorKeys();
		this.song = game.sound.play('music');

    },

    update: function() {
		game.physics.arcade.overlap(this.player, this.enemy, this.over, null, this);

		this.player.body.velocity.y = 0;
		this.player.body.velocity.x = 0;

	if(this.input.up.isDown){
		this.player.body.velocity.y = -150;
	}
	if(this.input.down.isDown){
		this.player.body.velocity.y = 150;
	}
	if(this.input.right.isDown){
		this.player.body.velocity.x = 150;
	}
	if(this.input.left.isDown){
		this.player.body.velocity.x = -150;
	}

    },

	over: function(){
		this.song.pause();
		game.state.start('hmain');
	},
};


var mainCave = {
    preload: function() {
		game.load.image('background' , 'assets/cave.jpg');
		game.load.image('player' , 'assets/player.png');
		game.load.image('enemy' , 'assets/camelman.png');
		game.load.audio('music', 'assets/asianmusic.mp3');
    },

    create: function() {
		this.background = game.add.tileSprite(0,0,800,600,'background');
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.player = game.add.sprite(700, 400, 'player');
		game.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds=true;
		this.enemy = game.add.sprite(50, 400, 'enemy');
		game.physics.arcade.enable(this.enemy);

		this.input = game.input.keyboard.createCursorKeys();
		this.song = game.sound.play('music');

    },

    update: function() {
		game.physics.arcade.overlap(this.player, this.enemy, this.over, null, this);

		this.player.body.velocity.y = 0;
		this.player.body.velocity.x = 0;

	if(this.input.up.isDown){
		this.player.body.velocity.y = -150;
	}
	if(this.input.down.isDown){
		this.player.body.velocity.y = 150;
	}
	if(this.input.right.isDown){
		this.player.body.velocity.x = 150;
	}
	if(this.input.left.isDown){
		this.player.body.velocity.x = -150;
	}

    },

	over: function(){
		this.song.pause();
		game.state.start('jmain');
	},
};


var mainGMU = {
    preload: function() {
		game.load.image('background' , 'assets/gmu.jpg');
		game.load.image('player' , 'assets/player.png');
		game.load.image('enemy' , 'assets/selfieman.png');
		game.load.audio('music', 'assets/asianmusic.mp3');
    },

    create: function() {
		this.background = game.add.tileSprite(0,0,800,600,'background');
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.player = game.add.sprite(700, 400, 'player');
		game.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds=true;
		this.enemy = game.add.sprite(50, 400, 'enemy');
		game.physics.arcade.enable(this.enemy);

		this.input = game.input.keyboard.createCursorKeys();
		this.song = game.sound.play('music');

    },

    update: function() {
		game.physics.arcade.overlap(this.player, this.enemy, this.over, null, this);

		this.player.body.velocity.y = 0;
		this.player.body.velocity.x = 0;

	if(this.input.up.isDown){
		this.player.body.velocity.y = -150;
	}
	if(this.input.down.isDown){
		this.player.body.velocity.y = 150;
	}
	if(this.input.right.isDown){
		this.player.body.velocity.x = 150;
	}
	if(this.input.left.isDown){
		this.player.body.velocity.x = -150;
	}

    },

	over: function(){
		this.song.pause();
		game.state.start('lmain');
	},
};

var mainC = {
    preload: function() {
		game.load.image('car', 'assets/prof.png');
    },

    create: function() {
		this.car = game.add.tileSprite(0,0,800,600,'car');
		this.input = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function() {
		if(this.input.isDown){
			game.state.start('dmain');
		}

    },
};

var mainD = {
    preload: function() {
		game.load.image('background' , 'assets/battle.png');
		game.load.audio('music', 'assets/music.mp3');
    },

    create: function() {
		this.song = game.sound.play('music');
		this.background = game.add.tileSprite(0,0,800,600,'background');
		this.pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.defense = 0;
		this.playerHP = 100;
		this.enemyHP = 100;
		this.labelScore1 = game.add.text(580, 490, "100", { font: "30px Arial", fill: "#000000" });
		this.labelScore = game.add.text(185, 45, "100", { font: "30px Arial", fill: "#000000" });
		this.input = game.input.keyboard.createCursorKeys();
		this.keyPressed = 0;
    },

    update: function() {
		if(this.enemyHP <= 0){
			this.song.pause();
			game.state.start('emain');
		}
		if(this.playerHP <= 0){
			this.song.pause();
			game.state.start('bmain');
		}

	if(this.input.up.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		this.enemyHP = this.enemyHP - damage(5, 9, 0);
		if(this.enemyHP < 0){
			this.labelScore.text = 0;
		}
		else {
			this.labelScore.text = this.enemyHP;
		}
		this.playerHP = this.playerHP - damage(6, 10, this.defense);
		this.labelScore1.text = this.playerHP;
	}
	if(this.input.down.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		this.enemyHP = this.enemyHP - damage(10, 14, 0);
		var x1 = this.enemyHP;
		if(this.enemyHP < 0){
			this.labelScore.text = 0;
		}
		else {
			this.labelScore.text = this.enemyHP;
		}
		this.playerHP = this.playerHP - damage(14, 18, this.defense);
		var x2 = this.playerHP;
		this.labelScore1.text = this.playerHP;
	}
	if(this.input.right.isDown && this.keyPressed == 0){
		this.song.pause();
		game.state.start('bmain');
	}
	if(this.input.left.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		if(this.defense < 3){
		    this.defense = this.defense+1;
		}
		this.playerHP = this.playerHP - damage(4, 8, this.defense);
		this.labelScore1.text = this.playerHP;
	}
	if((this.input.left.isUp && this.input.right.isUp && this.input.down.isUp && this.input.up.isUp)){
		this.keyPressed = 0;
	}
    },
};

var mainE = {
    preload: function() {
	game.load.image('background' , 'assets/battleend.png');
	game.load.audio('winmusic', 'assets/winmusic.mp3');
    },

    create: function() {
this.background = game.add.tileSprite(0,0,800,600,'background');
this.song = game.sound.play('winmusic');
this.input = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function() {
		if(this.input.isDown){
			this.song.pause();
			game.state.start('main');
		}
    },
};

var mainF = {
    preload: function() {
	game.load.image('background' , 'assets/finalbattle.PNG');
	game.load.audio('winmusic', 'assets/battlemusic.mp3');
    },

    create: function() {
		this.background = game.add.tileSprite(0,0,800,600,'background');
		this.song = game.sound.play('winmusic');
		this.defense = 0;
		this.playerHP = 100;
		this.enemyHP = 100;
		this.labelScore1 = game.add.text(625, 505, "100", { font: "30px Arial", fill: "#000000" });
		this.labelScore = game.add.text(200, 40, "100", { font: "30px Arial", fill: "#000000" });
		this.input = game.input.keyboard.createCursorKeys();
		this.pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.bool = 1;
		this.bool2 = 1;
		this.keyPressed = 0;
    },

    update: function() {
	if(this.playerHP <= 0){
		 this.song.pause();
		game.state.start('bmain');
	}
	if(this.enemyHP <= 0){
		 this.song.pause();
		game.state.start('gmain');
	}
	if(this.input.right.isDown){
		this.song.pause();
		game.state.start('main');
	}
	if(this.pauseKey.isDown){
		if(this.bool2 == 1){
			if(this.playerHP + 70 >= 100){
				this.playerHP = 100;
				this.labelScore1.text = this.playerHP;
				this.bool2 = 0;
			}
			else{
				this.playerHP += 70;
				this.labelScore1.text = this.playerHP;
				this.bool2 = 0;
			}
		}
	}
	if(this.bool == 1){
		if(this.enemyHP <= 20){
			this.bool = 0;
			this.enemyHP = this.enemyHP + 70;
			this.labelScore.text = this.enemyHP;
		}
	}

	if(this.input.up.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		this.enemyHP = this.enemyHP - damage(4, 8, 0);

		if(this.enemyHP < 0){
			this.labelScore.text = 0;
		}
		else {
			this.labelScore.text = this.enemyHP;
		}
		this.playerHP = this.playerHP - damage(6,10,this.defense);
		this.labelScore1.text = this.playerHP;
	}
	if(this.input.down.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		this.enemyHP = this.enemyHP - damage(8, 12, 0);
		var x1 = this.enemyHP;
		if(this.enemyHP < 0){
			this.labelScore.text = 0;
		}
		else {
			this.labelScore.text = this.enemyHP;
		}
		this.playerHP = this.playerHP - damage(11, 15, this.defense);
		var x2 = this.playerHP;
		this.labelScore1.text = this.playerHP;
	}

	if(this.input.left.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		if(this.defense < 3){
		this.defense = this.defense+2;
		}
		this.playerHP = this.playerHP - damage(4, 8, this.defense);
		this.labelScore1.text = this.playerHP;
	}
	if((this.input.left.isUp && this.input.right.isUp && this.input.down.isUp && this.input.up.isUp)){
		this.keyPressed = 0;
	}
    },
};

var mainG = {
    preload: function() {
	game.load.image('background' , 'assets/finalbattle1.PNG');
	game.load.audio('winmusic', 'assets/finalwin.mp3');
    },

    create: function() {
		this.background = game.add.tileSprite(0,0,800,600,'background');
		this.song = game.sound.play('winmusic');
    this.input = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function() {
  		if(this.input.isDown){
  			this.song.pause();
  			game.state.start('mainJapan');
  		}
    },
};

var mainH = {
    preload: function() {
	game.load.image('background' , 'assets/battle3.PNG');
	game.load.audio('winmusic', 'assets/finalbattlemusic.mp3');
    },

    create: function() {
		this.background = game.add.tileSprite(0,0,800,600,'background');
		this.song = game.sound.play('winmusic');
		this.defense = 0;
		this.playerHP = 100;
		this.enemyHP = 500;
		this.labelScore2 = game.add.text(540, 540, "3", { font: "30px Arial", fill: "#000000" });
		this.labelScore1 = game.add.text(625, 505, "100", { font: "30px Arial", fill: "#000000" });
		this.labelScore = game.add.text(200, 40, "500", { font: "30px Arial", fill: "#000000" });
		this.input = game.input.keyboard.createCursorKeys();
		this.pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.bool = 1;
		this.bool2 = 1;
    this.potCount = 3;
    this.justHealed = 0;
    },

    update: function() {
      if (this.bool2 == 0) {
        if (this.potCount >= 1 && this.justHealed == 0) {
          if(this.playerHP + 70 >= 100){
    				this.playerHP = 100;
    			}
    			else{
    				this.playerHP += 70;
    			}
          this.potCount--;
          this.labelScore2.text = this.potCount;
          this.labelScore1.text = this.playerHP;
          this.justHealed = 1;
        }
      }
	if(this.playerHP <= 0){
		 this.song.pause();
		game.state.start('bmain');
	}
	if(this.enemyHP <= 0){
		 this.song.pause();
		game.state.start('imain');
	}
	if(this.input.right.isDown){
		this.song.pause();
		game.state.start('mainJapan');
	}
	if(this.pauseKey.isDown){
		if(this.bool2 == 1){
			this.bool2 = 0;
		}
	}
  if(this.pauseKey.isUp){
    this.bool2 = 1;
		if(this.justHealed == 1){
			this.justHealed = 0;
		}
	}
	if(this.bool == 1){
		if(this.enemyHP <= 20){
			this.bool = 0;
			this.enemyHP = this.enemyHP + 70;
			this.labelScore.text = this.enemyHP;
		}
	}
	if(this.input.up.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		this.enemyHP = this.enemyHP - damage(4,8,2); //enemy has 2 defense already
		this.labelScore.text = this.enemyHP;
		this.playerHP = this.playerHP - damage(6,10,this.defense);
		this.labelScore1.text = this.playerHP;
	}
	if(this.input.down.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		this.enemyHP = this.enemyHP - damage(18,22,2);
		var x1 = this.enemyHP;
		this.labelScore.text = this.enemyHP;
		this.playerHP = this.playerHP - damage(14,18,this.defense);
		var x2 = this.playerHP;
		this.labelScore1.text = this.playerHP;
	}

	if(this.input.left.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		if(this.defense < 1){
		this.defense = this.defense+6;
		}
		this.playerHP = this.playerHP - DAMAGEPLAYER;
		this.labelScore1.text = this.playerHP;
	}
	if((this.input.left.isUp && this.input.right.isUp && this.input.down.isUp && this.input.up.isUp)){
		this.keyPressed = 0;
	}
    },
};

var mainI = {
    preload: function() {
	game.load.image('background' , 'assets/battle31.PNG');
	game.load.audio('winmusic', 'assets/finalwin.mp3');
    },

    create: function() {
		this.background = game.add.tileSprite(0,0,800,600,'background');
		this.song = game.sound.play('winmusic');
    this.input = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function() {
  		if(this.input.isDown){
  			this.song.pause();
  			game.state.start('mainCave');
  		}
    },
};

var mainJ = {
    preload: function() {
	game.load.image('background' , 'assets/battle4.PNG');
	game.load.audio('winmusic', 'assets/battlemusic.mp3');
    },

    create: function() {
		this.background = game.add.tileSprite(0,0,800,600,'background');
		this.song = game.sound.play('winmusic');
		this.defense = 0;
		this.playerHP = 100;
		this.enemyHP = 1000;
    //ink count
    this.labelScore3 = game.add.text(502, 700, "1", { font: "24px Arial", fill: "#000000" });
    //pot count
    this.labelScore2 = game.add.text(543, 518, "5", { font: "24px Arial", fill: "#000000" });
		this.labelScore1 = game.add.text(625, 505, "100", { font: "30px Arial", fill: "#000000" });
		this.labelScore = game.add.text(200, 40, "1000", { font: "30px Arial", fill: "#000000" });
		this.input = game.input.keyboard.createCursorKeys();
		this.potKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.inkKey = game.input.keyboard.addKey(Phaser.Keyboard.B);
    this.inkAvailable = 1;
    this.potCount = 5;
		this.keyPressed = 0;
    this.mutex = 1;
    },

    update: function() {
	if(this.playerHP <= 0){
		 this.song.pause();
		game.state.start('mainCave');
	}
	if(this.enemyHP <= 0){
		 this.song.pause();
		game.state.start('kmain');
	}
	if(this.input.right.isDown){
		this.song.pause();
		game.state.start('main');
	}
	if(this.potKey.isDown){
    if (this.mutex == 1 && this.potCount >= 1) {
      this.mutex = 0;
    }
	}
	if(this.inkKey.isDown){
    if (this.inkAvailable == 1) {
      this.labelScore3.text = 0;
      this.enemyHP = this.enemyHP + Math.floor(this.enemyHP/2); //heals the enemy
      //lower the enemy's defense by 6 though, as he is blind
			this.labelScore.text = this.enemyHP;
      this.inkAvailable = 0;
    }
	}
	if(this.potKey.isUp){
    if (this.mutex == 0) {
      this.playerHP = (this.playerHP + 70 > 100) ? 100 : this.playerHP + 70;
			this.labelScore1.text = this.playerHP;
      this.labelScore2.text = --this.potCount;
      this.mutex = 1;
    }
	}
	if(this.input.up.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		this.enemyHP = this.enemyHP - damage(10,14,8+((inkAvailable-1)*6));
		if(this.enemyHP < 0){
			this.labelScore.text = 0;
		}
		else {
			this.labelScore.text = this.enemyHP;
		}
		this.playerHP = this.playerHP - damage(6,10,this.defense);
		this.labelScore1.text = this.playerHP;
	}
	if(this.input.down.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		this.enemyHP = this.enemyHP - damage(16,20,8+((inkAvailable-1)*6);
		var x1 = this.enemyHP;
		if(this.enemyHP < 0){
			this.labelScore.text = 0;
		}
		else {
			this.labelScore.text = this.enemyHP;
		}
		this.playerHP = this.playerHP - damage(14,18,this.defense);
		var x2 = this.playerHP;
		this.labelScore1.text = this.playerHP;
	}

	if(this.input.left.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		if(this.defense < 5){
		    this.defense = this.defense+1;
		}
		this.playerHP = this.playerHP - (Math.floor(Math.random(6)+4));
		this.labelScore1.text = this.playerHP;
	}
	if((this.input.left.isUp && this.input.right.isUp && this.input.down.isUp && this.input.up.isUp)){
		this.keyPressed = 0;
	}
    },
};


var mainK = {
    preload: function() {
	game.load.image('background' , 'assets/battle41.PNG');
	game.load.audio('winmusic', 'assets/finalwin.mp3');
    },

    create: function() {
		this.background = game.add.tileSprite(0,0,800,600,'background');
		this.song = game.sound.play('winmusic');
    this.input = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function() {
  		if(this.input.isDown){
  			this.song.pause();
  			game.state.start('mainGMU');
  		}
    },
};

var mainL = {
    preload: function() {
	game.load.image('background' , 'assets/battle5.PNG');
	game.load.audio('winmusic', 'assets/battlemusic.mp3');
    },

    create: function() {
		this.background = game.add.tileSprite(0,0,800,600,'background');
		this.song = game.sound.play('winmusic');
		this.defense = 0;
		this.playerHP = 100;
		this.enemyHP = 100;
		this.labelScore1 = game.add.text(625, 505, "100", { font: "30px Arial", fill: "#000000" });
		this.labelScore = game.add.text(200, 40, "100", { font: "30px Arial", fill: "#000000" });
		this.input = game.input.keyboard.createCursorKeys();
		this.pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.bool = 1;
		this.bool2 = 1;
		this.keyPressed = 0;
    },

    update: function() {
	if(this.playerHP <= 0){
		 this.song.pause();
		game.state.start('mainGMU');
	}
	if(this.enemyHP <= 0){
		 this.song.pause();
		game.state.start('mmain');
	}
	if(this.input.right.isDown){
		this.song.pause();
		game.state.start('main');
	}
	if(this.pauseKey.isDown){
		if(this.bool2 == 1){
			if(this.playerHP + 70 >= 100){
				this.playerHP = 100;
				this.labelScore1.text = this.playerHP;
				this.bool2 = 0;
			}
			else{
				this.playerHP += 70;
				this.labelScore1.text = this.playerHP;
				this.bool2 = 0;
			}
		}
	}
	if(this.bool == 1){
		if(this.enemyHP <= 15){
			this.bool = 0;
			this.enemyHP = this.enemyHP + 70;
			this.labelScore.text = this.enemyHP;
		}
	}
	if(this.input.up.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		this.enemyHP = this.enemyHP - ((Math.floor((Math.random(3)+5)))+this.defense);
		if(this.enemyHP < 0){
			this.labelScore.text = 0;
		}
		else {
			this.labelScore.text = this.enemyHP;
		}
		this.playerHP = this.playerHP - (Math.floor(Math.random(5)+7));
		this.labelScore1.text = this.playerHP;
	}
	if(this.input.down.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		this.enemyHP = this.enemyHP - ((Math.floor(Math.random(5)+3))+this.defense);
		var x1 = this.enemyHP;
		if(this.enemyHP < 0){
			this.labelScore.text = 0;
		}
		else {
			this.labelScore.text = this.enemyHP;
		}
		this.playerHP = this.playerHP - (Math.floor(Math.random(4)+5));
		var x2 = this.playerHP;
		this.labelScore1.text = this.playerHP;
	}

	if(this.input.left.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		if(this.defense < 3){
		this.defense = this.defense+2;
		}
		this.playerHP = this.playerHP - (Math.floor(Math.random(6)+4));
		this.labelScore1.text = this.playerHP;
	}
	if((this.input.left.isUp && this.input.right.isUp && this.input.down.isUp && this.input.up.isUp)){
		this.keyPressed = 0;
	}
    },
};

var mainM = {
    preload: function() {
	game.load.image('background' , 'assets/battle51.PNG');
	game.load.audio('winmusic', 'assets/finalwin.mp3');
    },

    create: function() {
		this.background = game.add.tileSprite(0,0,800,600,'background');
		this.song = game.sound.play('winmusic');
    },

    update: function() {

    },
};


var game = new Phaser.Game(800, 600);

game.state.add('bmain', mainB);
game.state.add('cmain', mainC);
game.state.add('dmain', mainD);
game.state.add('emain', mainE);
game.state.add('main', mainState);
game.state.add('fmain', mainF);
game.state.add('gmain', mainG);
game.state.add('mainJapan', mainJapan);
game.state.add('hmain', mainH);
game.state.add('imain', mainI);
game.state.add('mainCave', mainCave);
game.state.add('jmain', mainJ);
game.state.add('kmain', mainK);
game.state.add('mainGMU', mainGMU);
game.state.add('lmain', mainL);
game.state.add('mmain', mainM);
game.state.start('bmain');
