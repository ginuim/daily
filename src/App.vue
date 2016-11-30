<template>
  <div id="app" :class="['wrapper', navShow? 'nav-show': '']">
    <div class="container clearfix">
      <div class="content">
        <title-bar :callback="toggleNav"></title-bar>
        <div class="main">
          <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
          </transition>
        </div>
      </div>
      <right-nav></right-nav>
      <image-popup v-if="imagePopup" :class="[imagePopup? 'show': '']" :data="imagePopupData" :callback="hideImagePopup"></image-popup>
      <loading :status="loading"></loading>
    </div>
  </div>
</template>

<script>
import Loading from './components/common/Loading.vue'
import TitleBar from './components/common/Header.vue'
import RightNav from './components/common/Nav.vue'
import ImagePopup from './components/popup/ImagePopup.vue'

export default {
  components: {
    Loading,
    TitleBar,
    RightNav,
    ImagePopup
  },
  data () {
    return {
      navShow: false,
      imagePopup: this.$store.getters.showImagePopup,
      imagePopupData: {},
      // imagePopupIndex: 1,
      loading: false
    }
  },
  methods: {
    toggleNav: function () {
      this.navShow = !this.navShow
    },
    hideImagePopup: function () {
      this.$store.commit('SET_IMAGE_POPUP_STATUS', { bool: false })
    }
  },
  watch: {
    '$route.params': {
      handler: function (val, oldVal) {
        this.navShow = false
        this.hideImagePopup()
        this.$utils.setScrollTop(false, 0)
        this.$utils.setScrollTop(this.$el, 0)

        try {
          window._hmt.push(['_trackPageview', this.$route.path])
        } catch (err) {
          console.log(err)
        }
      },
      deep: true
    },
    '$store.getters.showImagePopup': {
      handler: function (val, oldVal) {
        console.log('$store.getters.showImagePopup', val)
        this.imagePopup = this.$store.getters.showImagePopup
      }
    },
    '$store.getters.imagePopupData': {
      handler: function (val, oldVal) {
        console.log('$store.getters.imagePopupData', val)
        this.imagePopupData = val
      }
    },
    '$store.getters.globalLoading': {
      handler: function (val, oldVal) {
        this.loading = val
      }
    }
  }
}
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/clearfix.css';
@import './assets/css/common.css';
@import './assets/font/iconfont.css';

.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}
.fade-enter,
.fade-eave-active {
  opacity: 0;
}
.split {
  width: 80%;
  height: 1.6rem;
  line-height: 1.8rem;
  margin: 0 auto;
  margin-bottom: 5px;
  font-size: 0.875rem;
  text-align: center;
  background-image: url('./assets/img/line-gray.png');
  background-repeat: repeat-x;
  background-position: center;
}
.split span {
  color: #9B9B9B;
  background: #FFF;
  width: 30%;
  padding: 0 10px;
  display: block;
  margin: 0 auto;
}
</style>
