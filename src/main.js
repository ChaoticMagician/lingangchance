// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueLogger from 'vuejs-logger'
import {loggerConfig} from './utils/config'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueLogger, loggerConfig)

new Vue({
  router,
  store,
  render: h => h(App)
  // created: () => {
  //   alert('刷新页面' + getStore('token'))
  //   store.commit(READ_USER)
  // }
}).$mount('#app')
