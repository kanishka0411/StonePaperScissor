
function getComputerChoice(){
    let choice=Math.floor(Math.random()*3)+1;
    if(choice==1){
        return 'rock';
    }else if(choice==2){
        return 'paper';
    }else{
        return 'scissors';
    }

}

function getHumanChoice(){
    while(true){
        const choice=prompt("Make a choice between 'Rock','Paper', or 'Scissors.");
        if(choice==null){
            alert("Game cancelled");
            return null;
        }

        const forChoice=choice.toLowerCase();
        if(forChoice=='rock' || forChoice=='paper' || forChoice=='scissors'){
            return forChoice;
        }else{
            alert("Invalid Input! Please enter 'Rock','Paper', or 'Scissors.");
        }
    }

}

function playRound(humanChoice,computerChoice){
    if(humanChoice==computerChoice){
        console.log(`It's a tie both chose ${humanChoice}.`);
        return `tie`;
    }

    switch(humanChoice){
        case `rock`:
            if(computerChoice==`scissors`){
                console.log(`You win , rock beats scissors`);
                return `win`;
            }else{
                console.log(`You lose!Paper beats rock`);
                return `lose`;
            }
        case `paper`:
            if(computerChoice=='rock'){
                console.log(`You win! Paper beats rock`);
                return `win`;
            } else{
                console.log(`You lose,scissors beats paper`);
                return `lose`;
            }   
        case `scissors`:
            if(computerChoice==`paper`){
                console.log(`You win! scissors beats paper`);
                return `win`;
            } else{
                console.log(`You lose!Rock beats scissors`);
                return `lose`;
            }   
    }
}


function playGame(){
    let humanScore=0;
    let computerScore=0;
    for(let i=1;i<=5;i++){
        console.log(`Round ${i}`);
        const humanChoice=getHumanChoice();
        if(humanChoice==null) return; 

        const computerChoice=getComputerChoice();
        const result=playRound(humanChoice,computerChoice);

        if(result==`win`){
            humanScore++;
        }else if(result==`lose`){
            computerScore++;
        }

        console.log(`Current Score: You-${humanScore},computer-${computerScore}`);
        console.log("---------------------");
    }

    console.log("Game Over!");
    console.log(`Final Score:You-${humanScore},computer-${computerScore}`);

    if(humanScore>computerScore){
        console.log("Congratulations,you are the overall winner!");
    }else if(humanScore<computerScore){
        console.log("The  computer is overll winner.Better luck next time");
    }else{
        console.log("It's a tie overall");
    }
}

playGame();
