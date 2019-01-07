// let gameBoard
// // Players
// const playerOne = 'X'
// const playerTwo = 'O'
// const winNums = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [6, 4, 2]
// ]
// const rowArticle = document.querySelectorAll('.row article')
// startGame()
//
// function startGame () {
//   document.querySelector('.winner').style.display = 'none'
//   gameBoard = Array.from(Array(9).keys())
//   console.log(gameBoard)
//   for (let i = 0; i < 'row article'.length; i++) {
//     'row article'[i].innerText = ''
//     'row article'[i].styles.removeProperty('background-color')
//     'row article'[i].addEventListener('click', turnClick, false)
//   }
// }
// function turnClick (square) {
//   console.log(square.target.id)
// }
