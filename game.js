const choices = ["paper", "rock", "scissors"];

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
                break;
                case "rock":
                    document.getElementById("result").innerHTML = "Paper beats Rock! You Win!";
                    console.log(playerChoice + " beats " + cpuChoice + "! You Win!");
                break;
                case "scissors":
                    document.getElementById("result").innerHTML = "Scissors beats Paper! You Lose!";
                    console.log(cpuChoice + " beats " + playerChoice + "! You lose!");
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
                break;
                case "rock":
                    document.getElementById("result").innerHTML = "Rock versus Rock! A tie!";
                    console.log(cpuChoice + " and " + playerChoice + " tie!");
                break;
                case "scissors":
                    document.getElementById("result").innerHTML = "Rock beats Scissors! You Win!";
                    console.log(playerChoice + " beats " + cpuChoice + "! You win!");
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
                break;
                case "rock":
                    document.getElementById("result").innerHTML = "Rock beats Scissors! You Lose!";
                    console.log(cpuChoice + " beats " + playerChoice + "! You lose!");
                break;
                case "scissors":
                    document.getElementById("result").innerHTML = "Scissors versus Scissors! A tie!";
                    console.log(cpuChoice + " and " + playerChoice + " tie!");
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