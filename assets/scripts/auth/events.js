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
// This is the function for the New Game button in my game
// const btnReset = document.getElementById('#replay')
// btnReset.addEventListener('click', function () {
//   startGame()
// })

// This is the event used for creating an x in my game board
const playerOne = event => {
  event.preventDefault()
  console.log('Player One Clicked')
  // this line describes that an x should appear in the single target
  // being clicked.
  $(event.target).text(store.player)
  console.log('Player is', store.player)
  // if store.player is x
  if (store.player === 'X') {
    console.log('Youve picked', store.player)
    // then change store.player to O
    store.player = 'O'
  } else {
    console.log('Youve picked', store.player)
    // if else, store.player is O change back to x
    store.player = 'X'
  }
}

// const lastMove = 'X'
// if (lastMove === 'X') {
//   console.log('O')
// }

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  playerOne
}
