'use strict'
const config = require('../templates/config')
const store = require('../templates/store')

const createExample = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/examples',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData

  })
}

module.exports = {
  createExample
}
