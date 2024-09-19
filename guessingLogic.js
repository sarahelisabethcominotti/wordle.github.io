import { checkGame } from "./checkGame.js";
function guessingLogic(
  wordArray,
  keys,
  firstRow,
  gameOverWindow,
  gameWonWindow
) {
  let cellIndex = 1;

  function handleInput(keyContent) {
    if (keyContent === "Delete") {
      if (cellIndex > 1) {
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

   // checck letters physical keyboard
    if (/^[a-zA-Z]$/.test(keyContent)) {
      const cell = document.getElementById(`cell${cellIndex}`);
      if (cell) {
        checkGame(
          { textContent: keyContent.toUpperCase() }, 
          wordArray,
          firstRow,
          cellIndex,
          gameOverWindow,
          gameWonWindow
        );
        cellIndex++;
      }
    }
  }

  // virtual keyboard
  keys.forEach((key) => {
    key.addEventListener("click", () => {
      const keyContent = key.classList.contains("delete")
        ? "Delete"
        : key.textContent.trim();

      handleInput(keyContent); 
    });
  });

  // physical keyboard
  document.addEventListener("keydown", (event) => {
    const keyContent = event.key; 
    handleInput(keyContent); 
  });


  
  // event listeners for virtual keyboard
  // keys.forEach((key) => {
  //   key.addEventListener("click", () => {
  //     if (key.classList.contains("delete")) {
  //       if (cellIndex) {
  //         cellIndex--;
  //         const deleteLetter = document.getElementById(`cell${cellIndex}`);
  //         if (deleteLetter) {
  //           deleteLetter.textContent = "";
  //           deleteLetter.classList.remove("active-cell-border");
  //           firstRow.pop();
  //         }
  //       }
  //       return;
  //     }
  //     checkGame(
  //       key,
  //       wordArray,
  //       firstRow,
  //       cellIndex,
  //       gameOverWindow,
  //       gameWonWindow
  //     );
  //     // console.log(cellIndex)
      
  //     cellIndex++;
      
  //   });
  // });
  // event listeners for physical keyboard
}

export { guessingLogic };
