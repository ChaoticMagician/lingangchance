/**
 *  Create by staneyffer
 *  18-1-19
 */

import {BaseRouter} from '../baseRouter'
const notFindComponent = r => require.ensure([], () => r(require('@/components/common/404')), 'notFind')

const notFindPath = '*'
const notFindPaths = {
  paths: [
    {
      name: '首页',
      url: '/index'
    },
    {
      name: 'not find',
      url: notFindPath
    }
  ]
}

const notFind = new BaseRouter(notFindPath, 'not find', notFindComponent, notFindPaths)

export {
  notFind
}
