'use strict'

const authEvents = require('./auth/events.js')
const exampleEvents = require('./examples/events.js')
const store = require('./store')
$(() => {
  store.gameBoard = ['', '', '', '', '', '', '', '', '']
  store.player = 'X' // sets the default value
  // Auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // Game Events
  // links to JQuery code and playerOne function being described in events.js
  // changing .on to .one will make the box only clickable once
  $('.box').on('click', authEvents.playerFunction)
  console.log('authEvents is', authEvents)
  exampleEvents.addHandlers()
})
