<template>
  <div class="about">
    <div class="split">
      <span>关于本站</span>
    </div>
    <div class="about-content">
      <p class="cover-img">
        <img src="http://oc5f4at2b.bkt.clouddn.com/about-cover.jpg-jpeg800">
      </p>
      <p>
        我是个喜欢拍照的程序员，差不多每个工作日都是两点一线，往返于公司和家之间。虽然行色匆匆，但在路上看到一点有意思的东西就特别想记录下来。
      </p>
      <p>
        我经常用手机、相机拍很多照片，但是之前存到硬盘里就再也不会去看它们，写这样一个网站可以按时间和标签将照片集合起来，算是对过去的生活碎片做一个归纳和汇总。
      </p>
      <p>
        用 Sketch 画原型画了两个晚上，整站采用 Vue2.0 + Webpack编写。
      </p>
      <p style="color: #333;">
        <b>特别说明：</b> 所有照片未经过授权的话均不会用来盈利，如果您认为我的照片侵害到您的相关权益或者认为拍丑了请给我发邮件，我会第一时间与您取得联系并且删除照片。
      </p>
      <p>
        这里是我的邮件： <a href="mailto:reaidea@qq.com">reaidea@qq.com</a>
      </p>
      <p>
        点击 <a href="http://reaidea.com/" target="_blank">这里</a> 访问我的blog
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
