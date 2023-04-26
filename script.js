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

spinBtn.addEventListener("click", spinBoards);
function spinBoards() {
  if (playerCredits === 0) {
    message.textContent = "Game Over. Please Try Again!";
    return;
  }

  boardsNumbers = [];
  for (let i = 0; i < 3; i++) {
    const generateNumbers = Math.floor(Math.random() * 9) + 1;
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
    document.querySelector(".message").style.color = "red";
    // document.querySelector(".message").style.fontSize = "x-large";
    document.querySelector(".playerCredits").style.color = "red";
  } else {
    winning = false;
    playerCredits -= 1;
    message.textContent = "You Lost, Play Again!";
    document.querySelector(".message").style.color = "black";
    document.querySelector(".playerCredits").style.color = "black";
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
