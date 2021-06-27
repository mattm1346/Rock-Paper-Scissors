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

    playGame();
}
game();
