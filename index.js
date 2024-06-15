import { fetchWord } from "./fetchWord.js";
import { checkArrays } from "./checkWord.js";

const word = await fetchWord();
const wordArray = word.toUpperCase().split("");
console.log(wordArray);

// POP UP elements
var openPopup = document.getElementById("open-popup");
var popupWindow = document.getElementById("popup");
var closeButton = document.getElementById("close-popup");
var closeGameOver = document.getElementById("close-game-over");
var gameOverWindow = document.getElementById("game-over");

//KEYBOARD - Assigning event listners to the buttons (elements)
const keys = document.querySelectorAll(".key");
const del = document.getElementById("backspace");
let cellIndex = 1;
let firstRow = [];

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
    }
    if (cellIndex === 11) {
      let secondRow = firstRow.slice(5, 10);
      console.log("Second row complete:", secondRow);
      if (checkArrays(wordArray, secondRow, 5)) {
      }
    }
    if (cellIndex === 16) {
      let thirdRow = firstRow.slice(10, 15);
      console.log("Third row complete:", thirdRow);
      if (checkArrays(wordArray, thirdRow, 10)) {
      }
    }
    if (cellIndex === 21) {
      let fourthRow = firstRow.slice(15, 20);
      console.log("Fourth row complete:", fourthRow);
      if (checkArrays(wordArray, fourthRow, 15)) {
      }
    }
    if (cellIndex === 26) {
      let fifthRow = firstRow.slice(20, 25);
      console.log("Fifth row complete:", fifthRow);
      if (checkArrays(wordArray, fifthRow, 20)) {
      }
    }
    if (cellIndex === 31) {
      let sixthRow = firstRow.slice(25, 30);
      console.log("Sixth row complete:", sixthRow);
      if (checkArrays(wordArray, sixthRow, 25)) {
      }
      //make this a game over popup
      console.log("Game over");
      //game over popup
      gameOverWindow.style.display = "block";
    }
  });
});

// open popup
openPopup.addEventListener("click", function (event) {
  event.preventDefault();
  popupWindow.style.display = "block";
});

// close popup
closeButton.addEventListener("click", function () {
  popupWindow.style.display = "none";
});

//close gameover
closeGameOver.addEventListener("click", function () {
  gameOverWindow.style.display = "none";
});
