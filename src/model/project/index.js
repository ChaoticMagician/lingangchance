/**
 *  Create by staneyffer
 *  18-1-23
 */

import {BaseMap} from '../common'

/**
 * 返回表格的表头信息
 * @param key 表格数据的key
 * @param label 表头名字
 * @param width 该列宽度
 * @returns {BaseMap} 给BaseMap对象添加了宽度（width）的新对象
 */
const getTableKeys = (key, label, width) => {
  let data = new BaseMap(key, label)
  Object.assign(data, {width: width})
  return data
}

const DATAKEYS = [
  new BaseMap('tableId', '序号'),
  new BaseMap('id', '数据id'),
  new BaseMap('recordId', '工程报建备案号'),
  new BaseMap('projectName', '项目名称'),
  new BaseMap('recordTime', '备案时间'),
  new BaseMap('projectCompany', '建设单位'),
  new BaseMap('recordUser', '备案联系人'),
  new BaseMap('recordUserPhone', '备案联系人电话'),
  new BaseMap('handleUser', '办理人')
]

/**
 * 项目的表头信息
 * @type {*[]}
 */
const tableKeys = [
  getTableKeys('tableId', '序号', 100),
  getTableKeys('recordId', '工程报建备案号', 250),
  getTableKeys('projectName', '项目名称', 250),
  getTableKeys('recordTime', '备案时间', 250),
  getTableKeys('projectCompany', '建设单位', 300),
  getTableKeys('recordUser', '备案联系人', 150),
  getTableKeys('recordUserPhone', '备案联系人电话', 150),
  getTableKeys('handleUser', '办理人', 150)
]

/**
 * 项目的分类
 * @type {*[]}
 */
const projectCategory = [
  {
    name: '新建',
    id: 0,
    key: 'new'
  },
  {
    name: '变更',
    id: 1,
    key: 'modify'
  },
  {
    name: '增补',
    id: 2,
    key: 'supplement'
  }
]

export {
  DATAKEYS,
  tableKeys,
  projectCategory
}
