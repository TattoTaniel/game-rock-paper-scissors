const game = {
    playerChoice: '',
    aiChoice: '',
}

const gameSummary = {

    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const btn = document.querySelector('.start')
const options = document.querySelectorAll('img')

const spanPlayer = document.querySelector('.player-choice')
const spanAi = document.querySelector('.ai-choice')
const spanResult = document.querySelector('.who-wins')

const spanNumbers = document.querySelector('.number span')
const spanWins = document.querySelector('.wins span')
const spanLosses = document.querySelector('.losses span')
const spanDraws = document.querySelector('.draws span')

const playerSelection = function (e) {


    e.preventDefault()
    options.forEach((option) => option.style.boxShadow = '')
    e.target.style.boxShadow = '0 0 0 4px red'
    game.playerChoice = e.target.dataset.option

}

function aiChoice() {

    const index = Math.floor(Math.random() * options.length)
    return options[index].dataset.option;
}

function checkResult(player, ai) {

    if (player === ai) {
        return 'draw'
    } else if ((player === 'nozyce' && ai === 'papier') || (player === 'papier' && ai === 'kamien') || (player === 'kamien' && ai === 'nozyce')) {
        return 'win'
    } else {
        return 'loss'
    }

}

function publishResult(player, ai, result) {
    spanPlayer.textContent = player
    spanAi.textContent = ai
    spanNumbers.textContent = ++gameSummary.numbers

    if (result === 'win') {
        spanWins.textContent = ++gameSummary.wins
        spanResult.textContent = "Win"
        spanResult.style.color = 'green'
    } else if (result === 'loss') {
        spanLosses.textContent = ++gameSummary.losses
        spanResult.textContent = "Loser"
        spanResult.style.color = 'red'

    } else {
        spanDraws.textContent = ++gameSummary.draws
        spanResult.textContent = "Remis/"
        spanResult.style.color = 'blue'
    }
}

function endGame() {
    game.aiChoice = ''
    game.playerChoice = ''
    options.forEach((option) => option.style.boxShadow = '')
}

function startGame() {

    if (!game.playerChoice) {
        return alert('Wybierz cokolwiek')
    }
    game.aiChoice = aiChoice()

    const gameResult = checkResult(game.playerChoice, game.aiChoice)

    publishResult(game.playerChoice, game.aiChoice, gameResult)
    endGame()

}

options.forEach((option) => option.addEventListener('click', playerSelection))
btn.addEventListener('click', startGame)
