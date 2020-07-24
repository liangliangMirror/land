import axios from 'axios'
import { ajaxUrl, api } from '@/utils/urlList'
import { message } from 'antd'

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    let data = response.data
    let obj
    if (typeof data === 'string' || data.code === 500) {
      if (process.env.NODE_ENV !== 'development') {
        return window.location.replace(ajaxUrl.loginPage)
      }
    }
    if (data.code === 200) {
      obj = data.data
    }
    if (data.code === 0 || data.code === 1) {
      obj = data
    }
    if (data.code === -1) {
      message.error(data.msg || data.message)
      obj = data
    }
    return obj
  },
  (error) => {
    if (error.response && error.response.status === 404) {
      return message.warning('无查询结果')
    }
    message.warning('服务器繁忙')
    return Promise.reject(error)
  }
)
export default axios

export function requestGet(url, params = {}, option = {}) {
  params.t = new Date().getTime()
  let options = Object.assign(
    {
      baseURL: api,
      timeout: 5000
    },
    {
      params
    },
    option
  )
  return new Promise((resolve, reject) => {
    axios
      .get(url, options)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// post 请求
export function requestPost(url, parmas, option = {}) {
  let options = Object.assign(
    {
      baseURL: api,
      timeout: 5000
    },
    option
  )
  return new Promise((resolve, reject) => {
    axios
      .post(url, parmas, options)
      .then((res) => {
        let { data, code, msg } = res

        if (code === 1 || code === 0) {
          resolve(data)
        } else {
          this.$loading
            .service({
              fullscreen: true
            })
            .close()
          message.error(msg)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export function requestJsonPost(url, params, option = {}) {
  let options = Object.assign(
    {
      baseURL: api,
      timeout: 120000
    },
    option
  )
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, options)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  })
}
export function requestExport(url, params, option = {}) {
  let str = ``
  Object.entries(params).forEach((item) => {
    str += `${item[0]}=${encodeURI(item[1])}&`
  })
  str = str.endsWith('&') ? str.substring(0, str.length - 1) : str
  window.open(api + url + `?` + str, '_self')
}
