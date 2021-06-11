import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  Search,
  Swipe,
  SwipeCell,
  PullRefresh,
  Icon
}from 'vant'
import '@/styles/index.scss' 

Vue.config.productionTip = false

Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeCell)
Vue.use(PullRefresh)
Vue.use(Icon)

// global register



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
