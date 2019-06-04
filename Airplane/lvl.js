		var player = {
			left: 450,
			top: 620
		}

		var enemies = [
			{left: 350, top: 200},
			{left: 250, top: 300},
			{left: 150, top: 350},
			{left: 550, top: 150},
			{left: 650, top: 100},
			{left: 450, top: 250}
		]
		var missiles = [];
		//player animation
		function drawPlayer(){
			content = '<div class="player" style="left:'+player.left+'px; top: '+player.top+'px"></div>';
			document.getElementById('players').innerHTML = content;

		}
		drawPlayer();
		//enemies animation
		function drawEnemies(){
			content = "";
			console.log(enemies);
			for(var idx=0; idx<enemies.length; idx++){
				content += '<div class="enemy" style="left:'+enemies[idx].left+'px; top: '+enemies[idx].top+'px"></div>';
				document.getElementById('enemies').innerHTML = content;
			}
		}
		drawEnemies()

		function moveEnemies(){
			for(var idx=0; idx<enemies.length; idx++){
				if (enemies[idx].top != 620){
				enemies[idx].top += 10;}
				
			}
		}
		moveEnemies();

		//player movement
		document.onkeydown = function(e) {
			console.log(e);
			if(e.keyCode == 37){//left
				if(player.left != 0){
				player.left -= 10}
			}

			if(e.keyCode == 39){//right
				if(player.left != 800){
				player.left += 10}
			}
			if(e.keyCode == 40){//down
				if (player.top != 620){
				player.top += 10}
			}
			if(e.keyCode == 38){//up
				if (player.top != 550){
				player.top -= 10}
			}
			if(e.keyCode == 32){//missiles
				missiles.push({left:player.left+34, top:player.top-8});
				drawMissiles();
			}
			drawPlayer();
			
		}

		function drawMissiles(){
			var content = ""
			console.log(missiles);
			for(var idx=0; idx<missiles.length; idx++){
				content += '<div class="missiles" style="left:'+missiles[idx].left+'px; top: '+missiles[idx].top+'px"></div>';
				document.getElementById('missiles').innerHTML = content;
				
			}

		}
		function moveMissiles() {
    		for(var idx = 0; idx < missiles.length; idx++) {
        		missiles[idx].top -= 20;
   			}
   			
		}

		function gameLoop(){
			console.log("gameLoop is running!")

			drawPlayer();

			moveMissiles();
			drawMissiles();

			moveEnemies();
			drawEnemies();

			
			setTimeout(gameLoop, 500);
			
		}
		gameLoop();



	
