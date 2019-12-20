const path = require('path')

function resolve (folderNmae) {
  return path.join(__dirname, folderNmae)
}

module.exports = {
  devServer: {
    port: 4000
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
    /* 添加分析工具 */
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
        config.plugins.delete('prefetch')
      }
    }
  }
}
