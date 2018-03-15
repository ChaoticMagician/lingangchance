/**
 *  Create by staneyffer
 *  18-1-12
 */

import types from './mutation-types'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const state = {
  user: {},
  token: null
}

const getters = {
  getToken: state => state.token,
  getUser: state => state.user
}

const actions = {
  login ({commit, state}, user) {
    let __token = user.username + user.password
    commit(types.auth.LOGIN, {__token, user})
  },
  logout ({commit}) {
    commit(types.auth.LOGOUT)
  }
}

const mutations = {
  [types.auth.LOGIN] (state, {token, user}) {
    state.token = token
    state.user = user
  },
  [types.auth.LOGOUT] (state) {
    state.user = {}
    state.token = null
  }
}

console.log('init test-store')
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug,
  plugins: debug ? [createPersistedState({storage: window.localStorage})] : [createPersistedState({storage: window.localStorage})]}
)
