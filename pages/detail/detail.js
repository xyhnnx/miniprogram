//index.js
//获取应用实例
const regeneratorRuntime = require('../../utils/runtime')
let app = getApp()
let examId
Page({
  data: {
    examDetail: {}
  },
  // 下拉刷新
  onPullDownRefresh () {
    this.getData()
  },
  async getData () {
    let that = this
    let params = {
      examId: examId
    }
    let res = await app.globalData.request({
      data: params,
      url: 'api/exam/trace/union/plan'
    })
    that.setData({
      examDetail: res.data
    })
  },
  // 页面加载
  onLoad (e) {
    console.log(e)
    examId = e.examId
    this.getData()
  },
  // 页面分享
  onShareAppMessage () {
    return {
      title: '微信小程序',
      desc: '这是微信小程序的分享功能',
      path: '/page/wechat'
    }
  }
})
