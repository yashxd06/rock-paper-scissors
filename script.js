function getComputerChoice(){
    let ch = Math.random();
    if(ch<0.34) return "Rock";
    else if(ch>=0.34 && ch<0.67) return "Scissors";
    else return"Paper";
}

const choices = document.querySelector(".options");

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const humanScoreUI = document.querySelector("#human-score");
const computerScoreUI = document.querySelector("#comp-score");
const roundWinnerUI = document.querySelector(".result");
const gameWinnerUI = document.querySelector(".final");

//Clicking on any of the Options initiate the start of a round
choices.addEventListener('click',(event)=>{
    if(gameOver) return;
    if(event.target.tagName!=="BUTTON") return;
    let humanChoice = event.target.textContent;
    let computerChoice = getComputerChoice();
    let winner = playRound(humanChoice,computerChoice);
    updateScore(winner);

});

function playRound(humanChoice,computerChoice){
    if((humanChoice==='Paper' && computerChoice==='Rock')|| (humanChoice==='Rock' && computerChoice==='Scissors') || (humanChoice==='Scissors' && computerChoice==='Paper')){
        return "Human";
    }
    else if((humanChoice==='Paper' && computerChoice==='Scissors')|| (humanChoice==='Rock' && computerChoice==='Paper') || (humanChoice==='Scissors' && computerChoice==='Rock')){
        return "Computer";
    }
    else{
        return "draw";
    }
}

function updateScore(winner){
    if(winner === "Human") humanScore++;
    else if(winner === "Computer") computerScore++;
    console.log(`You: ${humanScore}  Computer: ${computerScore}`);
    updateUI(winner);
    checkGameOver();
}

function updateUI(winner){
    humanScoreUI.textContent = humanScore;
    computerScoreUI.textContent = computerScore;
    if(winner==="draw")
        roundWinnerUI.textContent = "The Round was a Draw!!";
    else
        roundWinnerUI.textContent = `${winner} has WON this Round!!`;
}

function checkGameOver(){
    if(humanScore===5 || computerScore===5){
        let winner='';
        humanScore>computerScore? winner="You" : winner="Computer";
        gameWinnerUI.textContent = `${winner} WON this GAME`;
        gameOver = true;
    }
}

const playAgain = document.querySelector('.reset');

playAgain.addEventListener('click',resetGame);

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    humanScoreUI.textContent = humanScore;
    computerScoreUI.textContent = computerScore;
    roundWinnerUI.textContent = 'Pick a choice to start the GAME';
    gameWinnerUI.textContent = '';
    gameOver = false;
}





