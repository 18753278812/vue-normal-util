import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/vue-local',
  routes: [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    component: () => import('@/views/index')
  }, {
    path: '/chat',
    component: () => import('@/views/chat')
  }, {
    path: '/chat2',
    component: () => import('@/views/chat2')
  }]
})

export default router