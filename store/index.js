import axios from 'axios'

let Base64 = require('js-base64').Base64

export const state = () => ({
  authUser: null,
  loginInfo: null
})

export const mutations = {
  SET_USER: (state, user) => {
    state.authUser = user
    state.loginInfo = null
  },
  LOGIN_INFO: (state, err) => {
    state.loginInfo = err
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },

  async login ({ commit }, { username, password, token }) {
    password = Base64.encode(password)
    let params = { username, password, token }
    try {
      const { data } = await axios.post('/api/login', params)
      let user = {
        token: data.token,
        username: data.username
      }
      commit('SET_USER', user)
    } catch (error) {
      console.log(error)
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error.response.data
    }
  },

  async logout ({ commit }, { username, token }) {
    try {
      const { data } = await axios.post('/api/logout')
      console.log(data)
      commit('SET_USER', null)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error.response.data
    }
  }
}
