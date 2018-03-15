import {BaseRouter} from '../baseRouter'
const biddingComponent = r => require.ensure([], () => r(require('@/views/bidding/bidding')), 'bidding')

const basePath = 'bid'
const biddingPaths = {
  paths: [
    {
      name: '首页',
      url: '/index'
    },
    {
      name: '招投标备案',
      url: basePath
    }
  ]
}

const bidding = new BaseRouter(basePath, '招投标备案', biddingComponent, biddingPaths)

export {
  bidding
}
