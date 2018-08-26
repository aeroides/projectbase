import axios from 'axios'
const service = axios.create({
  // baseURL: 'http://locahost:3000/api/'
})

const request = axios.create()

// 拦截器
service.interceptors.request.use(config => {
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
