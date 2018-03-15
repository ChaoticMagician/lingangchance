/**
 *  Create by staneyffer
 *  18-1-19
 */

import {BaseTable} from '../common/dataType'

// 表头 及数据字段的键，表头列宽度
const biddingKeys = [
  new BaseTable('id', '序号', 50),
  new BaseTable('biddingId', '招标编号', 180),
  new BaseTable('recordId', '招标备案号', 180),
  new BaseTable('biddingSegName', '标段名称', 200),
  new BaseTable('biddingSegId', '标段号', 80),
  new BaseTable('recordTime', '备案时间', 150),
  new BaseTable('projectCompany', '建设单位', 300),
  new BaseTable('getBidCompany', '中标单位', 300),
  new BaseTable('handleUser', '办理人', 120)
]

// 数据的分类， 以及该分类对应的字段及其id
const biddCategory = [
  {
    id: 0,
    name: '勘察标',
    key: 'survey'
  },
  {
    id: 1,
    name: '设计标',
    key: 'design'
  },
  {
    id: 2,
    name: '监理标',
    key: 'supervisor'
  },
  {
    id: 3,
    name: '施工标',
    key: 'construction'
  },
  {
    id: 4,
    name: '采购标',
    key: 'purchase'
  },
  {
    id: 5,
    name: '装修标',
    key: 'decoration'
  },
  {
    id: 6,
    name: '绿化标',
    key: 'greening'
  }
]

export {
  biddingKeys,
  biddCategory
}
