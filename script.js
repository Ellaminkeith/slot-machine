const playerCredits = 0;
const Message = "";

let credits = 20;
let winning = false;

const boards = document.querySelector(".boards");
const spinBtn = document.querySelector(".spinBtn");
const message = document.querySelector(".message");

spinBtn.addEventListener("click", spinBoards);
function spinBoards() {
  if (credits === 0) {
    message.innerText = "Game Over. Please Try Again!";
    return;
  }

  let boardsNumbers = [];
  for (let i = 0; i < 3; i++) {
    const generateNumbers = Math.floor(Math.random() * 9) + 1;
    boardsNumbers.push(generateNumbers);
    // console.log(generateNumbers);
  }

  if (boardsNumbers.length === 3) {
    if (
      boardsNumbers[0] === boardsNumbers[1] &&
      boardsNumbers[1] === boardsNumbers[2]
    ) {
      winning = false;
      credits += 1;
      message.innerText = "Congrats, You WIN!";
    } else {
      winning = true;
      credits -= 1;
      message.innerText = "You Lost, Play Again!";
    }
    console.log(boardsNumbers);
  }
}

function playerCredits(boardsNumbers)
if (credits === 0) {
  playerCredits;
  message.innerText = "No Credits, add more credits!";
}
