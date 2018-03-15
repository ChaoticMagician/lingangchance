/**
 *  Create by staneyffer
 *  18-1-11
 */

import {LOGOUT, LOGIN, SAVE_USER, READ_USER} from '../../mutation-types/user'
import {setStore, removeStore, getStore} from '../../../utils/localStorage'
import authApi from '../../../api/auth/user'

const state = {
  user: {},
  token: null
}

const getters = {
  getUser: state => state.user
}

const actions = {
  login ({commit, state}, loginData) {
    commit(LOGIN, loginData)
  },
  logout ({commit}) {
    commit(LOGOUT)
  },
  getUserInfo ({commit, state}) {
    authApi.getUser().then(res => {
      commit(SAVE_USER, res.data)
    }).catch(res => {
      console.log('获取用户信息失败, status: ' + res.status)
      commit(LOGOUT)
    })
  }
}

const mutations = {
  /**
   * 登录，并将token和用户account存在localStorage中
   * @param state
   * @param loginData：
   * {
   *    oAuth2AccessToken: {
   *    },
   *    sysUser: {
   *    }
   * }
   */
  [LOGIN] (state, loginData) {
    state.token = loginData.oAuth2AccessToken.access_token
    state.isLogin = true
    state.user = loginData.sysUser
    setStore('token', loginData.oAuth2AccessToken.access_token)
    setStore('account', loginData.sysUser.account)
  },
  /**
   * 退出登录 并清除token和用户account
   * @param state
   */
  [LOGOUT] (state) {
    state.user = {}
    state.isLogin = false
    state.token = null
    removeStore('account')
    removeStore('token')
  },
  [SAVE_USER] (state, userInfo) {
    state.user = userInfo
  },
  // 读取存在本地的token信息
  [READ_USER] (state) {
    state.token = getStore('token')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
