'use strict'
//  log in user message data html
const store = require('../store')

const onSignUpSuccess = (responseData) => {
  console.log(responseData)
  $('#log-user-message').text('Great Success! You have signed up!')
}
const onSignUpFailure = () => {
  $('#log-user-message').text('Whoopsie Daisy! Username Taken, try again.')
}
const onSignInSuccess = (responseData) => {
  console.log(responseData)
  $('#log-user-message').text('You are in! Prepare for battle')
  store.user = responseData.user
  console.log('Store is:', store)
}
const onSignInFailure = () => {
  $('#log-user-message').text('Unkown username or password')
}
const onSignOutSuccess = (responseData) => {
  $('#log-user-message').text('No More Tic Tac for You!')
  console.log('Store is:', store)
  store.user = null
}
const onSignOutFailure = (responseData) => {
  $('#log-user-message').text('You failed to sign out, hehe.')
}
const onChangePasswordSuccess = (responseData) => {
  $('#log-user-message').text('Hoorah! Password Changed!')
}
const onChangePasswordFailure = (responseData) => {
  $('#log-user-message').text('Password failed. No tic tac for you!')
}

// not sure if I need to keep onGameOverFailure. Come back to this.
// also need to come up with a better user message (if any at all)
const onGameOverSuccess = (responseData) => {
  $('#player-win-container').text('Game Over Success')
  console.log('Store is:', store)
}
const onGameOverFailure = (responseData) => {
  $('#player-win-container').text('Game Over Failure')
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
  onChangePasswordFailure,
  onGameOverSuccess,
  onGameOverFailure
}
