import utils from '../utils/utils'
import store from '../store'
exports.install = function (Vue, options) {
  // Vue.myGlobalMethod = {}
  // Vue.directive('test', {
  //   params: [''],
  //   bind () {
  //     // el = this.el
  //   }
  // })

  // 获取 token
  Vue.prototype.$gethttp = function (url, param, callback) {
    store.dispatch('showLoading')
    param.append('zjtoken', utils.get('token'))
    this.$http.post(url, param).then((res) => {
      store.dispatch('hideLoading')
      if (String(res.data.code) === '20001') {
        store.dispatch('showLoginQRBox', { callback: {} })
      } else {
        callback(res)
      }
    }, (res) => {

    })
  }

  // 判断是否是微信环境
  Vue.prototype.$isInWeixin = function () {
    var ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) === 'micromessenger') {
      return true
    } else {
      return false
    }
  }

  // 判断是否是安卓
  Vue.prototype.$isAndroid = function () {
    return !!navigator.userAgent.match(/android/i)
  }

  // 判断是否是iOS
  Vue.prototype.$isiOS = function () {
    return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i)
  }

  // 判断是否是移动设备
  Vue.prototype.$isMobile = function () {
    return Vue.prototype.$isAndroid() || Vue.prototype.$isiOS()
  }

  // 保存到localStorage
  Vue.prototype.$set = function (key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
  }

  // 从localStorage提取数据
  Vue.prototype.$get = function (key) {
    return window.localStorage.getItem(key)
  }

  // utils
  Vue.prototype.$utils = {
    getScrollTop: utils.getScrollTop,
    setScrollTop: utils.setScrollTop,
    getClientHeight: utils.getClientHeight,
    getScrollHeight: utils.getScrollHeight,
    scrollToBottom: utils.scrollToBottom
  }
}
