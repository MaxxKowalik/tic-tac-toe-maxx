'use strict'

const authEvents = require('../auth/events.js')
const exampleEvents = require('./events.js')
$(() => {
  // Auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // Game Events
  $('.box').on('click', authEvents.playerOne)
  console.log('authEvents is', authEvents)
  exampleEvents.addHandlers()
})
// Game events
//   $('#create-game-button').on('click', gameEvents.onCreateGame)
//   $('#get-game-button').on('click', gameEvents.onGetGame)
//   $('.box').on('click', gameEvents.onUpdateGame)
