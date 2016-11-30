<template>
  <section class="photo-item" :style="'width: ' + size + 'px; height: ' + size + 'px'">
    <img v-if="imgUrl" :src="imgUrl" />
    <div v-show="!imgUrl" class="image-item-loading" :style="'width: ' + size + 'px; height: ' + size + 'px'">
      <!-- <span>loading...</span> -->
    </div>
  </section>
</template>

<script>
export default {
  props: ['id', 'imgSrc', 'size'],
  data: function () {
    return {
      loaded: false,
      imgUrl: ''
    }
  },
  computed: {},
  mounted: function () {
    if (!this.id) {
      this.loadImage(this.imgSrc)
    }
  },
  methods: {
    loadImage: function (url) {
      var self = this
      var img = new window.Image()
      img.onload = function () {
        self.imgUrl = self.imgSrc
        self.loaded = true
      }
      img.src = url
    }
  },
  components: {},
  watch: {
    '$store.getters.popupCurrent': {
      handler: function (val, oldVal) {
        if (!this.loaded && this.id && this.id === this.$store.getters.popupCurrent.data.id) {
          this.loadImage(this.imgSrc)
        }
        // console.log(this.$store.getters.popupCurrent.data.id)
      }
    }
  }
}
</script>

<style lang="css">
.photo-item img {
  width: 100%;
}
.image-item-loading {
  width: 100%;
  background: #EEE;
  display: table;
  text-align: center;
  background-image:url('../../assets/img/loading.gif');
  background-repeat: no-repeat;
  background-position:center;
}
.image-item-loading span {
  display: table-cell;
  vertical-align: middle;
}
</style>
