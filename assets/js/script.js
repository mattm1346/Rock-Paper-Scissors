//Create objects for each option and say what each winsover
const optionList = {
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
const levelSelect = {
    easy: [optionList.rock, optionList.paper, optionList.scissors],
    medium: [optionList.rock, optionList.paper, optionList.scissors, optionList.lizard],
    hard: [optionList.rock, optionList.paper, optionList.scissors, optionList.lizard, optionList.spock]
};
//Declare score of both players
function game (){
    let playerScore = 0;
    let computerScore = 0;

    //Assign hands
    function playGame(level) {
        const options = levelSelect[level];
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //Computer options
        const computerOptions = levelSelect[level];
        const optionContainer = document.getElementsByClassName('options-outer')[0];
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
                const computerNumber = Math.floor(Math.random() * levelSelect[level].length);
                const computerChoice = computerOptions[computerNumber];
                //Update images on choice
                playerHand.src = `./assets/images/${option.name}.png`;
                computerHand.src = `./assets/images/${computerChoice.name}.png`;
                compareHands(option, computerChoice);
            });
        });
    };
    //Select level function from html level selector
    function getLevelFromURLParam() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get('level');
    }
    //Find out if level is valid if false then return to index page
    function isLevelValid(level) {
        const validLevels = Object.keys(levelSelect);
        if(validLevels.includes(level)) {
            return true;
        } else {
            return false;
        }
    }
    const level = getLevelFromURLParam();
    if(isLevelValid(level)) {
    playGame(level);
    } else {
    window.location.href='./';
    }
    //Update scores
    function updateScores() {
        document.getElementById('player-score').innerText = playerScore;
        document.getElementById('comp-score').innerText = computerScore;
    }
    //Compare hands
    const compareHands = (playerChoice, computerChoice) => {
        //Update Outcome
        const winner = document.querySelector('.outcome');
        //Check for a draw
        if(playerChoice.name === computerChoice.name){
            winner.textContent = 'It is a draw';
            return;
        }
        //Check for a winner
        if(playerChoice.winsOver.includes(computerChoice.name)){
            winner.textContent = 'Player Wins';
            playerScore++;
            updateScores();
        }else{
            winner.textContent = 'Computer Wins';
            computerScore++;
            updateScores();
        }
        checkForGameOver();
        return;
    }
    //Check score limit reaches 5 if true reset to 0
    function checkForGameOver(){
        playerScore
        computerScore
        if(playerScore === 5){
            alert('Congratulations! You won');
            playerScore = 0;
            computerScore = 0;
            return;
        }
        if(computerScore === 5){
            alert('Bad luck, you lost. Try again?');
            playerScore = 0;
            computerScore = 0;
            return;
        }
    }
};
//Call game function
game();
