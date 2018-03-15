/**
 *  Create by staneyffer
 *  18-1-23
 */

class PageItem {
  /**
   * @param totalItems 总条目数
   * @param pageCount 总页数
   * @param pageSize 每一页的数据数量
   * @param currentPage 当前页号
   */
  constructor (totalItems = 1, pageCount = 1, pageSize = 10, currentPage = 1) {
    this.totalItems = totalItems
    this.pageCount = pageCount
    this.pageSize = pageSize
    this.currentPage = currentPage
  }
}
class Pagination {
  /**
   * @param data  当前页的数据条目 type:Array
   * @param meta 分页信息
   */
  constructor (data = [], meta = new PageItem()) {
    this.data = data
    this.meta = meta
  }
}

/**
 * 初始化 各类数据的分页信息 默认data为[]
 * @param cateArray 分类数组
 * @returns {{}}
 */
const initCateItems = (cateArray) => {
  let items = {}
  for (let i = 0; i < cateArray.length; i++) {
    items[cateArray[i].key] = new Pagination()
  }
  return items
}

/**
 * 初始化每个分类下的数据的分页信息
 * 返回示例
 * @param cateArray 分类数组
 * @param itemObj 默认的PageItem
 * @returns
 * {
 *  'new': {
 *      totalItems: 100
 *      pageCount: 4
 *      pageSize = 25
 *      currentPage: 1
 *  },
 *  'modify': {
 *      totalItems: 100
 *      pageCount: 4
 *      pageSize = 25
 *      currentPage: 1
 *  }
 */
const initItemsObj = (cateArray, itemObj = new PageItem()) => {
  let dataObj = {}
  for (let i = 0; i < cateArray.length; i++) {
    dataObj[cateArray[i].key] = itemObj
  }
  return dataObj
}

/**
 * 针对没有分页的数据，默认初始化并返回含有分页信息的对象
 * 方便对本地数据的初始化和服务器不含分页信息时候返回的数据进行分页初始化
 * 默认 PageItem(data.length, 1, data.length, 1)
 * @param cateItemsDataObj
 */
const initCateItemsData = (cateItemsDataObj) => {
  let datas = {}
  for (let key of Object.keys(cateItemsDataObj)) {
    datas[key] = new Pagination(cateItemsDataObj[key], new PageItem(cateItemsDataObj[key].length, 1, cateItemsDataObj[key].length, 1))
  }
  return datas
}

/**
 * 提取所有分类的数据
 * @param catePageItems 从后台得到的所有的分类和分页的数据 Pagination对象
 * 示例
 * @returns {{}}
 * {
 *    'new': [],
 *    'modify': []
 * }
 */
const getCateItemsData = (catePageItems) => {
  let datas = {}
  for (let key of Object.keys(catePageItems)) {
    datas[key] = catePageItems[key].data
  }
  return datas
}
const getCatePageData = (catePageItems) => {
  let datas = {}
  for (let key of Object.keys(catePageItems)) {
    datas[key] = catePageItems[key].meta
  }
  return datas
}
export {
  PageItem,
  Pagination,
  initCateItems,
  getCateItemsData,
  getCatePageData,
  initCateItemsData,
  initItemsObj
}
