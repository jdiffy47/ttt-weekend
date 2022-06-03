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
const resetBtnEl = document.querySelector('#reset-btn')


/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('.board').addEventListener('click', handleClick)
resetBtnEl.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
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

  function handleClick(evt) {
    let sqIdx = parseInt(evt.target.id.replace('sq', ''))
    if (board[sqIdx] !== null) {
      return
    } else if (winner !== null) {
      return
    } else {
      board[sqIdx] = turn
    }
    turn *= -1
    getWinner()
    render()
  }

  function getWinner() {
    let sum
    for (let i = 0; i < winningCombos.length; i++) {
      sum = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]
    }
      if (sum === 3) {
        return 1
      } else if (sum === -3) {
        return -1
      } else if (board.includes(null) === false) {
        return 'T'
      }
      return null
    }
  


