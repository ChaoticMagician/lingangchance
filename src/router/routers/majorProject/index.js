import {BaseRouter} from '../baseRouter'

const allComponent = r => require.ensure([], () => r(require('@/views/majorProject/all')), 'all')
const infoComponent = r => require.ensure([], () => r(require('@/views/majorProject/info')), 'info')

const basePath = 'main-p'
const thePaths1 = {
  paths: [
    {
      name: '首页',
      url: '/index'
    },
    {
      name: '重点项目',
      url: '/main-p'
    }
  ]
}
const thePaths2 = {
  paths: [
    {
      name: '首页',
      url: '/index'
    },
    {
      name: '重点项目',
      url: '/main-p'
    },
    {
      name: '项目详情',
      url: '/main-p'
    }
  ]
}
const majorProject = new BaseRouter(basePath, '重点项目', allComponent, thePaths1)
const infoMajorProject = new BaseRouter(basePath + '/:id', '项目详情', infoComponent, thePaths2)
export {
  majorProject,
  infoMajorProject
}
