/**
 *  Create by staneyffer
 *  18-2-1
 */

const uploadBaseUrl = 'https://jsonplaceholder.typicode.com'
const uploadFileUrl = {
  new: {
    url: uploadBaseUrl + '/posts/'
  },
  modify: {
    url: uploadBaseUrl + '/posts/'
  },
  supplement: {
    url: uploadBaseUrl + '/posts/'
  }
}

export {
  uploadFileUrl
}
