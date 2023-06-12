const appName = require('./package.json').name;

const RANDOM_CODE = 'abcdef'
const library = 'portal-component-' + RANDOM_CODE

module.exports = {
  publicPath: '/vue-local',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://localhost:3334',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        secure: false
      },
    },

  },
  // configureWebpack: {
  //   output: {
  //     // libraryExport: 'default'，
  //     library,
  //     libraryTarget: 'umd',
  //     // jsonpFunction: `webpackJsonp_${name}`,
  //   },
  //   externals: {
  //     electron: 'electron'
  //   }
  // },
  css: { extract: false },
  configureWebpack: {
    output: {
      library: `${appName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${appName}`,
    },
  }

};