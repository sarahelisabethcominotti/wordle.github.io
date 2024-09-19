import { fetchWord } from "./fetchWord.js";
// import { checkArrays } from "./checkWord.js";
import { guessingLogic } from "./guessingLogic.js";

const word = await fetchWord();
const wordArray = word.toUpperCase().split("");
console.log(wordArray);

// POP UP elements
var openPopup = document.getElementById("open-popup");
var popupWindow = document.getElementById("popup");
var closeButton = document.getElementById("close-popup");
// var closeGameWon = document.getElementById("close-game-won");


//KEYBOARD - Assigning event listners to the buttons (elements)
const keys = document.querySelectorAll(".key");
const del = document.getElementById("delete");
let cellIndex = 1;
let firstRow = [];

guessingLogic(
  wordArray,
  keys,
  firstRow,
  cellIndex,
  // gameOverWindow,
  // gameWonWindow
);

// open popup
openPopup.addEventListener("click", function (event) {
  event.preventDefault();
  popupWindow.style.display = "block";
});

// close popup
closeButton.addEventListener("click", function () {
  popupWindow.style.display = "none";
});



// //close gameover
// closeGameWon.addEventListener("click", function () {
//   gameWonWindow.style.display = "none";
// });
