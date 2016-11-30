<template>
  <section class="filter-tags">
    <router-link v-for="item in tags" :to="'/tag/' + encodeURIComponent(item.tag)">{{ item.tag }}</router-link>
  </section>
</template>

<script>
  export default {
    props: ['tags']
  }
</script>

<style>
.filter-tags {
}
.filter-tags a {
  height: 1.5rem;
  line-height: 1.7rem;
  padding: 0 0.875rem;
  background: #EEE;
  margin-right: 4px;
  margin-bottom: 4px;
  display: inline-block;
}
.filter-tags a:link,
.filter-tags a:visited {
  color: #9B9B9B;
  font-size: 0.875rem;
}
.filter-tags a.on:link,
.filter-tags a.on:visited {
  color: #FFF;
  background: #4A4A4A;
}
</style>
