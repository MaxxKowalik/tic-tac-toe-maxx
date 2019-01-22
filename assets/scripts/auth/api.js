'use strict'
const config = require('../config')
const store = require('../store')

const signUp = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}
const signIn = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}
const changePassword = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const gameIndex = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const gameCreate = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
// const gameShow = (formData) => {
//   return $.ajax({
//     url: config.apiUrl + `/games:id`,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: formData
//   })
// }
// const gameUpdate = (formData) => {
//   return $.ajax({
//     url: config.apiUrl + `/games:id`,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: formData
//   })
// }
// const gameUpdateStates = (formData) => {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: formData
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  gameIndex,
  gameCreate
  // gameShow,
  // gameUpdate,
  // gameUpdateStates
}
