import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import IndexPage from '../views/IndexPage.vue'
import Work from '../views/Work.vue'
import DetailPage from '../views/DetailPage.vue'

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/detail/:workId',
      name: 'detail',
      component: DetailPage
    }
  ],
});