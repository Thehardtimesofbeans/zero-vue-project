const { defineConfig } = require('@vue/cli-service')
const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.plugin('circular').use(new CircularDependencyPlugin())
  },
})
