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
  }
}
