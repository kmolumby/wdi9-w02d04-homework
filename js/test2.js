const player = {
	hand: [],
}

const computer = {
	hand: [],
}


const game = {
	deck: [
		{name: "Bulbasaur", damage:60}, 
		{name: "Caterpie", damage:40},
		{name: "Charmander", damage:60},
		{name: "Clefairy", damage:50},
		{name: "Jigglypuff", damage:60},
		{name: "Mankey", damage:30},
		{name: "Meowth", damage:60},
		{name: "Nidoran - female", damage:60},
		{name: "Nidoran - male", damage:50},
		{name: "Oddish", damage:40},
		{name: "Pidgey", damage:50},
		{name: "Pikachu", damage:50},
		{name: "Poliwag", damage:50},
		{name: "Psyduck", damage:60},
		{name: "Rattata", damage:30}, 
		{name: "Squirtle", damage:60}, 
		{name: "Vulpix", damage:50}, 
		{name: "Weedle", damage:40}
	],

	cardsPlayed: [],
	computerPoints: 0,
	playerPoints: 0,
	currentRound: 1,
	roundsWonByPlayer: 0,
	roundsWonByComputer: 0,
    computerHand: [],
    playerCardDealt: [],
    computerCardDealt: [],
	
	deal() {
        
		let randomIndex = Math.floor(Math.random() * this.deck.length);
		let dealtCard = this.deck.splice(randomIndex, 1)[0];
		return dealtCard;	
	},

	playRound() {
        this.dealCards();
        // $('body').append("<h3>THE BATTLE BEGINS</h3>");
		this.battle();
		this.battle();
		this.battle();
		this.endRound();
	},

	playPokemon() {
		
		while(this.deck.length > 5) {
			this.playRound();
		}
		console.log(`Computer won ${this.roundsWonByComputer} rounds.`);
		console.log(`Player won ${this.roundsWonByPlayer} rounds.`);

	},

	endRound() {
		console.log(`Player has ${this.playerPoints}`);
		console.log(`Computer has ${this.computerPoints}`);
		if (this.playerPoints > this.computerPoints) {
			this.roundsWonByPlayer++;
		} else if (this.computerPoints > this.playerPoints) {
			this.roundsWonByComputer++;
			this.playerPoints = 0;
			this.computerPoints = 0;
			this.currentRound++;
		}	
	},
	
	dealCards() {
		
        // $('body').append("<h3>Dealing Cards</h3>")

		for (let i = 0; i < 3; i++) {
			let playerCardDealt = this.deal();
			let computerCardDealt = this.deal();
			player.hand.push(playerCardDealt);
			computer.hand.push(computerCardDealt);
        }

        // $('body').append(`<button>${this.playerCard}</button>`)

	},
   

	battle() {
		let playerCard = player.hand.splice(0,1)[0];
		let computerCard = computer.hand.splice(0,1)[0];
		console.log(`Player is using ${(playerCard)} and computer is playing ${(computerCard)}`);
		console.log(playerCard);
		if (playerCard.damage > computerCard.damage) {
			this.playerPoints++;
			console.log(`You Won! You have ${this.playerPoints} points`);
		} else if (playerCard.damage < computerCard.damage) {
			this.computerPoints++;
			console.log("You Lost");
			console.log(`Computer has ${this.computerPoints} points.`);
		}
    },
    
};
	game.playPokemon();

// $('.start-game').click(()=>{
//    game.playPokemon()
    

   
// });

console.log(game.dealCards());