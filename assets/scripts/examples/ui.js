'use strict'

const onCreateExampleSuccess = (responseData) => {
  $('#user-message').text('Successfully created example')
  console.log('responseData is:', responseData)
}
const onCreateExampleFailure = (error) => {
  $('#user-message').text('Failed to created example')
  console.log(error)
}

module.exports = {
  onCreateExampleSuccess,
  onCreateExampleFailure
}
