import axios from 'axios'

export default function ({ store, redirect, error }) {
  if (!store.state.authUser) {
    redirect('/')
  } else {
    axios.defaults.headers['x-access-token'] = store.state.authUser.token
  }
}
