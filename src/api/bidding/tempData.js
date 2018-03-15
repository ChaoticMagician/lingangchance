/**
 *  Create by staneyffer
 *  18-1-17
 */

import {DataInterface} from '../common/dataType'
import {biddCategory, biddingKeys} from './model'

let count = 10  // 当前分类的数据条目数

// 返回数据的接口，目前采用生成的假数据
const getAllBiddingApi = () => {
  let biddings = {}
  for (let i = 0; i < biddCategory.length; i++) {
    let temp = []
    for (let j = 0; j < count; j++) {
      let tempData = new DataInterface(biddingKeys)
      tempData.setData(i * 100 + j,
        '临勘2017-001', 122121123121, '九年义务学校智能化工程', i, '2017-04-27',
        '天津滨燃管网建设有限公司', '天津滨燃管网建设有限公司', '李红梅')
      temp.push(tempData)
    }
    biddings[biddCategory[i].key] = temp
  }
  return biddings
}

export {
  getAllBiddingApi
}
