let board = document.getElementById("board");
let cells = document.getElementsByTagName("td");
let currentPlayer = "X";
let gStatusWin = false;
let gStatusDraw = false;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (this.textContent === "'Empty'") {
      this.textContent = currentPlayer;
      gStatusWin = checkForWinner();
      gStatusDraw = checkDraw();
      switchPlayer();
    }
  });
  if (gStatusWin || gStatusDraw){break;}
}

function switchPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function checkForWinner() {
  // Check rows
  if (cells[0].textContent === currentPlayer && cells[1].textContent === currentPlayer && cells[2].textContent === currentPlayer) {
    alert("Player " + currentPlayer + " wins!");
    return (true)
  } else if (cells[3].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[5].textContent === currentPlayer) {
    alert("Player " + currentPlayer + " wins!");
    return (true)
  } else if (cells[6].textContent === currentPlayer && cells[7].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
    alert("Player " + currentPlayer + " wins!");
    return (true)
  }
  // Check columns
  else if (cells[0].textContent === currentPlayer && cells[3].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
    alert("Player " + currentPlayer + " wins!");
    return (true)
  } else if (cells[1].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[7].textContent === currentPlayer) {
    alert("Player " + currentPlayer + " wins!");
    return (true)
  } else if (cells[2].textContent === currentPlayer && cells[5].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
    alert("Player " + currentPlayer + " wins!");
    return (true)
  } else if (cells[0].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
    alert("Player " + currentPlayer + " wins!");
    return (true)
  } 
  else if (cells[2].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
    alert("Player " + currentPlayer + " wins!");
    return (true)
  } else if (cells[2].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
    alert("Player " + currentPlayer + " wins!");
    return (true)
  }
}

function checkDraw() {
    let gDraw = true;
    for(let i = 0; i < cells.length; i++){
        if (this.textContent === "'Empty'"){
             gDraw = false;
        }
    }

    return gDraw;
}