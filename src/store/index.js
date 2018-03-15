/**
 *  Create by staneyffer
 *  18-1-11
 */

import Vue from 'vue'
import Vuex from 'vuex'

import {state} from './state'
import {mutations} from './mutations'
import {actions} from './actions'
import {getters} from './getters'
import user from './modules/auth/user'
import project from './modules/project'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    user,
    project
  },
  strict: debug,
  plugins: debug ? [] : []
})
