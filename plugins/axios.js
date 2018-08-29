import axios from 'axios'

const service = axios.create({
  baseURL: 'http://172.29.52.2:8100/api/'
})

const request = axios.create()

// 拦截器
service.interceptors.request.use(config => {
  // if (this.$store.state.authUser) {
  //   config.headers['x-access-token'] = this.$store.state.authUser.token
  // }
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export {
  service,
  request
}
