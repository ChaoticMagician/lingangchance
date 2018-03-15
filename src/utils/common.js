/**
 *  Create by staneyffer
 *  18-1-17
 */

const parserTimestamp = (timestamp = null) => {
  if (timestamp === null) {
    return ''
  }
  let date = new Date(timestamp)
  return date.toISOString().substring(0, 10)
  // return date.getTime()
}

export {
  parserTimestamp
}
