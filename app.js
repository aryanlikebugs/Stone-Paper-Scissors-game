let user_score = 0;
let comp_score = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");
const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}
const showWinner = (a, user_choice, comp_choice) => {
    if (a) {
        user_score++;
        userScorePara.innerText = `${user_score}`;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${user_choice} beats ${comp_choice}.`;
        msg.style.backgroundColor = "Green";
    } else {
        comp_score++;
        compScorePara.innerText = `${comp_score}`;
        console.log("You lose!");
        msg.innerText = `You Lose! ${comp_choice} beats your ${user_choice}.`;
        msg.style.backgroundColor = "Red";
    }
}
const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw! Play again."
    msg.style.backgroundColor = "#081b31";
}

const playGame = (user_choice) => {
    console.log("User Choice=", user_choice);
    const comp_choice = genCompChoice();
    console.log("Comp choice=", comp_choice);
    if (user_choice === comp_choice) {
        drawGame();
    } else {
        let userWin;
        if (user_choice === "Rock") {
            userWin = comp_choice === "Paper" ? false : true;

        } else if (user_choice === "Paper") {
            userWin = comp_choice === "Scissors" ? false : true;
        } else {
            userWin = comp_choice === "Rock" ? false : true;
        }
        showWinner(userWin, user_choice, comp_choice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("Id");
        playGame(user_choice);

    });

});  