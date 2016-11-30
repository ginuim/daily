<template>
  <div class="about">
    <div class="split">
      <span>特别说明</span>
    </div>
    <div class="about-content">
      <p>
        本网站上大部分照片是扫街或者上下班路上在公共场合因为看到有意思的场景、被某种情绪所感染或者练习拍照技术所拍。
      </p>
      <p>
        所有照片未经过授权的话均不会用来盈利，如果您认为我的照片侵害到您利益或者认为拍丑了请给我发邮件，我会第一时间与您取得联系并且删除照片。
      </p>
      <p>
        这里是我的邮件： <a href="mailto:reaidea@qq.com">reaidea@qq.com</a><!-- 有不少拍摄到正脸又可能会造成一定误会或者有丑化嫌疑的照片都被删除 -->
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    mounted: function () {
      this.$store.commit('SET_GLOBAL_LOADING', { bool: false })
    }
  }
</script>

<style>
.about-content .cover-img img {
  width: 100%;
  display: block;
}
.about-content p {
  color: #636363;
  line-height: 1.5rem;
  margin-top: 1rem;
}
.about-content a:link,
.about-content a:visited {
  color: #000;
}
</style>
