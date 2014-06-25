  var player, computer, wins, compare;
   
  // writing out pseudo code helped me to come up with this!
  function Challenger (name) {
  	this.name = name,
  	this.heads = 0,
  	this.flip = function () {
  		if(Math.random() > 0.49) {
  			this.heads = this.heads + 1;  
  		}
  	}
  }
   
  // jQuery I just added to make the introduction fade out
  // added ability to name the contestants
  //player = new Challenger (prompt("What is your name?")); 
  computer = new Challenger (prompt("What is your opponents name?"));
   
  wins = 3;
   
  while (player.heads < wins && computer.heads < wins) {
  	player.flip();
  	computer.flip();

    console.log(player.name + ": " + player.heads + " vs " + computer.name + ": " + computer.heads)
  }

  // declaring the winner
  compare = function () {
  	if(player.heads === computer.heads) {
  		console.log("We have a tie!");
  	} else if(player.heads > computer.heads) {
  		console.log(player.name + " wins the game!");
  		} else {
  			console.log(computer.name + " wins the game! Bugga!")
  			}
  }
   
  compare();
   
