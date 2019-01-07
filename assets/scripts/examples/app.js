'use strict'

const authEvents = require('../auth/events.js')
const exampleEvents = require('./events.js')
$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  exampleEvents.addHandlers()
})
