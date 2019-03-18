let Rock = document.getElementById('Rock').addEventListener('click', run);
let Paper = document.getElementById('Paper').addEventListener('click', run);
let Scissors = document.getElementById('Scissors').addEventListener('click', run);

// //globals for game players
let computerChoice;
let playerChoice;

let player = document.getElementById('player');
let computer = document.getElementById('computer');
let results = document.getElementById('results');

//function to run game
function run() {
    playerChoice = this.innerText;
    computerGuess();
    compare();
};

//computer Guess function
function computerGuess() {
  computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = 'Rock';
    } else if (computerChoice <= 0.67) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    // console.log(computerChoice);
}
// computerGuess();


//compare Function
function compare (){
    player.innerHTML = 'Player: ' + playerChoice;
    computer.innerHTML = 'Computer: ' + computerChoice;
    results.innerHTML = 'Game Over: ' + results;

    if(playerChoice === computerChoice){
        results.innerHTML = 'Tie!';
    }else if(playerChoice === 'Rock' && computerChoice === 'Paper'){
        results.innerHTML = 'You Lose!';
    }else if( playerChoice === 'Rock' && computerChoice === 'Scissors'){
        results.innerHTML = 'You Win!';
    }else if(playerChoice === 'Paper' && computerChoice === 'Rock'){
        results.innerHTML = 'You Win!';

    }else if(playerChoice === 'Paper' && computerChoice === 'Scissors'){
        results.innerHTML = 'You Lose!';
    }else if(playerChoice === 'Scissors' && computerChoice === 'Rock'){
        results.innerHTML = 'You Lose!'
    }else if(playerChoice === 'Scissors' && computerChoice === 'Paper'){
        results.innerHTML = 'You Win!';
    }
}
