/**
 *  Create by staneyffer
 *  18-1-13
 */

export class BaseRouter {
  /**
   * @param path 路径
   * @param name  路由名字
   * @param component 组件
   * @param meta    默认都需要登录
   // * @param childrenRouter
   */
  constructor (path, name, component, meta = {}) {
    let tempMeta = {requireAuth: true}
    this.path = path
    this.name = name
    this.component = component
    this.meta = Object.assign(tempMeta, meta)   // 合并两个对象， 若属性相同，后者覆盖前者
    // this.children = childrenRouter
  }
}
