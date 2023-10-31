const options = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    return options[Math.floor(((Math.random() * 3)))]
}

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    player = options.findIndex((element) => element === playerSelection)
    computer = options.findIndex((element) => element === computerSelection)
    
    if(player == computer +1 | player == computer - 2){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }

    else if(player == computer){
        return `Draw! you both had ${playerSelection}`
    }

    else{
        return `You loose!  ${computerSelection} beats ${playerSelection}`
    }
}

function game(){
    for( let i = 0; i<5; i++){
        playerSelection = prompt()
        computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
}
game()