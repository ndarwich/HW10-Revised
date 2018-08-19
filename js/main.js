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
		this.player = game.add.sprite(550, 400, 'player');
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
		this.enemyHP = this.enemyHP - (4+this.defense);
		if(this.enemyHP < 0){
			this.labelScore.text = 0;
		}
		else {
			this.labelScore.text = this.enemyHP;
		}
		this.playerHP = this.playerHP - 3;
		this.labelScore1.text = this.playerHP;
	}
	if(this.input.down.isDown && this.keyPressed == 0){
		this.keyPressed = 1;
		this.enemyHP = this.enemyHP - (3+this.defense);
		var x1 = this.enemyHP;
		if(this.enemyHP < 0){
			this.labelScore.text = 0;
		}
		else {
			this.labelScore.text = this.enemyHP;
		}
		this.playerHP = this.playerHP - 5;
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
		this.defense = this.defense+3;
		}
		this.playerHP = this.playerHP - 4;
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
			if(this.playerHP + 65 >= 100){
				this.playerHP = 100;
				this.labelScore1.text = this.playerHP;
				this.bool2 = 0;
			}
			else{
				this.playerHP += 65;
				this.labelScore1.text = this.playerHP;
				this.bool2 = 0;
			}
		}
	}
	if(this.bool == 1){
		if(this.enemyHP <= 15){
			this.bool = 0;
			this.enemyHP = this.enemyHP + 55;
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
		this.labelScore2 = game.add.text(540, 540, "4", { font: "30px Arial", fill: "#000000" });
		this.labelScore1 = game.add.text(625, 505, "100", { font: "30px Arial", fill: "#000000" });
		this.labelScore = game.add.text(200, 40, "500", { font: "30px Arial", fill: "#000000" });
		this.input = game.input.keyboard.createCursorKeys();
		this.pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.bool = 1;
		this.bool2 = 1;
    this.potCount = 4;
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
			this.enemyHP = this.enemyHP + 45;
			this.labelScore.text = this.enemyHP;
		}
	}
	if(this.input.up.isDown){
		this.enemyHP = this.enemyHP - ((Math.floor((Math.random(2)+4)))+this.defense);
		this.labelScore.text = this.enemyHP;
		this.playerHP = this.playerHP - (Math.floor(Math.random(2)+5));
		this.labelScore1.text = this.playerHP;
	}
	if(this.input.down.isDown){
		this.enemyHP = this.enemyHP - ((Math.floor(Math.random(4)+3))+this.defense);
		var x1 = this.enemyHP;
		this.labelScore.text = this.enemyHP;
		this.playerHP = this.playerHP - (Math.floor(Math.random(2)+5));
		var x2 = this.playerHP;
		this.labelScore1.text = this.playerHP;
	}

	if(this.input.left.isDown){
		if(this.defense < 6){
		this.defense = this.defense+1.5;
		}
		this.playerHP = this.playerHP - (Math.floor(Math.random(2)+4));
		this.labelScore1.text = this.playerHP;
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
game.state.start('bmain');
