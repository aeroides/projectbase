import axios from 'axios'

axios.defaults.baseURL = 'http://172.29.52.2:8100/api/'
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
  },
  SET_TOKEN: (state, token) => {
    sessionStorage.token = token
  },
  DEL_TOKEN: (state) => {
    sessionStorage.removeItem('token')
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    console.log(req.session.authUser)
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
      commit('SET_TOKEN', req.session.authUser.token)
    }
  },

  async login ({ commit }, { username, password, token }) {
    password = Base64.encode(password)
    let params = { username, password, token }
    try {
      const { data } = await axios.post('login', params)
      let user = {
        token: data.token,
        username: username
      }
      commit('SET_USER', user)
      commit('SET_TOKEN', data.token)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      console.log(error.response)
      throw error.response.data
    }
  },

  async logout ({ commit }, { username, token }) {
    commit('SET_USER', null)
    commit('DEL_TOKEN')
  }
}
