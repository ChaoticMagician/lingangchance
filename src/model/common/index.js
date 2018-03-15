/**
 *  Create by staneyffer
 *  18-1-23
 */

import Vue from 'vue'

/**
 * 数据key与其名字的映射
 */
class BaseMap {
  constructor (key, label) {
    this.key = key
    this.label = label
  }
}

/**
 * 数据接口
 */
class DataInterface {
  /**
   * @param keyArray 数据键数组
   * @param res 构造函数的其余参数, 表示keyArray中key对应的数据, 参数的个数必须等于keyArray的长度
   */
  constructor (keyArray, ...res) {
    if (keyArray.length !== res.length) {
      Vue.$log.error('传入的参数和keys数目不一致 at DataInterface')
    } else {
      for (let i = 0; i < keyArray.length; i++) {
        this[keyArray[i].key] = res[i]
      }
    }
  }
}

/**
 * @param cateArray 分类数据的数组
 * @param data 初始化的值，默认为空数组
 * @returns
 * 示例
 * {
 *    new: [],
 *    modify: [],
 *    supplement: []
 * }
 */
const initCateData = (cateArray, data = []) => {
  let dataObj = {}
  for (let i = 0; i < cateArray.length; i++) {
    dataObj[cateArray[i].key] = data
  }
  return dataObj
}

export {
  BaseMap,
  DataInterface,
  initCateData
}
