import { checkArrays } from "./checkWord.js";

function guessingLogic(wordArray, keys, firstRow, cellIndex, gameOverWindow, gameWonWindow) {
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

      if (cellIndex === 6) {
        console.log("First row complete:", firstRow);
        if (checkArrays(wordArray, firstRow, 0)) {
        }
        firstRow.join("") === wordArray.join("") &&
          (gameWonWindow.style.display = "block");
      }
      if (cellIndex === 11) {
        let secondRow = firstRow.slice(5, 10);
        console.log("Second row complete:", secondRow);
        if (checkArrays(wordArray, secondRow, 5)) {
        }
        secondRow.join("") === wordArray.join("") &&
          (gameWonWindow.style.display = "block");
      }
      if (cellIndex === 16) {
        let thirdRow = firstRow.slice(10, 15);
        console.log("Third row complete:", thirdRow);
        if (checkArrays(wordArray, thirdRow, 10)) {
        }
        thirdRow.join("") === wordArray.join("") &&
          (gameWonWindow.style.display = "block");
      }
      if (cellIndex === 21) {
        let fourthRow = firstRow.slice(15, 20);
        console.log("Fourth row complete:", fourthRow);
        if (checkArrays(wordArray, fourthRow, 15)) {
        }
        fourthRow.join("") === wordArray.join("") &&
          (gameWonWindow.style.display = "block");
      }
      if (cellIndex === 26) {
        let fifthRow = firstRow.slice(20, 25);
        console.log("Fifth row complete:", fifthRow);
        if (checkArrays(wordArray, fifthRow, 20)) {
        }
        firstRow.join("") === wordArray.join("") &&
          (gameWonWindow.style.display = "block");
      }
      if (cellIndex === 31) {
        let sixthRow = firstRow.slice(25, 30);
        console.log("Sixth row complete:", sixthRow);
        if (checkArrays(wordArray, sixthRow, 25)) {
        }
        sixthRow.join("") === wordArray.join("") &&
          (gameWonWindow.style.display = "block");
        //game over popup
        gameOverWindow.style.display = "block";
      }
    });
  });
}

export { guessingLogic };
