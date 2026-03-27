let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("computer-score");

// computer choice
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// draw
const drawGame = () => {
    msg.innerText = "Game was a draw!";
};

// winner
const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win!";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "Computer wins!";
    }
};

// game logic
const playGame = (userChoice) => {
    const compChoice = genComputerChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
};

// click event
choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        // remove old highlight
        choices.forEach(c => c.classList.remove("active"));

        // add circle border
        choice.classList.add("active");

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});