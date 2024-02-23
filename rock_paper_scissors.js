const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let random_pick = Math.floor(Math.random() * choices.length)
    return choices[random_pick]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (!choices.includes(playerSelection)) {
        return `${playerSelection} is not a valid choice!`
    }
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === computerSelection) return "You Tied!"
    if (
        (playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    return `You Win! ${playerSelection} beats ${computerSelection}`
}

function playGame(window) {
    let playerSelection = window.document.getElementById("playerSelection").value
    let computerSelection = getComputerChoice()
    window.document.getElementById("results").innerHTML=playRound(playerSelection, computerSelection)
}
