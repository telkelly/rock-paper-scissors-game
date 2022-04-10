const buttons = document.querySelectorAll('.btn-choice');

const choices = ['paper', 'scissors', 'rock'];

let userScore = document.getElementById('score');
let score = 0;
let userChoice = undefined;

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        userChoice = btn.getAttribute('data-choice');

        console.log(userChoice)
    });
});

function updateScore(value) {
    score += value;

    userScore.innerText = score;
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
