const instance = axios.create({
  timeout: 15000, // 请求超时时间
})

instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// respone拦截器
instance.interceptors.response.use(
  response => {
    if (response.status !== 200 || !response.data) {
      return Promise.reject(response.message)
    } else if (response.data.code !== 200) {
      const { msg = '数据加载失败', code, data = null } = response.data // 返回部分约定的异常数据
      return Promise.reject({ msg, code, data })
    } else {
      const data = response.data
      return data instanceof ArrayBuffer ? response : data.data
    }
  },
  error => {
    if (error?.constructor?.name === 'Cancel') {
      return Promise.reject(error)
    }
    if (error.message === 'Network Error') {
      error.message = '网络异常，请检查您的网络连接'
    }
    console.log(error)
    return Promise.reject(error)
  }
)

instance.get('http://localhost:8080/apis/area/export', { responseType: 'arraybuffer' })
