const playerCredits = 0;
const Message = "";

let credits = 10;
let winning = false;

const boards = document.querySelector(".boards");
const spinBtn = document.querySelector(".spinBtn");
const message = document.querySelector(".message");

spinBtn.addEventListener("click", spinBoards);
function spinBoards() {
  const generateNumbers = Math.floor(Math.random() * 9) + 1;
  //   console.log(generateNumbers);
  let boardsNumbers = [];

    if (
      boardsNumbers[0] == boardsNumbers[1] ||
      boardsNumbers[1] == boardsNumbers[2]
    );
    console.log(boardsNumbers);
  }
