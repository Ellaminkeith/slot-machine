let playerCredits = 30;
const Message = "";

let boardsNumbers;
let winning = false;

const board1 = document.querySelector(".board1");
const board2 = document.querySelector(".board2");
const board3 = document.querySelector(".board3");
const spinBtn = document.querySelector(".spinBtn");
const resetBtn = document.querySelector(".resetBtn");
const message = document.querySelector(".message");
const creditsScore = document.querySelector(".playerCredits");

resetBtn.addEventListener("click", resetGame);
function resetGame() {
  playerCredits = 30;
  message.textContent = "Play Again!";
  spinBtn.innetText = "Spin";
  render();
}

let range = 9

spinBtn.addEventListener("click", spinBoards);
function spinBoards() {
  if (playerCredits === 0) {
    message.textContent = "Game Over. Please Try Again!";
    return;
  }

  boardsNumbers = [];
  for (let i = 0; i < 3; i++) {
    const generateNumbers = Math.floor(Math.random() * range) + 1;
    boardsNumbers.push(generateNumbers);
  }
  console.log("boardsNumbers", boardsNumbers);

  if (
    boardsNumbers[0] === boardsNumbers[1] &&
    boardsNumbers[1] === boardsNumbers[2]
  ) {
    winning = true;
    playerCredits += 1;
    message.textContent = "Congrats, You WIN!";
    message.style.color = "red";
    message.style.fontSize = "48px";
    creditsScore.style.color = "red";
  } else {
    winning = false;
    playerCredits -= 1;
    message.textContent = "You Lost, Play Again!";
    message.style.fontSize = "24px";
    message.style.color = "black";
    creditsScore.style.color = "black";
  }
  render();
}

function render() {
  board1.textContent = boardsNumbers[0];
  board2.textContent = boardsNumbers[1];
  board3.textContent = boardsNumbers[2];
  creditsScore.textContent = playerCredits;
  console.log(playerCredits);
}
