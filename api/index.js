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
  axios.post('', {
    type: req.body.type,
    username: req.body.username,
    password: req.body.password
  }).then(result => {
    if (result.data.code === 0) {
      console.log('----------- 验证成功: 0 ----------')
      console.log(JSON.stringify(result.data))
      console.log('----------- 验证成功: 0 ----------')
      req.session.authUser = {
        id: result.data.data.user_id,
        token: result.data.data.token,
        cart: result.data.data.cart_info,
        username: req.body.username
      }
      return res.json({
        code: result.data.code,
        info: result.data.info,
        data: {
          id: result.data.data.user_id,
          token: result.data.data.token,
          cart: result.data.data.cart_info,
          username: req.body.username
        }
      })
    }
    if (result.data.code !== 0) {
      console.log('----------- 验证失败: 0 ----------')
      console.log(JSON.stringify(result.data))
      console.log('----------- 验证失败: 0 ----------')
      return res.json({
        code: result.data.code,
        info: result.data.info,
        data: {}
      })
    }
  }).catch(err => {
    console.log(err) // eslint-disable-line no-console
    return res.status(200).json({
      code: 1,
      info: '用户名或密码不正确',
      data: {}
    })
  })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  axios.post('', {
    user_id: req.body.user_id,
    token: req.body.token
  }).then(result => {
    if (result.data.code === 0) {
      delete req.session.authUser
      return res.json({ ok: true })
    }
  }).catch(err => {
    console.log(err) // eslint-disable-line no-console
  })
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: router
}
