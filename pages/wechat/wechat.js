//index.js
//获取应用实例
// import request from '../../utils/request'
const regeneratorRuntime = require('../../utils/runtime')
let app = getApp()
Page({
  data: {
    examList: [],
    startX: 0
  },
  // 事件绑定
  gotoLink: function () {
    wx.showToast({
      title: '不支持外链！',
      icon: 'loading',
      duration: 2000
    })
  },
  // touch
  start: function (event) {
    console.log('start')
    this.setData({
      startX: event.changedTouches[0].pageX
    })
  },
  end: function (event) {
    let endX = event.changedTouches[0].pageX
    let dis = endX - this.data.startX
    if (dis > 100) {
      // wx.switchTab({
      //   url: ''
      // })
    }
    console.log(dis)
    if (-dis > 100) {
      wx.switchTab({
        url: '../video/video'
      })
    }
  },
  toDetail (e) {
    let examId = e.currentTarget.dataset.examId
    wx.navigateTo({
      url: '/pages/detail/detail?examId=' + examId
    })
  },
  // 下拉刷新
  onPullDownRefresh () {
    this.getData()
  },
  async getData () {
    let that = this
    let params = {
      areaCode: '44,09',
      gradeType: 12,
      gradeYear: 2019,
      examType: 10,
      graduateStatus: 0,
      pageNo: 1,
      pageSize: 20
    }
    let res = await app.globalData.request({
      data: params,
      url: 'api/exam/plan/area'
    })
    that.setData({
      examList: res.data.exam
    })
  },
  // 页面加载
  onLoad () {
    console.log('onload')
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
