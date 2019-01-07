'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

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
  console.log('event.target is', event.target)

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
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
