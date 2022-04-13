const buttons = document.querySelectorAll('.pushed');
const choiceBlock = document.getElementById('choiceBlock');
const pickedBlock = document.getElementById('pickedBlock');
const btnPlayAgain = document.getElementById('resetGame');
const winner = document.getElementById('winner')
const userSelection = document.getElementById('userSelection');
const computerSelection = document.getElementById('computerSelection');

const choices = ['paper', 'scissors', 'rock'];

let userScore = document.getElementById('score');
let score = 0;
let userChoice = undefined;

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
        // draw
        winner.innerText = 'draw'
    } else if (userChoice === 'paper' && computerChoice === 'rock'
        || userChoice === 'rock' && computerChoice === 'scissors'
        || userChoice === 'scissors' && computerChoice === 'rock') {
        // user win
        updateScore(1)
        winner.innerText = 'win'
    } else {
        updateScore(-1)
        winner.innerText = 'lose'
    }
}

function updateScore(value) {
    score += value;

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


    // update image
    const img = pickedEl.querySelector('img');
    pickedEl.classList.add(`btn-${choice}`);
    img.src = `./img/icon-${choice}.svg`;
    img.alt = choice;
}   
