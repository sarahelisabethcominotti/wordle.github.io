import { checkGame } from "./checkGame.js";
function guessingLogic(
  wordArray,
  keys,
  firstRow,
  gameOverWindow,
  gameWonWindow
) {
  let cellIndex = 1;

  // event listeners for virtual keyboard
  keys.forEach((key) => {
    key.addEventListener("", () => {
      if (key.classList.contains("delete")) {
        if (cellIndex) {
          cellIndex--;
          const deleteLetter = document.getElementById(`cell${cellIndex}`);
          if (deleteLetter) {
            deleteLetter.textContent = "";
            deleteLetter.classList.remove("active-cell-border");
            firstRow.pop();
          }
        }
        return;
      }
      checkGame(
        key,
        wordArray,
        firstRow,
        cellIndex,
        gameOverWindow,
        gameWonWindow
      );
      // console.log(cellIndex)
      
      cellIndex++;
      
    });
  });
  // event listeners for physical keyboard
}

export { guessingLogic };
