'use strict'

const store = require('../store')

const onSignUpSuccess = (responseData) => {
  console.log(responseData)
  $('#user-message').text('Great Success! You have signed up!')
}
const onSignUpFailure = () => {
  $('#user-message').text('Whoopsie Daisy! Username Taken, try again.')
}
const onSignInSuccess = (responseData) => {
  console.log(responseData)
  $('#user-message').text('You are in! Prepare for battle')
  store.user = responseData.user
  console.log('Store is:', store)
}
const onSignInFailure = () => {
  $('#user-message').text('Unkown username or password')
}
const onSignOutSuccess = (responseData) => {
  $('#user-message').text('No More Tic Tac for You!')
  console.log('Store is:', store)
  store.user = null
}
const onSignOutFailure = (responseData) => {
  $('#user-message').text('You failed to sign out, hehe.')
}
const onChangePasswordSuccess = (responseData) => {
  $('#user-message').text('Hoorah! Password Changed!')
  console.log('Store is:', store)
}
const onChangePasswordFailure = (responseData) => {
  $('#user-message').text('Password failed. No tic tac for you!')
  console.log('Store is:', store)
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
