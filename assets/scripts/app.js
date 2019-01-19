'use strict'
// this connects with the html and the sign in forms
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

  // this will help end my game after completion by connecting to the api
  // Game Events
  // links to JQuery code and playerOne function being described in events.js
  // changing .on to .one will make the box only clickable once
  $('.box').on('click', authEvents.playerFunction)
  $('.resetButton').on('click', authEvents.clearBoard)
  // $(event.target).clear('.resetButton')

  exampleEvents.addHandlers()
})
