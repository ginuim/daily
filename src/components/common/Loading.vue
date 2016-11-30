<template>
  <div :class="['loading', status === true? 'on': '']"></div>
</template>

<script>
  export default {
    props: ['status']
  }
</script>

<style>
.loading {
  width: 2rem;
  height: 2rem;
  display: block;
  /* box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  background-color: #FFF;
  border-radius: 50%; */
  background-image:url('../../assets/img/loading.gif');
  background-repeat: no-repeat;
  background-position:center;
  position: fixed;
  top: 40%;
  left: 50%;
  margin-left: -1rem;
  opacity: 0;
  z-index: 100;

  transition-timing-function: linear;
  transition: all .2s;
  -moz-transition: all .2s; /* Firefox 4 */
  -webkit-transition: all .2s; /* Safari and Chrome */
  -o-transition: all .2s; /* Opera */
}
.loading.on {
  top: 50%;
  opacity: 1;
}
</style>
