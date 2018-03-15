import {BaseRouter} from '../baseRouter'

const homeComponent = r => require.ensure([], () => r(require('@/views/home/home')), 'home')

export default new BaseRouter('', '主页', homeComponent)
