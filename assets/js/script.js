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
const LEVEL_CONFIG = {
    easy: ['rock', 'paper', 'scissors'],
    medium: [],
    hard: []
};
const game = ()=> {
    let pScore = 0;
    let cScore = 0;
    //Play Game
    const playGame = (level)=> {
        const options = LEVEL_CONFIG[level];
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //Computer Random Choice
        const computerOptions = LEVEL_CONFIG[level];
        const optionContainer = document.getElementsByClassName('options-outer')[0];
//         const optionNodes = document.querySelector(".options");
        options.forEach(option => {
            // Creation an option for that
            const optionNode = document.createElement('div');
            optionNode.innerHTML = `<div class="box">
                    <button data-type="${option}">
                        <img src="assets/images/${option}.png" class="options" alt="The hand sign for ${option}" data-ol-has-click-handler="">
                    </button>
                    <p>${option}</p>
                </div>`;
            optionContainer.appendChild(optionNode);
            optionNode.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random() * 5);
                const computerChoice = computerOptions[computerNumber];
                //Update images on choice
                playerHand.src = `./assets/images/${option}.png`;
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
    playGame("easy");
}
game();