/**
 *  Create by staneyffer
 *  18-1-22
 */

import {request} from '../../utils/http'

export const uploadRegister = parms => {
  request('/WordEdit/register', parms, 'post')
}
