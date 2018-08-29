const express = require('express')

// Server request
const axios = require('axios')

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
var app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  axios.post('http://127.0.0.1:8100/api/login', {
    username: req.body.username,
    password: req.body.password
  }).then(result => {
    console.log('----------- 验证成功: 1 ----------')
    console.log(JSON.stringify(result.data))
    console.log('----------- 验证成功: 1 ----------')
    console.log(result)
    req.session.authUser = {
      token: result.data.token,
      username: req.body.username
    }
    return res.json({
      token: result.data.token,
      username: req.body.username
    })
  }).catch(err => {
    console.log(err) // eslint-disable-line no-console
    return res.status(200).json({})
  })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  return res.status(200).json({})
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: router
}
