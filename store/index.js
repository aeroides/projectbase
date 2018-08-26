import axios from 'axios'

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

  async login ({ commit }, { username, password }) {
    try {
      // const { data } = await axios.post('/api/login', { username, password, type })
      const { data } = await axios.get('http://localhost:3000/user.json', { username, password })
      alert(data.code)
      if (data.code === 0) {
        commit('SET_USER', data.data)
      }
      if (data.code !== 0) {
        // handle error
        commit('LOGIN_INFO', data.info)
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }, { username, token }) {
    const { data } = await axios.post('/api/logout', { username, token })
    if (data.ok) {
      commit('SET_USER', null)
    }
  }
}
