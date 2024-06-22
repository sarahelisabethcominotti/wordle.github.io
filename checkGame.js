import { checkArrays } from "./checkWord.js";

export function checkGame(key, wordArray, firstRow, cellIndex) {
  const gameOverWindow = document.getElementById("game-over");
  const gameWonWindow = document.getElementById("game-won");
  var closeGameOver = document.getElementById("close-game-over");
  const cell = document.getElementById(`cell${cellIndex}`);

  if (cell) {
    cell.textContent = key.textContent.toUpperCase();
    cell.classList.add("active-cell-border");
    firstRow.push(cell.textContent);
    // console.log(firstRow);
    cellIndex++;
  }
  // Check word when rows are complete
  if (cellIndex % 5 === 1 && cellIndex !== 1) {
    let rowIndex = Math.floor(cellIndex / 5);
    let row = firstRow.slice((rowIndex - 1) * 5, rowIndex * 5);

    console.log(`Row ${rowIndex} complete:`, row);

    if (checkArrays(wordArray, row, (rowIndex - 1) * 5)) {
    }

    if (row.join("") === wordArray.join("")) {
      gameWonWindow.style.display = "block";
      console.log(row.join(""), wordArray.join(""));
    } else if (rowIndex === 6) {
      // Last row condition
      gameOverWindow.style.display = "block";
    }
  }
  //close gameover
  closeGameOver.addEventListener("click", function () {
    gameOverWindow.style.display = "none";
  });
}
