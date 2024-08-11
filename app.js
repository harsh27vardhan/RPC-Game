let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randInd = Math.floor(Math.random()*3)
    return options[randInd];
}

const drawGame = () => {
    console.log("Game is draw.");
    msg.innerText = "It's a Draw. Play again"
    msg.style.backgroundColor = "rgb(0, 0, 55)";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Computer win!");
        msg.innerText = `Computer Win! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice)
    //Generate Computer Choice -> modular programming
    const compChoice = genCompChoice();
    console.log("computer's choice = ",compChoice)

    //Compare if user win or Computer
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissor, paper
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //rock, scissor
            userWin = compChoice==="scissor" ? false : true;
        }
        else{
            //rock, paper
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

    //Update the score.
    // In showWinner function.
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})