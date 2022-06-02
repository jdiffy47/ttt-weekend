/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.board-squares')
const messageEl = document.querySelector('#message')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, null, null, null, null, null, null, null, null, ]
  turn = -1
  winner = null
  render()
}

function render() {
  squareEls.forEach((element, idx) => {
    if(board[idx] === null) {
    } else if(board[idx] === 1) {
      element.textContent = 'X'
    } else if(board[idx] === -1) {
      element.textContent = 'O'
    }
  })
    winner === null ? messageEl.textContent = `It is player ${turn}'s turn` : messageEl.textContent = `It is player ${turn*1}'s turn`
    winner === 'T' ? messageEl.textContent = `It is a tie!` : messageEl.textContent = `Congratulations to player ${winner}!`
  }


