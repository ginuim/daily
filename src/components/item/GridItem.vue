<template>
  <li class="image-grids clearfix">
    <div class="split">
      <span>{{ data.date || data.text }}</span>
    </div>
    <a :class="[index % 3 === 0? 'spec': '']" v-for="(item, index) in data.imgSet" @click="showImagePopup(index)">
      <photo-item :size="imgSize" :img-src="item.imgUrl.indexOf('-jpeg.') > -1? item.imgUrl: item.imgUrl + '-jpeg.300'"></photo-item>
      <!-- <img :src="item.imgUrl.indexOf('-jpeg.') > -1? item.imgUrl: item.imgUrl + '-jpeg.300'" /> -->
    </a>
  </li>
</template>

<script>
import PhotoItem from '../common/PhotoItem.vue'
export default {
  props: ['data'],
  components: {
    PhotoItem
  },
  data () {
    return {
      imgSize: 0
    }
  },
  mounted: function () {
    this.imgSize = this.$el.scrollWidth * 0.32
    if (typeof this.data.date !== 'undefined' && this.data.date.match(/^\d{8}$/)) {
      var arr = this.data.date.match(/\d{2}/g)
      this.data.date = arr[0] + arr[1] + '-' + arr[2] + '-' + arr[3]
    }
  },
  methods: {
    showImagePopup (index) {
      this.$store.commit('SET_IMAGE_POPUP_STATUS', { bool: true })
      this.$store.commit('SET_IMAGE_POPUP_DATA', { data: this.data, index: index })
      // this.$store.commit('SET_IMAGE_POPUP_INDEX', { index: index })
      // this.$store.dispatch('IMAGE_POPUP_STATUS', { bool: true })
    }
  }
}
</script>

<style>
.image-grids {
  margin-bottom: 20px;
}
/*.image-grids img,*/
.image-grids .photo-item {
  float:left;
  margin-left: 2%;
  margin-top: 2%;
  width: 32%;
  overflow:hidden;
}
.image-grids .spec img,
.image-grids .spec .photo-item {
  margin-left: 0;
}
</style>
