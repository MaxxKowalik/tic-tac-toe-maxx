'use strict'

const authEvents = require('./auth/events.js')
const exampleEvents = require('./examples/events.js')
const store = require('./store')
$(() => {
  // const player = 'X'
  console.log('store before setting player', store)
  store.player = 'X' // sets the default value
  console.log('store after setting player', store)
  // Auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // Game Events
  // links to JQuery code and playerOne function being described in events.js

  $('.box').on('click', authEvents.playerOne)
  console.log('authEvents is', authEvents)
  exampleEvents.addHandlers()
})
