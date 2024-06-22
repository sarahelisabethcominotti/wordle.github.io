import { checkArrays } from "./checkWord.js";

function guessingLogic(
  wordArray,
  keys,
  firstRow,
  cellIndex,
  gameOverWindow,
  gameWonWindow
) {
  keys.forEach((key) => {
    key.addEventListener("click", () => {
      const cell = document.getElementById(`cell${cellIndex}`);

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
        } else if (rowIndex === 6) {
          // Last row condition
          gameOverWindow.style.display = "block";
        }
      }
    });
  });
}

export { guessingLogic };
