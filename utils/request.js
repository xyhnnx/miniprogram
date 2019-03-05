function request (obj) {
  wx.showNavigationBarLoading()
  return new Promise((resolve, reject) => {
    let userInfo = {
      userId: 3236,
      userType: 8,
      userName: 'xyh',
      instructorId: 275
    }
    let data = Object.assign(userInfo, obj.data)
    wx.request({
      url: 'https://recently.dongni100.com/' + obj.url,
      data,
      header: {'Content-Type': 'application/json'},
      method: (obj.method || 'GET').toUpperCase(), // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function (res) {
        wx.hideNavigationBarLoading()
        resolve(res.data)
      },
      fail: function (msg) {
        wx.hideNavigationBarLoading()
        reject(new Error('请求出错'))
      }
    })
  })
}

export default request
