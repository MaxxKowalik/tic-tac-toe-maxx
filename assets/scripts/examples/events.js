'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateExample = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.createExample(formData)
    .then(ui.onCreateExampleSuccess)
    .catch(ui.onCreateExampleFailure)
}

const addHandlers = () => {
  $('#create-example').on('submit', onCreateExample)
}

module.exports = {
  addHandlers
}
