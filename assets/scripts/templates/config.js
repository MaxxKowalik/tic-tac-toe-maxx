'use strict'
// Developers should set `apiUrls.production` and `apiUrls.development` here
// use this as basis for api urls
let apiUrl
const apiUrls = {
  production: 'https://aqueous-atoll-85096.herokuapp.com',
  development: 'https://tic-tac-toe-wdi.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
