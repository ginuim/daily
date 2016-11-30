<template>
  <div class="">
    <div class="split">
      <span>近日</span>
    </div>
    <ul class="list-today">
      <image-item v-for="item in list" :data="item"></image-item>
    </ul>
    <div v-if="loading" class="list-loading"></div>
    <div v-if="!hasMore" class="list-done">下面没有更多了…</div>
  </div>
</template>

<script>
  import { mixin } from '../components/list/mixin'
  import ImageItem from '../components/item/ImageItem.vue'
  export default {
    mixins: [mixin],
    components: {
      ImageItem
    },
    data () {
      return {
        loading: false,
        hasMore: true,
        list: []
      }
    },
    mounted: function () {
      this.timer = null
      this.hasMore = true
      this.duration = 6
      this.requestData()
    },
    destroy: function () {
      // this.$el.removeEventListener('scroll')
    },
    methods: {
      requestData: function (offset) {
        if (offset > 30) {
          return
        }
        this.loading = true
        // this.$store.commit('SET_GLOBAL_LOADING', { bool: true })
        this.$http.get('dailyphoto?' + encodeURIComponent('{"$sort": {"date": -1}, "$skip": ' + (offset || 0) + ', "$limit": ' + this.duration + '}')).then((res) => {
          // this.$store.commit('SET_GLOBAL_LOADING', { bool: false })
          this.loading = false
          if (res.data.length > 0) {
            this.list = this.list.concat(res.data)
            if (this.list.length < this.duration) {
              this.hasMore = false
            }
          } else {
            this.hasMore = false
          }
          if (!offset) {
            this.addScrollBottomListener(false)
          }
        })
      }
    }
  }
</script>

<style>
.list-today {

}
</style>
