<template>
  <div class="past">
    <ul class="list-past">
      <grid-item v-for="item in list" :data="item"></grid-item>
    </ul>
    <div v-if="loading" class="list-loading"></div>
    <div v-if="!hasMore" class="list-done">下面没有更多了…</div>
  </div>
</template>

<script>
import { mixin } from '../components/list/mixin'
import GridItem from '../components/item/GridItem.vue'
export default {
  mixins: [mixin],
  name: 'Past',
  components: {
    GridItem
  },
  data () {
    return {
      loading: false,
      hasMore: true,
      list: [
        // {
        //   date: '2016-08-24',
        //   imgSet: [
        //     'http://oc5f4at2b.bkt.clouddn.com/IMG_20160825_090838.jpg-jpeg.800',
        //     'http://oc5f4at2b.bkt.clouddn.com/MA201608251025090088-03-000000000.jpg-jpeg.800',
        //     'http://oc5f4at2b.bkt.clouddn.com/MA201608251026520073-03-000000000.jpg-jpeg.800',
        //     'http://oc5f4at2b.bkt.clouddn.com/MA201608251033010039-03-000000000.jpg-jpeg.800'
        //   ]
        // },
        // {
        //   date: '2016-08-23',
        //   imgSet: [
        //     'http://oc5f4at2b.bkt.clouddn.com/IMG_20160825_090838.jpg-jpeg.800',
        //     'http://oc5f4at2b.bkt.clouddn.com/MA201608251025090088-03-000000000.jpg-jpeg.800',
        //     'http://oc5f4at2b.bkt.clouddn.com/MA201608251026520073-03-000000000.jpg-jpeg.800',
        //     'http://oc5f4at2b.bkt.clouddn.com/MA201608251033010039-03-000000000.jpg-jpeg.800'
        //   ]
        // }
      ]
    }
  },
  mounted: function () {
    this.duration = 10
    this.requestData()

    // this.$http.get('dailyphoto').then((res) => {
    //   this.list = res.data
    //   var arr = {}
    //   for (var i = 0; i < this.list.length; i++) {
    //     if (typeof arr[this.list[i].date] === 'undefined') {
    //       arr[this.list[i].date] = {
    //         date: this.list[i].date,
    //         imgSet: [this.list[i]]
    //       }
    //     } else {
    //       arr[this.list[i].date].imgSet.push(this.list[i])
    //     }
    //   }
    //   for (var j in arr) {
    //     this.$http.post('daily', arr[j]).then((res) => {
    //       console.log(res.data)
    //     })
    //   }
    // })
  },
  methods: {
    requestData: function (offset) {
      this.loading = true
      // this.$store.commit('SET_GLOBAL_LOADING', { bool: true })
      this.$http.get('daily?' + encodeURIComponent('{"$sort": {"date": -1}, "$skip": ' + (offset || 0) + ', "$limit": ' + this.duration + '}')).then((res) => {
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
