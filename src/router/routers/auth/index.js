import {BaseRouter} from '../baseRouter'
const loginComponent = r => require.ensure([], () => r(require('@/views/auth/login')), 'login')

export default new BaseRouter('/login', '登录', loginComponent, {requireAuth: false})
