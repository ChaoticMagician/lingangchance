/**
 *  Create by staneyffer
 *  18-1-16
 */

// import {projectKeys, projectCategory} from './model'
// import {DataInterface} from '../common/dataType'
import {DataInterface} from '../../model/common'
import {DATAKEYS, projectCategory} from '../../model/project'
import {request} from '../../utils/http'
// import Vue from 'vue'

const baseUrl = '/platform/lingang/enginConstr'
// const formHtmlUrl = baseUrl + '/getFormHtml.ht'
const deleteByIdUrl = baseUrl + '/delById.ht'
const deleteByIdsUrl = baseUrl + '/delByIds.ht'

let count = 11
const getAllProjectApi = () => {
  let projects = {}
  for (let i = 0; i < projectCategory.length; i++) {
    let temp = []
    for (let j = 0; j < count; j++) {
      let tableId = (j + 1) > 9 ? '' : '0'
      let tempProject = new DataInterface(
        DATAKEYS,
        tableId + (j + 1),
        i * 100 + j,
        '12345678',
        '九年义务教育智能化工程',
        '2018-01-' + (j + 1),
        '临港有限公司',
        '刘帅',
        13011228989,
        '张小明'
      )
      temp.push(tempProject)
    }
    projects[projectCategory[i].key] = temp
  }
  // Vue.$log.error('log from function outside component.')
  // alert(projects)
  return projects
}
const inquire = (dataArray, projectName, constrUnit, recordtime, recordtimeend) => {
  let inquireData = []
  for (let d of dataArray) {
    // alert(d.recordTime.getTime())
    let time = new Date(d.recordTime)
    if (d.projectName === projectName && d.projectCompany === constrUnit &&
      time >= recordtime && time <= recordtimeend) {
      inquireData.push(d)
    }
  }
  return inquireData
}
function getProjectByCateApi (cateConfigObj) {
  const allData = getAllProjectApi()
  let cateKey = Object.keys(cateConfigObj)[0]   // 默认只读取第一个键
  let inquireData = inquire(allData[cateKey], cateConfigObj[cateKey].projectName,
    cateConfigObj[cateKey].constrUnit, cateConfigObj[cateKey].recordtime, cateConfigObj[cateKey].recordtimeend)
  console.error(inquireData)

  return {
    [cateKey]: inquireData
  }
}
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
async function getFormHtmlApi () {
  let htmlStr = '<h2>hello, world</h2>'
  let data = {}
  data.data = htmlStr
  await sleep(200)
  return data
}
function deleteProjectByIdApi (idData) {
  return request(deleteByIdUrl, idData, 'get')
}
function deleteProjectsByIdsApi (idsData) {
  return request(deleteByIdsUrl, idsData, 'get')
}
/*
function fileUploadApi() {
}
*/
export {
  getAllProjectApi,
  getProjectByCateApi,
  getFormHtmlApi,
  deleteProjectByIdApi,
  deleteProjectsByIdsApi
}
