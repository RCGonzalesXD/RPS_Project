
const choices = ['Rock', 'Paper', 'Scissor']

function playRound(playerSelection){
    
    const player = playerSelection.toUpperCase();

    const computer = choices[getRandomInt(3)].toUpperCase();

    console.log(player, computer);

    if (player == computer){
        return "Draw"
    }
    else if (player == 'ROCK' && computer == 'SCISSOR'){
        return "You Win"
    }
    else if (player == 'ROCK' && computer == 'PAPER'){
        return "You Lose"
    }
    else if (player == 'PAPER' && computer == 'ROCK'){
        return "You Win"
    }
    else if (player == 'PAPER' && computer == 'SCISSOR'){
        return "You Lose"
    }
    else if (player == 'SCISSOR' && computer == 'PAPER'){
        return "You Win"
    }
    else if (player == 'SCISSOR' && computer == 'ROCK'){
        return "You Lose"
    }
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const playerChoice = prompt('Play a game and Type: Rock, Paper or Scissor')
const result = playRound(playerChoice)
console.log(result)