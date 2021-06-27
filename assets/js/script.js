const game = ()=> {
    let pScore = 0;
    let cScore = 0;
    //Play Game
    const playGame = ()=> {
        const options = document.querySelectorAll(".options");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        //Computer Random Choice
        const computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        options.forEach(option => {
            option.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random() * 5);
                const computerChoice = computerOptions[computerNumber];
                

                //Update images on choice
                playerHand.src = `./assets/images/${this.textContent}.png`;
                computerHand.src = `./assets/image/${computerChoice}.png`;
            });
        });
    };
    
    const compareHands = (playerChoice, computerChoice) => {
        //Update Outcome
        const winner = document.querySelector('.outcome');
        //Check for a draw
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a draw';
            return;
        }
    }

    //Configure what each choice can beat
    const config = {
        //Rock
        rock: {
          name: 'rock',
          winsOver: [
            'scissors',
            'lizard'
          ]
        },
        //Paper
        paper: {
            name: 'paper',
            winsOver: [
                'rock',
                'spock'
            ]
        },
        //Scissors
        scissors: {
            name: 'scissors',
            winsOver: [
                'paper',
                'lizard'
            ]
        },
        //Lizard
        lizard: {
            name: 'lizard',
            winsOver: [
                'paper',
                'spock'
            ]
        },
        //Spock
        spock: {
            name: 'spock',
            winsOver: [
                'rock',
                'scissors'
            ]
        }
    };

    playGame();
}
game();
