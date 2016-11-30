exports.mixin = {
  mounted: function () {
    console.log('aaa')
    this.timer = null
    this.offset = 0
    this.$elem = null
    this.hasMore = true
  },
  deactivated: function () {
    console.log('ccc')
  },
  destroyed: function () {
    this.hasMore = false
    console.log('bbb')
  },
  beforeDestroy: function () {
    console.log('ddd')
  },
  methods: {
    // 滚动到目标元素顶部加载新数据
    addScrollTopListener: function ($el) {
      var self = this
      this.$elem = $el || document
      // this.$elem.removeEventListener('scroll')
      this.$elem.addEventListener('scroll', function (event) {
        clearTimeout(self.timer)
        self.timer = setTimeout(function () {
          if (self.$utils.getScrollTop($el) <= 10 && self.list.length % self.duration === 0 && self.hasMore) {
            self.requestData(self.list.length > 0 && self.list[0].id)
          }
        }, 500)
      })
    },
    // 滚动到目标元素底部加载新数据
    addScrollBottomListener: function ($el) {
      var self = this
      this.$elem = $el || document
      // this.$elem.removeEventListener('scroll')
      this.$elem.addEventListener('scroll', function (event) {
        clearTimeout(self.timer)
        self.timer = setTimeout(function () {
          // console.log(self.list.length % self.duration)
          // console.log(self.$utils.getScrollTop($el), self.$utils.getScrollHeight($el))
          if ((self.$utils.getScrollTop($el) >= (self.$utils.getScrollHeight($el) - self.$utils.getClientHeight($el) - 80)) && self.list.length % self.duration === 0 && self.hasMore) {
            self.offset += self.duration
            self.requestData(self.offset)
          }
        }, 500)
      })
    }
  }
}
