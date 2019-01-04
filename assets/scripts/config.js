'use strict'
// Developers should set `apiUrls.production` and `apiUrls.development` here
// use this as basis for api urls
let apiUrl
const apiUrls = {
  production: '<replace-with-heroku-url>',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
