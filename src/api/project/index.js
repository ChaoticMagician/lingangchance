/**
 *  Create by staneyffer
 *  18-1-16
 */
import {request} from '../../utils/http'
import {getAllProjectApi, getProjectByCateApi, getFormHtmlApi, deleteProjectByIdApi, deleteProjectsByIdsApi} from './getData'  // 从服务器请求数据
// import {getAllProjectApi, getProjectByCateApi, getFormHtmlApi, deleteProjectByIdApi, deleteProjectsByIdsApi} from './tempData'  // 本地默认生成数据
import {initCateItemsData} from '../../utils/pagination'

/**
 * 获取所有分类的项目数据
 * @param initPagination 是否需要初始化项目分页信息(默认后台返回带有分页的数据, 所以默认不需要单独分页)
 * @returns {Promise<*>}
 * 成功响应{
 *  categoryName1: {
 *    data: [],
 *    meta: {
 *      totalItems: 1000
 *      pageCount: 10
 *      pageSize: 100
 *      currentPage: 1
 *    }
 *  }
 * }
 */
async function getAllProject (initPagination = false) {
  let data = await getAllProjectApi()
  if (initPagination) {
    // 如果需要默认初始化分页信息
    // Vue.$log.debug(data)
    data = initCateItemsData(data)
  }
  return data
}

async function getProjectByCate (cateConfigObj, initPagination = false) {
  let data = await getProjectByCateApi(cateConfigObj)
  if (initPagination) {
    // 如果需要默认初始化分页信息
    // Vue.$log.debug(data)
    data = initCateItemsData(data)
  }
  return data
}

async function getFormHtml () {
  let data = await getFormHtmlApi()
  return data
}
async function deleteProjectById (idData) {
  return deleteProjectByIdApi(idData)
}
async function deleteProjectsByIds (idsData) {
  return deleteProjectsByIdsApi(idsData)
}
const uploadFormHtml = (formData) => {
  return request('/platform/lingang/enginConstr/startFlow.ht', formData, 'post')
}
export {
  getAllProject,
  getProjectByCate,
  getFormHtml,
  deleteProjectById,
  deleteProjectsByIds,
  uploadFormHtml
}
