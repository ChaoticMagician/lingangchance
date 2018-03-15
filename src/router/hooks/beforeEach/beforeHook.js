/**
 *  Create by staneyffer
 *  18-1-13
 */

import store from '../../../store'
import {READ_USER} from '../../../store/mutation-types/user'

// import {getStore} from '../../../utils/localStorage'
export const beforeH = (to, from, next) => {
  if (to.path === '/') {  // 强制跳转到 '/index'
    next({
      path: '/index',
      query: {redirect: to.fullPath}
    })
  }
  if (to.matched.some(r => r.meta.requireAuth)) {
    store.commit(READ_USER)
    if (store.state.user.token !== null) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
}
