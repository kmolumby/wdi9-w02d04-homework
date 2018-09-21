
// const game = [
    


//     console.log(deck);
    
//     cardsInPlay: [],
// 	computerPoints: 0,
// 	playerPoints: 0,
// 	currentRound: 1,
// 	playerRounds: 0,
// 	roundsWonByComputer: 0,
//     computerHand: [],
//     playerHand: [],

    
//     deal () {
      
//         let randomCard = Math.floor(Math.random()*this.deck.length);
//         console.log(randomCard)
//     }

// ]
//         let cardDealt = this.deck.splice(randomCard,1);
//         return cardDealt;
// console.log(cardDealt);  
//     console.log()


//     dealCards () {
//         for (let i = 0; i < 3; i++) {
//             let playerCard = this.deal();
//             let computerCard = this.deal;
//             this.playerHand.push(playerCard);
//             this.computerHand.push(computerCard);
//             this.cardsInPlay.push(playerCard, computerCard);
//             console.log(`These are the cards in play ${this.cardsInPlay}`);
//         }
// //      }

//     // };
//     }

  

       const game = {
           
        deck : [
                {name: "Bulbasaur", damage: 60}, 
                {name: "Caterpie", damage: 40}, 
                {name: "Charmander", damage: 60}, 
                {name: "Clefairy", damage: 50}, 
                {name: "Jigglypuff", damage: 60}, 
                {name: "Mankey", damage: 30}, 
                {name: "Meowth",damage: 60}, 
                {name: "Nidoran - female", damage: 60}, 
                {name: "Nidoran - male", damage: 50}, 
                {name: "Oddish", damage: 40}, 
                {name: "Pidgey", damage: 50}, 
                {name: "Pikachu", damage: 50}, 
                {name: "Poliwag", damage: 50}, 
                {name: "Psyduck", damage: 60}, 
                {name: "Rattata", damage: 30}, 
                {name: "Squirtle",damage: 60}, 
                {name: "Vulpix", damage: 50},
                {name: "Weedle", damage: 40}
            ],


            //place holders for keys that will be used in functions
           
            cardsInPlay: [],
            computerPoints: 0,
            playerPoints: 0,
            currentRound: 1,
            playerRounds: 0,
            roundsWonByComputer: 0,
            computerHand: [],
            playerHand: [],

            // initial deal function that generates a random card
       
        
        dealRandomCard () {
      
                    let randomCard = Math.floor(Math.random()*this.deck.length);
                    let cardDealt = this.deck.splice(randomCard,1)[0];
                    return cardDealt;
                    },

            
            // Deals 3 cards to each player and puts it into a player hand array

            dealCards () {
            for (let i = 0; i < 3; i++) {
                let playerCard = this.dealRandomCard();
                let computerCard = this.dealRandomCard();
                this.playerHand.push(playerCard);
                this.computerHand.push(computerCard);
                console.log(`Player has ${this.playerHand}) and computer has ${this.computerHand}`);
            } 
        },      
        
        // how actual game play happens in the round
      roundGamePlay () {
            let playerCard = this.playerHand.pop();
            let computerCard = this.computerHand.pop();
            console.log(`Player is playing${playerCard} and computer is playing ${this.computerCard}`);
            if (playerCard.damage > computerCard.damage) {
                this.playerPoints++;
            } else if (playerCard.damage < computerCard.damage) {
                this.computerPoints++;
               
            }
         },

            playRound() {
            this.dealCards();
            this.roundGamePlay();
            this.roundGamePlay();
            this.roundGamePlay();
    
        },


      playGame () {
        while ( this.deck.length > 5) {
            this.playRound();
        }
      }
    }
    
    game.playGame();

