/**
 *  Create by staneyffer
 *  18-1-18
 */

class BaseTable {
  constructor (key, label, width) {
    this.key = key
    this.label = label
    this.width = width
  }
}

class DataInterface {
  constructor (keys) {
    this.keys = keys
  }
  setData () {
    if (this.keys.length !== arguments.length) {
      console.log('传入的参数和keys数目不一致 at : src/api/bidding/tempData.js')
      alert('传入的参数和keys数目不一致 at : src/api/bidding/tempData.js')
      throw Error('传入的参数和keys数目不一致 at : src/api/bidding/tempData.js')
    }
    for (let i = 0; i < this.keys.length; i++) {
      // alert(this.keys[i].key)
      this[this.keys[i].key] = arguments[i]
    }
  }
}

export {
  BaseTable,
  DataInterface
}
