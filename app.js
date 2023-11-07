const OPTIONS = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    return OPTIONS[Math.floor(((Math.random() * 3)))]
}
let gameBtn = document.querySelectorAll('.gameBtn')
console.log(gameBtn)
let body = document.querySelector('body')
let div = document.createElement('div')
body.appendChild(div)
let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    player = OPTIONS.findIndex((element) => element === playerSelection)
    computer = OPTIONS.findIndex((element) => element === computerSelection)
    
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

gameBtn.forEach(btn => {
    btn.addEventListener('click', function(){
        computerSelection = getComputerChoice()
        div.textContent = playRound(this.textContent, computerSelection)
    })})
