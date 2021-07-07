const OPTION_CONFIG = {
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
//Configure the level of difficulty
const LEVEL_CONFIG = {
    easy: [OPTION_CONFIG.rock, OPTION_CONFIG.paper, OPTION_CONFIG.scissors],
    medium: [OPTION_CONFIG.rock, OPTION_CONFIG.paper, OPTION_CONFIG.scissors, OPTION_CONFIG.lizard],
    hard: [OPTION_CONFIG.rock, OPTION_CONFIG.paper, OPTION_CONFIG.scissors, OPTION_CONFIG.lizard, OPTION_CONFIG.spock]
};
//Declare score of both players
const game = ()=> {
    let playerScore = 0;
    let computerScore = 0;
    //Assign hands
    const playGame = (level)=> {
        const options = LEVEL_CONFIG[level];
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //Computer options
        const computerOptions = LEVEL_CONFIG[level];
        const optionContainer = document.getElementsByClassName('options-outer')[0];
        const optionNodes = document.querySelector(".options");
        options.forEach(option => {
            const optionNode = document.createElement('div');
            optionNode.innerHTML = `<div class="box">
                    <button data-type="${option.name}">
                        <img src="assets/images/${option.name}.png" class="options" alt="The hand sign for ${option.name}">
                    </button>
                    <p>${option.name}</p>
                </div>`;
                //Computer random choice
                optionContainer.appendChild(optionNode);
                //Event listener for clicking on options
                optionNode.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random() * LEVEL_CONFIG[level].length);
                const computerChoice = computerOptions[computerNumber];
                //Update images on choice
                playerHand.src = `./assets/images/${option.name}.png`;
                computerHand.src = `./assets/images/${computerChoice.name}.png`;
                compareHands(option, computerChoice)
            });
        });
    };
    //Compare hands
    const compareHands = (playerChoice, computerChoice) => {
        //Update Outcome
        const winner = document.querySelector('.outcome');
        //Check for a draw
        if(playerChoice.name === computerChoice.name){
            winner.textContent = 'It is a draw';
            return;
        };
        //Check for a winner
        if(playerChoice.winsOver.includes(computerChoice.name)){
            winner.textContent = 'Player Wins';
            playerScore++;
            return;
        }else{
            winner.textContent = 'Computer Wins';
            computerScore++;
            return;
        } 
    };
    //Update scores
    function updateScores() {
        document.getElementById("player-score").innerText = playerScore
        document.getElementById("comp-score").innerText = computerScore
    };
    updateScores();
    //Select level function from html level selector
    function getLevelFromURLParam() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get('level');
    }
    //Find out if level is valid if false then return to index page
    function isLevelValid(level) {
        const validLevels = Object.keys(LEVEL_CONFIG);
        return validLevels.includes(level) ? true : false;
    }
    const level = getLevelFromURLParam();
    if(isLevelValid(level)) {
    playGame(level);
    } else {
    window.location.href='./';
    }
    
};
//Call game function
game();
