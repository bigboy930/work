import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexPage from '../views/IndexPage.vue'
import WritePage from '../views/WritePage.vue'
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
      path: '/write',
      name: 'write',
      component: WritePage,
      beforeEnter: (to, from, next) => {
        if (to.params.isLogin) {
          next();
        } else {
          alert('로그인이 필요합니다.')
        }
      }
    },
    {
      path: '/write/:postId',
      name: 'edit',
      component: WritePage
    },
    {
      path: '/post/:postId',
      name: 'detail',
      component: DetailPage
    },
  ],
})