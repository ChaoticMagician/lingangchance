import base from '@/components/base'
import mainBase from '@/components/mainBase'

import HelloWorld from './HelloWorld'
import login from './auth'
import home from './home'
import {majorProject, infoMajorProject} from './majorProject'
import {project, newProject} from './project'
import {bidding} from './bidding'
import {notFind} from './error'

export default[
  {
    path: '/',
    component: mainBase,
    children: [
      majorProject,
      infoMajorProject,
      project,
      newProject,
      bidding
    ]
  },
  {
    path: '/index',
    component: base,
    children: [
      home,
      HelloWorld
    ]
  },
  login,
  notFind
]
