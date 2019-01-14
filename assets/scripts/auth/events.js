'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

const onSignUp = event => {
  event.preventDefault()
  console.log('it works!')
  const signUpForm = event.target
  const formData = getFormFields(signUpForm)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)

  $('form').trigger('reset')
}
const onSignIn = event => {
  event.preventDefault()
  console.log('it works!')
  const signInForm = event.target
  const formData = getFormFields(signInForm)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)

  $('form').trigger('reset')
}
const onSignOut = event => {
  event.preventDefault()
  console.log('it works!')

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)

  $('form').trigger('reset')
}
const onChangePassword = event => {
  event.preventDefault()
  console.log('it works!')
  const formData = getFormFields(event.target)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)

  $('form').trigger('reset')
}
// const onPlayerXwins = event => {
//   event.preventDefault()
//   console.log('it works!')
//   const onXwinsForm = event.target
//   const formData = getFormFields(onXwinsForm)
//
//   api.signIn(formData)
//     .then(ui.onXwins)
//     .catch(ui.onXwins)
//
//   $('form').trigger('reset')
// }
// const onPlayOwins = event => {
//   event.preventDefault()
//   console.log('it works!')
//   const onOwinsForm = event.target
//   const formData = getFormFields(onOwinsForm)
//
//   api.signIn(formData)
//     .then(ui.onOwins)
//     .catch(ui.onOwins)
//
//   $('form').trigger('reset')
// }
// This is the event used for creating an x and o in my game board
// playerFunction defines the function that holsters my if statement for switching
// - between x and o. It also holds the code that stores X or O in my game gameBoard
// - array.
const playerFunction = event => {
  event.preventDefault()
  $('form').trigger('reset')
  // this code stores x or o as an index of my gameBoard Array
  const dataId = $(event.target).data('id')
  // This bit of code will create the game board
  // Makes it so player cannot choose spot thats already been chosen.
  // if a box has been clicked, it can not be clicked again
  // gameBoard[dataId] is the X or O being stored in the gameBoard Array
  if (store.gameBoard[dataId] === 'X' || store.gameBoard[dataId] === 'O') {} else {
    store.gameBoard[dataId] = store.player
    console.log(store.gameBoard)
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
  // console.log('This is th current board', store.gameBoard)
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
  } else if ((store.gameBoard[0] === 'O' && store.gameBoard[1] === 'X' && store.gameBoard[2] === 'O') ||
    (store.gameBoard[3] === 'X' && store.gameBoard[4] === 'O' && store.gameBoard[5] === 'O') ||
    (store.gameBoard[6] === 'O' && store.gameBoard[7] === 'X' && store.gameBoard[8] === 'O') ||
    (store.gameBoard[0] === 'O' && store.gameBoard[3] === 'O' && store.gameBoard[6] === 'X') ||
    (store.gameBoard[1] === 'X' && store.gameBoard[4] === 'X' && store.gameBoard[7] === 'O') ||
    (store.gameBoard[2] === 'O' && store.gameBoard[5] === 'X' && store.gameBoard[8] === 'X') ||
    (store.gameBoard[0] === 'X' && store.gameBoard[4] === 'O' && store.gameBoard[8] === 'X') ||
    (store.gameBoard[2] === 'O' && store.gameBoard[4] === 'O' && store.gameBoard[6] === 'O')) {
    $('#player-win-container').text('Its A Draw!')
    console.log('Draw')
  }
}

// this bit of code will determine the winner of the game

// if you're selections = one of the arrays above, you win.
// else if you're selection dont = one of the arrays above, then null.

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  playerFunction
}
