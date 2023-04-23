import Vue from 'vue'
import App from './App.vue' // 加载跟组件
import router from './router' // 加载路由
import store from './store'
import Vant from 'vant' /// /加载vant
import 'vant/lib/index.css' // 加载vant的全局样式

import './styles/index.less'// 加载自己的全局样式

Vue.use(Vant) // 注册使用Vant组件库

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
