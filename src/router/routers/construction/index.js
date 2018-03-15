const loginComponent = r => require.ensure([], () => r(require('@/views/auth/login')), 'login')

export const login = {
  path: '/login',
  name: 'login',
  component: loginComponent
}
