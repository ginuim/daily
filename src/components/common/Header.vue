<template>
  <div class="title-bar">
    <h1 class="logo"></h1>
    <a class="nav-toggle" @click="callback"></a>
  </div>
</template>

<script>
export default {
  props: ['callback']
}
</script>

<style>
.title-bar {
  width: 100%;
  height: 2.5rem;
  padding-top: 1.2rem;
  position: fixed;
  background: #FFF;
  z-index: 1;
}
.title-bar .logo {
  width: 100%;
  height: 1.5rem;
  background-image: url('../../assets/img/logo@3x.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.title-bar .nav-toggle {
  width: 1.4375rem;
  height: 1.0625rem;
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background-image: url('../../assets/img/nav-toggle@3x.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  outline: none;

  transition-timing-function: linear;
  transition: all .2s;
  -moz-transition: all .2s; /* Firefox 4 */
  -webkit-transition: all .2s; /* Safari and Chrome */
  -o-transition: all .2s; /* Opera */
}
.nav-show .nav-toggle {
  transform: rotate(-90deg);
  -ms-transform: rotate(-90deg); 	/* IE 9 */
  -moz-transform: rotate(-90deg); 	/* Firefox */
  -webkit-transform: rotate(-90deg); /* Safari 和 Chrome */
  -o-transform: rotate(-90deg);
}
</style>
