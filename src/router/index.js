import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomeView from '../views/HomeView.vue'
import PastView from '../views/PastView.vue'
import TagsView from '../views/TagsView.vue'
import AboutView from '../views/AboutView.vue'
// import StatementView from '../views/StatementView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    // { path: '/:category(\\w+)?', component: HomeView },
    { path: '/home', component: HomeView },
    { path: '/past', component: PastView },
    { path: '/tag', component: TagsView },
    { path: '/tag/:tag(.+)', component: TagsView },
    { path: '/about', component: AboutView },
    // { path: '/statement', component: StatementView },
    // { path: '/ask/:page(\\d+)?', component: createListView('ask') },
    // { path: '/item/:id(\\d+)', component: ItemView },
    // { path: '/user/:id', component: UserView },
    { path: '*', redirect: '/home' }
  ]
})
