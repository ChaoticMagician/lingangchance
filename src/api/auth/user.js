/**
 *  Create by staneyffer
 *  18-1-12
 */

import {request} from '../../utils/http'

const baseUrl = '/platform'

const userLogin = params => {
  return request(baseUrl + '/lingang/user/login.ht', params, 'post')
}

const getUser = () => {
  return request(baseUrl + '/lingang/user/info.ht')
}

export default {
  userLogin,
  getUser
}
