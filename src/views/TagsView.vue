<template>
  <div class="tags">
    <filter-tags :tags="tags"></filter-tags>
    <ul class="list-search">
      <grid-item v-for="item in list" :data="item"></grid-item>
    </ul>
    <div v-if="loading" class="list-loading"></div>
    <div v-if="!hasMore" class="list-done">下面没有更多了…</div>
  </div>
</template>

<script>
// import store from '../store'
// import { mixin } from '../components/list/mixin'
import FilterTags from '../components/common/FilterTags.vue'
import GridItem from '../components/item/GridItem.vue'

export default {
  // mixins: [mixin],
  components: {
    FilterTags,
    GridItem
  },
  data () {
    return {
      loading: false,
      hasMore: true,
      // list: [
      //   // {
      //   //   text: '手机摄影',
      //   //   imgSet: [
      //   //     'http://oc5f4at2b.bkt.clouddn.com/IMG_20160825_090838.jpg-jpeg.800',
      //   //     'http://oc5f4at2b.bkt.clouddn.com/MA201608251025090088-03-000000000.jpg-jpeg.800',
      //   //     'http://oc5f4at2b.bkt.clouddn.com/MA201608251026520073-03-000000000.jpg-jpeg.800',
      //   //     'http://oc5f4at2b.bkt.clouddn.com/MA201608251033010039-03-000000000.jpg-jpeg.800'
      //   //   ]
      //   // }
      // ],
      list: [
        {
          text: this.$route.params.tag,
          imgSet: []
        }
      ],
      tags: []
    }
  },
  mounted: function () {
    this.offset = 0
    this.duration = 18
    this.requestData()
    this.$http.get('dailytags').then((res) => {
      // this.$store.commit('SET_GLOBAL_LOADING', { bool: true })
      this.tags = res.data
    })
  },
  methods: {
    requestData (offset) {
      this.loading = true
      // this.$store.commit('SET_GLOBAL_LOADING', { bool: true })
      if (this.$route.params.tag) {
        this.$http.get('dailyphoto?' + encodeURIComponent('{"tags": {"$regex": "' + decodeURIComponent(this.$route.params.tag) + '"}, "$sort": {"date": -1}, "$skip": ' + (offset || 0) + ', "$limit": ' + this.duration + '}')).then((res) => {
          this.loading = false
          // this.$store.commit('SET_GLOBAL_LOADING', { bool: false })
          if (res.data.length > 0) {
            this.list = [
              {
                text: this.$route.params.tag,
                imgSet: this.list[0]['imgSet'].concat(res.data)
              }
            ]
            if (this.list[0]['imgSet'].length < this.duration) {
              this.hasMore = false
            }
            // console.log(this.list)
            if (!offset) {
              this.addScrollBottomListener(false)
            }
            // this.list = this.list.concat(res.data)
          } else {
            this.hasMore = false
          }
        })
      } else {
        this.$http.get('dailyphoto?' + encodeURIComponent('{"$sort": {"date": -1}, "$skip": ' + (offset || 0) + ', "$limit": ' + this.duration + '}')).then((res) => {
          this.loading = false
          // this.$store.commit('SET_GLOBAL_LOADING', { bool: false })
          if (res.data.length > 0) {
            this.list = [
              {
                text: this.$route.params.tag,
                imgSet: this.list[0]['imgSet'].concat(res.data)
              }
            ]
            // console.log(this.list)
            if (!offset) {
              this.addScrollBottomListener(false)
            }
          } else {
            this.hasMore = false
          }
        })
      }
    },
    // 滚动到目标元素底部加载新数据
    addScrollBottomListener: function ($el) {
      var self = this
      this.$elem = $el || document
      // this.$elem.removeEventListener('scroll')
      this.$elem.addEventListener('scroll', function (event) {
        clearTimeout(self.timer)
        self.timer = setTimeout(function () {
          if ((self.$utils.getScrollTop($el) === self.$utils.getScrollHeight($el) - self.$utils.getClientHeight($el)) && self.list[0].imgSet.length % self.duration === 0 && self.hasMore) {
            self.offset += self.duration
            self.requestData(self.offset)
          }
        }, 500)
      })
    }
  },
  watch: {
    '$route.params.tag': {
      handler: function (val, oldVal) {
        this.list = [
          {
            text: this.$route.params.tag,
            imgSet: []
          }
        ]
        this.hasMore = true
        this.requestData()
      }
    }
  }
}
</script>
