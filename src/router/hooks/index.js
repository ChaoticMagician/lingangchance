import {simpleLogger} from './afterEach/simpleLogger'
// import {beforeH} from './beforeEach/beforeHook'

export default (router) => {
  // router.beforeEach(beforeH)  // 启用登录, 如果不需要登录请注释本行
  if (process.env.NODE_ENV === 'development') {
    router.afterEach(simpleLogger)    // 开发环境打印路由日志
  }
}
