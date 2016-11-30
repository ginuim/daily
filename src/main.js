import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Resource from 'vue-resource'
import * as filters from './utils/filters'
import global from './plugins/global'

// import { sync } from 'vuex-router-sync'
// import ls from 'store2'

// sync(store, router)

Vue.use(Resource)
Vue.use(global)

Vue.http.options.root = 'http://daily.reaidea.com/api'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  router,
  store,
  ...App
})

router.beforeEach((route, redirect, next) => {
  // var scrollTop = document.body.scrollTop
  // if (store.state.route.path) {
  //     ls.set(store.state.route.path, scrollTop)
  // }
  // store.dispatch('gProgress', 0)
  next()
})

app.$mount('#app')
