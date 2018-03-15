/**
 *  Create by staneyffer
 *  18-1-16
 */

import Vue from 'vue'
import {SAVE_PROJECTS} from '../../mutation-types/project'
import * as projectApi from '../../../api/project/index'
import {projectCategory} from '../../../model/project'
import {initCateData} from '../../../model/common'
import * as pageApi from '../../../utils/pagination'

const state = {
  projectsInfo: pageApi.initCateItems(projectCategory),  // 包含分页信息的项目信息
  categoryData: initCateData(projectCategory, []),       // 初始化各个分类数据为空
  paginationInfo: pageApi.initItemsObj(projectCategory)  // 分页数据
}

const getters = {
  allData: state => {
    return state.categoryData
  },
  paginationData: state => {
    return state.paginationInfo
  }
}

const actions = {
  /**
   * 请求所有的数据
   * @param commit
   * @param state
   */
  getAllProject ({commit, state}) {
    let projectsData = {}
    projectApi.getAllProject(true)
      .then(res => {
        projectsData = res
        commit(SAVE_PROJECTS, projectsData)
      }).catch(res => {
        Vue.$log.error('获取数据失败 at store.project actions')
        Vue.$log.error(res)
      })
  },
  /**
   *
   * @param commit
   * @param state
   * @param cateConfigObj
   * {
   *  new: {  // new分类
   *    options: {} //此处为http请求的参数
   *  }
   * }
   */
  getProjectByCate ({commit, state}, cateConfigObj) {
    let projectsData = {}
    projectApi.getProjectByCate(cateConfigObj, true)
      .then(res => {
        projectsData = res
        commit(SAVE_PROJECTS, projectsData)
      })
      .catch(res => {
        Vue.$log.error('获取数据失败 at store.project actions')
        Vue.$log.error(res)
      })
  }
}

const mutations = {
  /**
   * 保存所有项目数据
   * @param state
   * @param projectsData
   */
  [SAVE_PROJECTS] (state, projectsData) {
    // 先保存所有的项目及分页数据
    for (let key of Object.keys(projectsData)) {
      state.projectsInfo[key] = projectsData[key]
    }
    // console.log(projectsData)
    // 保存分类对应的数据
    state.categoryData = pageApi.getCateItemsData(state.projectsInfo)
    // 保存分类对应的分页信息
    state.paginationInfo = pageApi.getCatePageData(state.projectsInfo)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
