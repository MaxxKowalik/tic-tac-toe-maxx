'use strict'

const store = require('../templates/store')

const onSignUpSuccess = (responseData) => {
  console.log(responseData)
  $('#user-message').text('Great Success! You have signed up!')
}
const onSignUpFailure = () => {
  $('#user-message').text('Error Error, You Fail!')
}
const onSignInSuccess = (responseData) => {
  console.log(responseData)
  $('#user-message').text('You have signed in!')
  store.user = responseData.user
  console.log('Store is:', store)
}
const onSignInFailure = () => {
  $('#user-message').text('Unkown username or password')
}
const onSignOutSuccess = (responseData) => {
  $('#user-message').text('Sign Out Success')
  console.log('Store is:', store)
  store.user = null
}
const onSignOutFailure = (responseData) => {
  $('#user-message').text('Sign Out Failure')
}
const onChangePasswordSuccess = (responseData) => {
  $('#user-message').text('Changed Password')
  console.log('Store is:', store)
}
const onChangePasswordFailure = (responseData) => {
  $('#user-message').text('Password Fail')
  console.log('Store is:', store)
}
// const onPlayerOneSuccess = (responseData) => {
//   $('#user-message').text('Player Turn Success!')
//   console.log('Store is:', store)
// }
// const onPlayerOneFailure = (responseData) => {
//   $('#user-message').text('Player One Failed!')
//   console.log('Store is:', store)
// }
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
  // onPlayerOneSuccess,
  // onPlayerOneFailure
}
