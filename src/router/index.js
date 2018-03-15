import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'
import hooks from './hooks' // 路由钩子

Vue.use(Router)

const router = new Router({
  // mode: 'history' // history模式，部署服务器需要单独配置404页面
})
router.addRoutes(routers)

hooks(router)

export default router
