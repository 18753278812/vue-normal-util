import axios from 'axios'

const request = axios.create({
  baseURL: 'https://mock.yzl-web.top/mock/621ec7735833380ccc0d92ea/im'
})

request.interceptors.response.use(res => {

  return res.data
})

export default request