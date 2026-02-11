function getComputerChoice(){
    let ch = Math.random();
    if(ch<0.34) return "ROCK";
    else if(ch>=0.34 && ch<0.67) return "SCISSORS";
    else return"PAPER";
}
function getHumanChoice(){
    let ch = prompt("Enter your Choice : ");
    return ch.toUpperCase();
}

let humanScore =0;
let computerScore = 0;


function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if((humanChoice==='PAPER' && computerChoice==='ROCK')|| (humanChoice==='ROCK' && computerChoice==='SCISSORS') || (humanChoice==='SCISSORS' && computerChoice==='PAPER')){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if((humanChoice==='PAPER' && computerChoice==='SCISSORS')|| (humanChoice==='ROCK' && computerChoice==='PAPER') || (humanChoice==='SCISSORS' && computerChoice==='ROCK')){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else{
        console.log(`Draw! Both ${humanChoice}`);
        humanScore++;
        computerScore++;
    }
}

function playGame(){
    for(i=0;i<5;i++){
        
        console.log('Round'+ (i+1));
        playRound();
        console.log(`You : ${humanScore}  Computer : ${computerScore}`);

    }
    if(humanScore>computerScore) console.log('You Won the game');
    else console.log('Computer Won the game');
    humanScore=0;
    computerScore=0;
}

