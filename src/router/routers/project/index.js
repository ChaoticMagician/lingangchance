import {BaseRouter} from '../baseRouter'

const projectComponent = r => require.ensure([], () => r(require('@/views/project/project')), 'project')
const newProjectComponent = r => require.ensure([], () => r(require('@/views/project/newProject')), 'newProject')

const rootPath = '/index'
const basePath = '/project'
const projectPaths = {
  paths: [
    {
      name: '首页',
      url: rootPath
    },
    {
      name: '项目报建',
      url: basePath
    }
  ]
}
const newPath = basePath + '/new'
const newProjectPaths = {
  paths: [
    projectPaths.paths[0],
    projectPaths.paths[1],
    {
      name: '新建',
      url: newPath
    }
  ]
}

const newProject = new BaseRouter(newPath, '项目报建-新建', newProjectComponent, newProjectPaths)

const project = new BaseRouter(basePath, '项目报建', projectComponent, projectPaths)

export {
  project,
  newProject
}
