const playerChoiceText = document.getElementById('player-choice');
const computerChoiceText = document.getElementById('computer-choice');
const outcomeText = document.getElementById('outcome');
const resetBtn = document.getElementById('reset-btn');

const buttons = document.querySelectorAll('.buttons button');

const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a draw";
    }

    if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        return 'You Win';
    } else {
        return 'You Lose';
    }
}

function handlePlayerChoice(playerChoice) {
  
    const computerChoice = getComputerChoice();

    playerChoiceText.textContent = `Your choice: ${playerChoice}`;
    computerChoiceText.textContent = `Computer's choice: ${computerChoice}`;

    const outcome = determineWinner(playerChoice, computerChoice);
    outcomeText.textContent = `Result: ${outcome}`;

    resetBtn.classList.remove('hidden');
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        handlePlayerChoice(button.textContent);
    });
});

resetBtn.addEventListener('click', () => {
  
    playerChoiceText.textContent = 'Your choice: ';
    computerChoiceText.textContent = 'Computer\'s choice: ';
    outcomeText.textContent = 'Result: ';
    resetBtn.classList.add('hidden');
});
