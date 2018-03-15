/**
 *  Create by staneyffer
 *  18-1-19
 */

import {request} from '../../utils/http'
import Vue from 'vue'
import {DataInterface} from '../../model/common'
import {DATAKEYS} from '../../model/project'
import {parserTimestamp} from '../../utils/common'

const baseUrl = '/platform/lingang/enginConstr'
const formHtmlUrl = baseUrl + '/getFormHtml.ht'
const deleteByIdUrl = baseUrl + '/delById.ht'
const deleteByIdsUrl = baseUrl + '/delByIds.ht'
// const deleteByIdsUrl = '/platform/lingang/user' + '/post.ht'

/**
 * 获取数据请求配置
 * options为参数信息(查询，分页等请求参数)
 * @type {{new: {url: string, options: {}}, modify: {url: string, options: {}}, supplement: {url: string, options: {}}}}
 */
const getDataConfig = {
  new: {
    url: baseUrl + '/getAllByNew.ht',
    options: {}
  },
  modify: {
    url: baseUrl + '/getAllByChange.ht',
    options: {}
  },
  supplement: {
    url: baseUrl + '/getAllBySupplement.ht',
    options: {}
  }
}

/**
 * 更新请求参数配置
 * @param configObj 默认的配置 getDataConfig
 * @param newConfigObj 需要添加到默认配置中的信息
 * {
 *    new: {
 *        options: {} //此处为http请求的参数
 *    }
 * }
 * @returns {*} 更新后的配置
 */
const updateConfig = (configObj, newConfigObj) => {
  let tempConfigObj = configObj
  for (let key of Object.keys(newConfigObj)) {
    tempConfigObj[key].options = newConfigObj[key].options
  }
  return tempConfigObj
}
const getOneProject = (url, options = {}) => {
  return request(url, options)
}

/**
 * note: 箭头函数( => ) 不能使用 arguments
 * 这里对后台返回的数据做了筛选
 * @param arguments: 后台返回的
 * @returns {{}}
 */
/**
 * note: 箭头函数( => ) 不能使用 arguments
 * 这里对后台返回的数据做了筛选
 * @param dataKeys key的数组
 * @param responseArray 响应数据的数组
 * @returns {{}}
 */
const handerResponseData = (dataKeys, responseArray) => {
  let datas = {}
  if (dataKeys.length !== responseArray.length) {
    Vue.$log.error('error at api/project/getData.js: 传入的参数和种类数目不一致')
    throw Error('error at api/project/getData.js: 传入的参数和种类数目不一致')
  } else {
    // Vue.$log.error(typeof arguments[0])
    for (let i = 0; i < dataKeys.length; i++) {
      if (responseArray[i] === null) {
        datas[dataKeys[i]] = null
      } else {
        let tempArray = []
        for (let j = 0; j < responseArray[i].length; j++) {
          let tableId = (j + 1) > 9 ? '' : '0'
          let tempData = new DataInterface(
            DATAKEYS,
            tableId + (j + 1),
            responseArray[i][j].id,  // 序号
            responseArray[i][j].porjectNum,  // 工程报建备案号
            responseArray[i][j].projectName, // 项目名称
            parserTimestamp(responseArray[i][j].recordtime),  // 备案时间
            responseArray[i][j].constrUnit,  // 建设单位
            responseArray[i][j].contacts,    // 备案联系人
            responseArray[i][j].contactNumber, // 备案联系人电话
            responseArray[i][j].transactor   // 办理人
          )
          tempArray.push(tempData)
        }

        datas[dataKeys[i]] = tempArray
      }
    }
  }
  return datas
}

/**
 * 并发多个请求
 */
async function getAllProjectApi (newConfigObj = {}) {
  let requestConfig = updateConfig(getDataConfig, newConfigObj)
  let allPromise = []
  let dataKeys = []
  for (let key of Object.keys(requestConfig)) {
    const tempPromise = getOneProject(requestConfig[key].url, requestConfig[key].options)
    allPromise.push(tempPromise)
    dataKeys.push(key)
  }
  const responses = await Promise.all(allPromise)
  const responseData = responses.map((element) => { return element.data })
  return handerResponseData(dataKeys, responseData)
}

async function getProjectByCateApi (cateConfigObj) {
  let cateKey = Object.keys(cateConfigObj)[0]   // 默认只读取第一个键
  let config = updateConfig(getDataConfig, cateConfigObj)
  let requestConfig = config[cateKey]
  const response = await getOneProject(requestConfig.url, requestConfig.options)
  return handerResponseData([cateKey], [response.data])
}

function getFormHtmlApi () {
  return request(formHtmlUrl)
}
function deleteProjectByIdApi (idData) {
  return request(deleteByIdUrl, idData, 'get')
}
function deleteProjectsByIdsApi (idsData) {
  return request(deleteByIdsUrl, idsData, 'post')
}
export {
  getAllProjectApi,
  getProjectByCateApi,
  getFormHtmlApi,
  deleteProjectByIdApi,
  deleteProjectsByIdsApi
}
