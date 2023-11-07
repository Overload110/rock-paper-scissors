const choices = ["paper", "rock", "scissors"];
let wins = 0
let losses = 0
let rounds = 0

function playGame(){
    let radioChoice = document.querySelector('input[name="choice"]:checked');
    let playerChoice = radioChoice.value
    let cpuChoice = chooseCpu();

    switch(playerChoice){
        case "paper":
            switch(cpuChoice){
                case "paper":
                    document.getElementById("result").innerHTML = "Paper versus Paper! A tie!";
                    console.log(cpuChoice + " and " + playerChoice + " tie!");
                    checkRound();
                break;
                case "rock":
                    document.getElementById("result").innerHTML = "Paper beats Rock! You Win!";
                    console.log(playerChoice + " beats " + cpuChoice + "! You Win!");
                    wins++;
                    checkRound();
                break;
                case "scissors":
                    document.getElementById("result").innerHTML = "Scissors beats Paper! You Lose!";
                    console.log(cpuChoice + " beats " + playerChoice + "! You lose!");
                    losses++;
                    checkRound();
                break;
                default:
                     console.log("Broke it differently.")
            }
            break;
        case "rock":
            switch(cpuChoice){
                case "paper":
                    document.getElementById("result").innerHTML = "Paper beats Rock! You Lose!";
                    console.log(cpuChoice + " beats " + playerChoice + "! You lose!");
                    losses++;
                    checkRound();
                break;
                case "rock":
                    document.getElementById("result").innerHTML = "Rock versus Rock! A tie!";
                    console.log(cpuChoice + " and " + playerChoice + " tie!");
                    checkRound();
                break;
                case "scissors":
                    document.getElementById("result").innerHTML = "Rock beats Scissors! You Win!";
                    console.log(playerChoice + " beats " + cpuChoice + "! You win!");
                    wins++;
                    checkRound();
                break;
                default:
                     console.log("Broke it differently.")
            }
            break;

        case "scissors":
            switch(cpuChoice){
                case "paper":
                    document.getElementById("result").innerHTML = "Scissors beats Paper! You Win!";
                    console.log(playerChoice + " beats " + cpuChoice + "! You win!");
                    wins++;
                    checkRound();
                break;
                case "rock":
                    document.getElementById("result").innerHTML = "Rock beats Scissors! You Lose!";
                    console.log(cpuChoice + " beats " + playerChoice + "! You lose!");
                    losses++;
                    checkRound();
                break;
                case "scissors":
                    document.getElementById("result").innerHTML = "Scissors versus Scissors! A tie!";
                    console.log(cpuChoice + " and " + playerChoice + " tie!");
                    checkRound();
                break;
                default:
                     console.log("Broke it differently.")
            }
            break;
        default:
            console.log("Broke it.")
    }
}

function chooseCpu(){
    let rando = Math.floor(Math.random() * 3) 
    let choice = choices[rando];
    //console.log(rando)
    return choice;
}

function checkRound(){
    rounds++;
    if (rounds >= 5){

        if(wins > losses){
            document.getElementById("rounds").innerHTML = wins + " and " + losses + " losses! Congradulations you win!";
        }else if(wins < losses){
            document.getElementById("rounds").innerHTML = wins + " and " + losses + " losses! Sorry, you lose!";
        }else{
            document.getElementById("rounds").innerHTML = "Tied with " +wins + " and " + losses + " losses!";
        }
        rounds = 0;
        wins = 0;
        losses = 0;
    }else{
        document.getElementById("rounds").innerHTML = " "
    }

}