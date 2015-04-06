function solve (str) {

	String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
	var ds = "#";
	var numOfJumps = parseInt(str[0]);
	var track = parseInt(str[1]);
	var playerOne = str[2].split(", ");
	var playerTwo = str[3].split(", ");
	var playerThree = str[4].split(", ");
	var playerFour = str[5].split(", ");

	var dots = Array(track).join(".");

	var playerOneJump = parseInt(playerOne[1]);
	var playerTwoJump = parseInt(playerTwo[1]);
	var playerThreeJump = parseInt(playerThree[1]);
	var playerFourJump = parseInt(playerFour[1]);

	var playerOneStart = 1;
	var playerTwoStart = 1;
	var playerThreeStart = 1;
	var playerFourStart = 1;

	console.log(Array(track + 1 ).join("#"));
	console.log(Array(track + 1 ).join("#"));
		for (var j = 0; j < track; j++) {
			playerOneStart += playerOneJump;
			if (playerOneStart >= track) {
				console.log(dots.replaceAt(playerOneStart,playerOne[0].charAt(0).toUpperCase()));
				console.log(dots.replaceAt(playerTwoStart,playerTwo[0].charAt(0).toUpperCase()));
				console.log(dots.replaceAt(playerThreeStart,playerThree[0].charAt(0).toUpperCase()));
				console.log(dots.replaceAt(playerFourStart,playerFour[0].charAt(0).toUpperCase()));
				console.log(Array(track + 1 ).join("#"));
				console.log(Array(track + 1 ).join("#"));
				console.log("Winner: " + playerOne[0]);
				break;
			};
			playerTwoStart += playerTwoJump
			if (playerTwoStart >= track) {
				console.log(dots.replaceAt(playerOneStart,playerOne[0].charAt(0).toUpperCase()));
				console.log(dots.replaceAt(playerTwoStart,playerTwo[0].charAt(0).toUpperCase()));
				console.log(dots.replaceAt(playerThreeStart,playerThree[0].charAt(0).toUpperCase()));
				console.log(dots.replaceAt(playerFourStart,playerFour[0].charAt(0).toUpperCase()));
				console.log(Array(track + 1 ).join("#"));
				console.log(Array(track + 1 ).join("#"));
				console.log("Winner: " + playerTwo[0]);
				break;
			};
			playerThreeStart += playerThreeJump
			if (playerThreeStart >= track) {
				console.log(dots.replaceAt(playerOneStart,playerOne[0].charAt(0).toUpperCase()));
				console.log(dots.replaceAt(playerTwoStart,playerTwo[0].charAt(0).toUpperCase()));
				console.log(dots.replaceAt(playerThreeStart,playerThree[0].charAt(0).toUpperCase()));
				console.log(dots.replaceAt(playerFourStart,playerFour[0].charAt(0).toUpperCase()));
				console.log(Array(track + 1 ).join("#"));
				console.log(Array(track + 1 ).join("#"));
				console.log("Winner: " + playerThree[0]);
				break;
			};
			playerFourStart += playerFourJump
			if (playerFourStart >= track) {
				console.log(dots.replaceAt(playerOneStart,playerOne[0].charAt(0).toUpperCase()));
				console.log(dots.replaceAt(playerTwoStart,playerTwo[0].charAt(0).toUpperCase()));
				console.log(dots.replaceAt(playerThreeStart,playerThree[0].charAt(0).toUpperCase()));
				console.log(dots.replaceAt(playerFourStart,playerFour[0].charAt(0).toUpperCase()));
				console.log(Array(track + 1 ).join("#"));
				console.log(Array(track + 1 ).join("#"));
				console.log("Winner: " + playerFour[0]);
				break;
			};
		};
}

solve(['10','19','angel, 9','Boris, 10','Georgi, 3','Dimitar, 7'])