<template>
  <div class="popup-images">
    <div class="main">
      <a class="iconfont btn-close" @click="callback">&#xe603;</a>
      <div class="split">
        <span>{{ data.data.date || data.data.text }}</span>
      </div>
      <swiper ref:swiper
        direction="horizontal"
        :mousewheel-control="true"
        :performance-mode="false"
        :pagination-visible="false"
        :pagination-clickable="true"
        :current="data.index + 1"
        @slide-change-start="onSlideChangeStart"
        @slide-change-end="onSlideChangeEnd">
        <div class="slider-item" v-for="item in data.data.imgSet" :data="item" v-if="data">
          <!-- <img :src="item.imgUrl + '-jpeg.800'" alt="" /> -->
          <photo-item :size="imgSize"
                      :id="item.id"
                      :img-src="item.imgUrl.indexOf('-jpeg.') > -1? item.imgUrl: item.imgUrl + '-jpeg.800'">
          </photo-item>
          <h2>{{ item.title || '无题' }}<!-- by <a href="#">{{ data.author }}</a> --></h2>
          <p class="tag-list">
            <router-link v-for="tag in item.tags" :to="'/tag/' + encodeURIComponent(tag)">{{ tag }}</router-link>
          </p>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
import PhotoItem from '../common/PhotoItem.vue'
import Swiper from '../ui/Swiper.vue'
export default {
  props: ['data', 'callback'],
  components: {
    Swiper,
    PhotoItem
  },
  mounted: function () {
    this.imgSize = this.$el.querySelector('.slider-item').scrollWidth
    this.currentImg = this.data.data.imgSet[this.data.index]
    this.$store.commit('IMAGE_POPUP_CURRENT', { data: this.currentImg })
    // console.log(this.data)
  },
  methods: {
    onSlideChangeStart: function (currentPage) {
      // console.log('onSlideChangeStart', currentPage)
      this.currentImg = this.data.data.imgSet[currentPage - 1]
      this.$store.commit('IMAGE_POPUP_CURRENT', { data: this.currentImg })
      // console.log(this.currentImg)
    },
    onSlideChangeEnd: function (currentPage) {
      // console.log('onSlideChangeEnd', currentPage)
    }
  },
  watch: {
  },
  data () {
    return {
      imgSize: 0,
      currentImg: ''
    }
  }
}
</script>

<style>
.popup-images {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: #FFF;
  overflow-y: auto;
  /*opacity: 0;

  transition-timing-function: linear;
  transition: all .2s;
  -moz-transition: all .2s;
  -webkit-transition: all .2s;
  -o-transition: all .2s;*/
}
/*.popup-images.show {
  opacity: 1;
}*/
.popup-images .main {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  padding-top: 1.5rem;
}
.popup-images .btn-close {
  font-size: 3rem;
  margin: 0 auto;
  opacity: 0.2;
}
.popup-images .split {
  margin-top: 1rem;
}

.slider-item .photo-item {
  width: 100%;
}

/*.slider-item img {
  width: 100%;
}*/
.slider-item h2 {
  font-size: 0.875rem;
  color: #4A4A4A;
  padding: 1rem 0 0.5rem 0;
}
.slider-item h2 a:link,
.slider-item h2 a:visited {
  color: #4A4A4A;
}
.slider-item .tag-list a:first-child::before {
  content: '# ';
}
.slider-item .tag-list a {
  font-size: 0.875rem;
  margin-right: 0.5rem;
}
.slider-item .tag-list a:link,
.slider-item .tag-list a:visited {
  color: #9B9B9B;
}
</style>
