import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)




const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/recommand'
  },
  {
    path: '/recommand',
    name: 'Recommand',
    component: () => import('@/views/recommand/index.vue')
  },
  {
    path: '/podcast',
    name: 'Podcast',
    component: () => import('@/views/podcast/index.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/mine/index.vue')
  },
  {
    path: '/ksong',
    name: 'Ksong',
    component: () => import('@/views/ksong/index.vue')
  },
  {
    path: '/cloud',
    name: 'Cloud',
    component: () => import('@/views/cloud/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
