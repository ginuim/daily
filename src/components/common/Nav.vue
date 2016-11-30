<template>
  <div class="nav">
    <ul>
      <li><router-link active-class="on" to="/home"><span>近日照片</span></router-link></li>
      <li><router-link active-class="on" to="/past"><span>全部照片</span></router-link></li>
      <li><router-link active-class="on" to="/tag"><span>标签列表</span></router-link></li>
      <li><router-link active-class="on" to="/about"><span>关于本站</span></router-link></li>
    </ul>
  </div>
</template>

<style>
.nav {
  padding-top: 3.8rem;
  text-align: center;
}
.nav ul {
  width: 80%;
  margin: 0 auto;
}
.nav li {
  width: 100%;
  height: 1.6rem;
  line-height: 1.8rem;
  margin-bottom: 5px;
  font-size: 0.875rem;
  text-align: center;
}
.nav li a span {
  color: #4A4A4A;
  background: #FFF;
  width: 30%;
  padding: 0 10px;
  display: block;
  margin: 0 auto;
}
.nav .on {
  display: block;
  background-image: url('../../assets/img/line-dark.png');
  background-repeat: repeat-x;
  background-position: center;
}
.nav li a.on span {
  color: #000;
}
</style>
