/**
 * 打印路由日志到控制台
 */
export const simpleLogger = (to, from) => {
  const decode = decodeURIComponent
  console.info(`[路由日志] ${decode(from.path || '')} => ${decode(to.path)}`)
}
