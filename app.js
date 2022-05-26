const buttons = document.querySelectorAll('.pushed');
const choiceBlock = document.getElementById('choiceBlock');
const pickedBlock = document.getElementById('pickedBlock');
const btnPlayAgain = document.getElementById('resetGame');
const winner = document.getElementById('winner')
const userSelection = document.getElementById('userSelection');
const computerSelection = document.getElementById('computerSelection');
const userScore = document.getElementById('score');

// Array for random function
const choices = ['paper', 'scissors', 'rock', 'spock', 'lizard'];

// Rules buttons
const btnRulesOpen = document.getElementById('btnRulesOpen');
const btnRulesClose = document.getElementById('btnRulesClose');
const rulesBlock = document.getElementById('rulesBlock');


let score = 0;
let userChoice = undefined;

btnRulesOpen.addEventListener('click', () => {
    rulesBlock.style.display = 'flex';
})

btnRulesClose.addEventListener('click', () => {
    rulesBlock.style.display = 'none';
})

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        userChoice = btn.getAttribute('data-choice');

        checkWinner();
    });
});

btnPlayAgain.addEventListener('click', () => {
    pickedBlock.style.display = 'none';
    choiceBlock.style.display = 'grid';
})

function checkWinner() {
    const computerChoice = pickRandomChoice();

    choiceBlock.style.display = 'none';
    pickedBlock.style.display = 'grid';

    updatePickedBtn(userSelection, userChoice);
    updatePickedBtn(computerSelection, computerChoice);

    if (userChoice === computerChoice) {
        winner.innerText = 'draw'
    } else if (
            userChoice === 'paper' && computerChoice === 'rock'
        || userChoice === 'rock' && computerChoice === 'scissors'
        || userChoice === 'scissors' && computerChoice === 'paper'
        || userChoice === 'rock' && computerChoice === 'lizard'
        || userChoice === 'lizard' && computerChoice === 'spock'
        || userChoice === 'spock' && computerChoice === 'scissors'
        || userChoice === 'lizard' && computerChoice === 'paper'
        || userChoice === 'paper' && computerChoice === 'spock'
        || userChoice === 'scissors' && computerChoice === 'lizard'
        || userChoice === 'spock' && computerChoice === 'rock') {
        updateScore()
        winner.innerText = 'win'
    } else {
        winner.innerText = 'lose'
    }
}

function updateScore() {
    score += 1;

    userScore.innerText = score;
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updatePickedBtn(pickedEl, choice) {
    // reset classes
    pickedEl.classList.remove('btn-paper');
    pickedEl.classList.remove('btn-rock');
    pickedEl.classList.remove('btn-scissors');
    pickedEl.classList.remove('btn-spock');
    pickedEl.classList.remove('btn-lizard');


    // update image
    const img = pickedEl.querySelector('img');
    pickedEl.classList.add(`btn-${choice}`);
    img.src = `./img/icon-${choice}.svg`;
    img.alt = choice;
}   
