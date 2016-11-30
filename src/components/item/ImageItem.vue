<template>
  <li class="image-item">
    <!-- <section v-show="loaded"> -->
    <section>
      <!-- <img :src="imgUrl" :alt="data.title" /> -->
      <photo-item :size="imgSize" :img-src="data.imgUrl"></photo-item>
      <h2>{{ data.title || '无题' }}<!-- by <a href="#">{{ data.author }}</a> --></h2>
      <p class="tag-list">
        <router-link v-for="tag in data.tags" :to="'/tag/' + encodeURIComponent(tag)">{{ tag }}</router-link>
      </p>
    </section>
    <!-- <section v-show="!loaded">
      <div class="image-item-loading" :style="'width: ' + size + 'px; height: ' + size + 'px'">
        <span>正在加载...</span>
      </div>
    </section> -->
  </li>
</template>

<script>
import PhotoItem from '../common/PhotoItem.vue'
export default {
  props: ['data'],
  data () {
    return {
      loaded: false,
      // imgUrl: '',
      imgSize: 0
    }
  },
  components: {
    PhotoItem
  },
  mounted: function () {
    this.imgSize = this.$el.scrollWidth
    // var self = this
    if (!this.data.imgUrl.match(/\-jpeg\.\d+$/)) {
      this.data.imgUrl += '-jpeg.800'
    }
    // var img = new window.Image()
    // img.onload = function () {
    //   // self.loaded = true
    //   // self.imgUrl = self.data.imgUrl
    // }
    // img.src = this.data.imgUrl
  }
}
</script>

<style>
.image-item {
  display: block;
  padding-bottom: 1rem;
}
.image-item h2 {
  font-size: 0.875rem;
  color: #4A4A4A;
  padding: 1rem 0 0.5rem 0;
}
.image-item h2 a:link,
.image-item h2 a:visited {
  color: #4A4A4A;
}
.image-item img {
  width: 100%;
}
.image-item .tag-list a:first-child::before {
  content: '# ';
}
.image-item .tag-list a {
  font-size: 0.875rem;
  margin-right: 0.5rem;
}
.image-item .tag-list a:link,
.image-item .tag-list a:visited {
  color: #9B9B9B;
}
</style>
