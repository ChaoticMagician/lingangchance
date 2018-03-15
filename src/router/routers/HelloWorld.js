import {BaseRouter} from './baseRouter'

const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld')

export default new BaseRouter('hello', 'hello 测试', HelloWorld, {requireAuth: false})
