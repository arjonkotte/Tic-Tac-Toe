let board = document.getElementById("board");
let cells = document.getElementsByTagName("td");
let currentPlayer = "X";
let restartBtn = document.getElementById("restart-button")



play()
function play(){
  let gStatusWin = false;
  let gStatusDraw = false;
  for (let i = 0; i < cells.length; i++) {

      cells[i].addEventListener("click", function() {
        
          if (this.textContent === "'Empty'" && !gStatusDraw && !gStatusWin) {
            this.textContent = currentPlayer;
            this.style.color = 'red'
            
            gStatusWin = checkForWinner();

            if (!gStatusWin){
              gStatusDraw = checkDraw();
            }
            
            if (gStatusDraw){
              alert("It's a Draw!")
            }
            
            switchPlayer();
          }
      })
  }
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
    for(let i = 0; i < cells.length; i++){
        if (cells[i].textContent == "'Empty'"){
             return false;
        }
    }

    return true;
}


document.getElementById("restart-button").addEventListener('click',function(){
  tableTr = document.getElementsByTagName("tr")
  for (const element in tableTr) {
    tableTr[element].innerHTML =  "<td>'Empty'</td><td>'Empty'</td><td>'Empty'</td>"
  }
  play()
})