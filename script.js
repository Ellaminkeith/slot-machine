const playerCredits = 0;
const Message = "";

let boardsNumbers;
let credits = 20;
let winning = false;

const board1 = document.querySelector(".board1");
const board2 = document.querySelector(".board2");
const board3 = document.querySelector(".board3");
const spinBtn = document.querySelector(".spinBtn");
const message = document.querySelector(".message");

spinBtn.addEventListener("click", spinBoards);
function spinBoards() {
  if (credits === 0) {
    message.innerText = "Game Over. Please Try Again!";
    return;
  }

  boardsNumbers = [];
  for (let i = 0; i < 3; i++) {
    const generateNumbers = Math.floor(Math.random() * 9) + 1;
    boardsNumbers.push(generateNumbers);
  }
  render();
  console.log("boardsNumbers", boardsNumbers);
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
}

function render() {
  board1.innerText = boardsNumbers[0];
  board2.innerText = boardsNumbers[1];
  board3.innerText = boardsNumbers[2];
}

function renderCredits() {
  if (winning) {
    playerCredits += 1;
  } else {
    playerCredits -= 1;
  }
}

function renderMessage() {
    
}
