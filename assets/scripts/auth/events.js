'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

const onSignUp = event => {
  event.preventDefault()
  const signUpForm = event.target
  const formData = getFormFields(signUpForm)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)

  $('form').trigger('reset')
}
const onSignIn = event => {
  event.preventDefault()
  const signInForm = event.target
  const formData = getFormFields(signInForm)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)

  $('form').trigger('reset')
}
const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)

  $('form').trigger('reset')
}
const onChangePassword = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)

  $('form').trigger('reset')
}

// game api events
const onGameIndex = event => {
  event.preventDefault()
  console.log('it works!')
  const token = store.user

  api.gameIndex(token)
    .then(ui.onGameIndexSuccess)
    .catch(ui.onGameIndexFailure)

  $('form').trigger('reset')
}
const onGameCreate = event => {
  event.preventDefault()
  console.log('Game Created!')
  const token = store.user

  api.gameCreate(token)
    .then(ui.onGameCreateSuccess)
    .catch(ui.onGameCreateFailure)

  $('form').trigger('reset')
}
// const onGameShow = event => {
//   event.preventDefault()
//   console.log('Game Show Created')
//   const token = store.user
//
//   api.gameShow(token)
//     .then(ui.onGameShowSuccess)
//     .catch(ui.onGameShowFailure)
//
//   $('form').trigger('reset')
// }
// const onGameUpdate = event => {
//   event.preventDefault()
//   console.log('Game Updated')
//   const token = store.user
//
//   api.gameUpdate(token)
//     .then(ui.onGameUpdateSuccess)
//     .catch(ui.onGameUpdateFailure)
//
//   $('form').trigger('reset')
// }
// playerFunction defines the function that holsters my if statement for switching
// - between x and o. It also holds the code that stores X or O in my game gameBoard array
// playerFunctio also holds the if statement for determining which player has won or if it's a draw
const playerFunction = event => {
  event.preventDefault()
  $('form').trigger('reset')
  // this code stores x or o as an index of my gameBoard Array
  const dataId = $(event.target).data('id')
  // This bit of code will create the game board
  // Makes it so player cannot choose spot thats already been chosen.
  // if a box has been clicked, it can not be clicked again
  // gameBoard[dataId] is the X or O being stored in the gameBoard Array
  if (store.gameBoard[dataId] !== 'X' && store.gameBoard[dataId] !== 'O') {
    store.gameBoard[dataId] = store.player
    // console.log(store.gameBoard)
    // this line describes that an x should appear in the single target (box)
    // being clicked.
    $(event.target).text(store.player)
    // if store.player is x
    if (store.player === 'X') {
      // then change store.player to O
      store.player = 'O'
    } else {
      // if else, store.player is O change back to x
      store.player = 'X'
    }
  }
  // console.log('This is the current board', store.gameBoard)
  // this bit of code will determine the winner of the game
  // if you're selections = one of the arrays below, you win.
  if ((store.gameBoard[0] === 'X' && store.gameBoard[1] === 'X' && store.gameBoard[2] === 'X') ||
    (store.gameBoard[3] === 'X' && store.gameBoard[4] === 'X' && store.gameBoard[5] === 'X') ||
    (store.gameBoard[6] === 'X' && store.gameBoard[7] === 'X' && store.gameBoard[8] === 'X') ||
    (store.gameBoard[0] === 'X' && store.gameBoard[3] === 'X' && store.gameBoard[6] === 'X') ||
    (store.gameBoard[1] === 'X' && store.gameBoard[4] === 'X' && store.gameBoard[7] === 'X') ||
    (store.gameBoard[2] === 'X' && store.gameBoard[5] === 'X' && store.gameBoard[8] === 'X') ||
    (store.gameBoard[0] === 'X' && store.gameBoard[4] === 'X' && store.gameBoard[8] === 'X') ||
    (store.gameBoard[2] === 'X' && store.gameBoard[4] === 'X' && store.gameBoard[6] === 'X')) {
    $('#player-win-container').text('Player X Wins!')
  } else if ((store.gameBoard[0] === 'O' && store.gameBoard[1] === 'O' && store.gameBoard[2] === 'O') ||
    (store.gameBoard[3] === 'O' && store.gameBoard[4] === 'O' && store.gameBoard[5] === 'O') ||
    (store.gameBoard[6] === 'O' && store.gameBoard[7] === 'O' && store.gameBoard[8] === 'O') ||
    (store.gameBoard[0] === 'O' && store.gameBoard[3] === 'O' && store.gameBoard[6] === 'O') ||
    (store.gameBoard[1] === 'O' && store.gameBoard[4] === 'O' && store.gameBoard[7] === 'O') ||
    (store.gameBoard[2] === 'O' && store.gameBoard[5] === 'O' && store.gameBoard[8] === 'O') ||
    (store.gameBoard[0] === 'O' && store.gameBoard[4] === 'O' && store.gameBoard[8] === 'O') ||
    (store.gameBoard[2] === 'O' && store.gameBoard[4] === 'O' && store.gameBoard[6] === 'O')) {
    $('#player-win-container').text('Player O Wins!')
  } else if ((store.gameBoard[0] === 'X' && store.gameBoard[1] === 'O' && store.gameBoard[2] === 'X' &&
      store.gameBoard[3] === 'O' && store.gameBoard[4] === 'O' && store.gameBoard[5] === 'X' &&
      store.gameBoard[6] === 'X' && store.gameBoard[7] === 'X' && store.gameBoard[8] === 'O') ||
    (store.gameBoard[0] === 'X' && store.gameBoard[1] === 'O' && store.gameBoard[2] === 'X' &&
      store.gameBoard[3] === 'X' && store.gameBoard[4] === 'O' && store.gameBoard[5] === 'X' &&
      store.gameBoard[6] === 'O' && store.gameBoard[7] === 'X' && store.gameBoard[8] === 'O') ||
    (store.gameBoard[0] === 'O' && store.gameBoard[1] === 'X' && store.gameBoard[2] === 'O' &&
      store.gameBoard[3] === 'X' && store.gameBoard[4] === 'X' && store.gameBoard[5] === 'O' &&
      store.gameBoard[6] === 'X' && store.gameBoard[7] === 'O' && store.gameBoard[8] === 'X') ||
    (store.gameBoard[0] === '0' && store.gameBoard[1] === 'O' && store.gameBoard[2] === 'X' &&
      store.gameBoard[3] === 'X' && store.gameBoard[4] === 'X' && store.gameBoard[5] === 'O' &&
      store.gameBoard[6] === 'X' && store.gameBoard[7] === 'O' && store.gameBoard[8] === 'X') ||
    (store.gameBoard[0] === 'X' && store.gameBoard[1] === 'X' && store.gameBoard[2] === 'O' &&
      store.gameBoard[3] === 'O' && store.gameBoard[4] === 'O' && store.gameBoard[5] === 'X' &&
      store.gameBoard[6] === 'X' && store.gameBoard[7] === 'O' && store.gameBoard[8] === 'X') ||
    (store.gameBoard[0] === 'X' && store.gameBoard[1] === 'X' && store.gameBoard[2] === 'O' &&
      store.gameBoard[3] === 'O' && store.gameBoard[4] === 'O' && store.gameBoard[5] === 'X' &&
      store.gameBoard[6] === 'X' && store.gameBoard[7] === 'X' && store.gameBoard[8] === 'O') ||
    (store.gameBoard[0] === 'O' && store.gameBoard[1] === 'O' && store.gameBoard[2] === 'X' &&
      store.gameBoard[3] === 'X' && store.gameBoard[4] === 'X' && store.gameBoard[5] === 'O' &&
      store.gameBoard[6] === 'O' && store.gameBoard[7] === 'X' && store.gameBoard[8] === 'X') ||
    (store.gameBoard[0] === 'X' && store.gameBoard[1] === 'O' && store.gameBoard[2] === 'O' &&
      store.gameBoard[3] === 'O' && store.gameBoard[4] === 'X' && store.gameBoard[5] === 'X' &&
      store.gameBoard[6] === 'X' && store.gameBoard[7] === 'X' && store.gameBoard[8] === 'O') ||
    (store.gameBoard[0] === 'X' && store.gameBoard[1] === 'O' && store.gameBoard[2] === 'X' &&
      store.gameBoard[3] === 'X' && store.gameBoard[4] === 'O' && store.gameBoard[5] === 'O' &&
      store.gameBoard[6] === 'O' && store.gameBoard[7] === 'X' && store.gameBoard[8] === 'X') ||
    (store.gameBoard[0] === 'O' && store.gameBoard[1] === 'X' && store.gameBoard[2] === 'X' &&
      store.gameBoard[3] === 'X' && store.gameBoard[4] === 'X' && store.gameBoard[5] === 'O' &&
      store.gameBoard[6] === 'O' && store.gameBoard[7] === 'O' && store.gameBoard[8] === 'X') ||
    (store.gameBoard[0] === 'X' && store.gameBoard[1] === 'O' && store.gameBoard[2] === 'X' &&
      store.gameBoard[3] === 'X' && store.gameBoard[4] === 'X' && store.gameBoard[5] === 'O' &&
      store.gameBoard[6] === 'O' && store.gameBoard[7] === 'X' && store.gameBoard[8] === 'O') ||
    (store.gameBoard[0] === 'O' && store.gameBoard[1] === 'X' && store.gameBoard[2] === 'X' &&
      store.gameBoard[3] === 'X' && store.gameBoard[4] === 'O' && store.gameBoard[5] === 'O' &&
      store.gameBoard[6] === 'X' && store.gameBoard[7] === 'O' && store.gameBoard[8] === 'X') ||
    (store.gameBoard[0] === 'X' && store.gameBoard[1] === 'O' && store.gameBoard[2] === 'X' &&
      store.gameBoard[3] === 'O' && store.gameBoard[4] === 'X' && store.gameBoard[5] === 'X' &&
      store.gameBoard[6] === 'O' && store.gameBoard[7] === 'X' && store.gameBoard[8] === 'O') ||
    (store.gameBoard[0] === 'X' && store.gameBoard[1] === 'X' && store.gameBoard[2] === 'O' &&
      store.gameBoard[3] === 'O' && store.gameBoard[4] === 'X' && store.gameBoard[5] === 'X' &&
      store.gameBoard[6] === 'X' && store.gameBoard[7] === 'O' && store.gameBoard[8] === 'O') ||
    (store.gameBoard[0] === 'O' && store.gameBoard[1] === 'X' && store.gameBoard[2] === 'O' &&
      store.gameBoard[3] === 'X' && store.gameBoard[4] === 'O' && store.gameBoard[5] === 'X' &&
      store.gameBoard[6] === 'X' && store.gameBoard[7] === 'O' && store.gameBoard[8] === 'X') ||
    (store.gameBoard[0] === 'O' && store.gameBoard[1] === 'X' && store.gameBoard[2] === 'O' &&
      store.gameBoard[3] === 'O' && store.gameBoard[4] === 'X' && store.gameBoard[5] === 'X' &&
      store.gameBoard[6] === 'X' && store.gameBoard[7] === 'O' && store.gameBoard[8] === 'X') ||
      (store.gameBoard[0] === 'O' && store.gameBoard[1] === 'X' && store.gameBoard[2] === 'X' &&
        store.gameBoard[3] === 'X' && store.gameBoard[4] === 'O' && store.gameBoard[5] === 'O' &&
        store.gameBoard[6] === 'O' && store.gameBoard[7] === 'X' && store.gameBoard[8] === 'X')) {
    $('#player-win-container').text('Its a Draw!')
  }
}
// clearBoard function will clear my gameBoard by replacing its values with open strings
const clearBoard = event => {
  // console.log(api.gameIndex)
  // console.log('Store is:', store)
  // console.log(event)
  $('.box').text('')
  store.player = 'X'
  store.gameBoard = store.gameBoard.map(spot => '')
  $('#player-win-container').text('')
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGameIndex,
  onGameCreate,
  // onGameShow,
  // onGameUpdate,
  playerFunction,
  clearBoard
}
