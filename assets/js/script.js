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
// Configure the level of difficulty
const LEVEL_CONFIG = {
    easy: [OPTION_CONFIG.rock, OPTION_CONFIG.paper, OPTION_CONFIG.scissors],
    medium: [OPTION_CONFIG.rock, OPTION_CONFIG.paper, OPTION_CONFIG.scissors, OPTION_CONFIG.lizard],
    hard: [OPTION_CONFIG.rock, OPTION_CONFIG.paper, OPTION_CONFIG.scissors, OPTION_CONFIG.lizard, OPTION_CONFIG.spock]
};
// Declare score of both players
const game = ()=> {
    let playerScore = 0;
    let computerScore = 0;
};