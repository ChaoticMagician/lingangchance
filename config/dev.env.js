'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // baseUrl: '"http://192.168.1.108:8080/sws"'
  baseUrl: '"http://127.0.0.1:8080/sws"'
})
