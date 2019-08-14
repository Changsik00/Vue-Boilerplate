module.exports = {
  transpileDependencies: ['vuetify'],
  // https://cli.vuejs.org/guide/css.html#automatic-imports
  // https://www.npmjs.com/package/sass-resources-loader
  // npm install --save-dev node-sass sass-loader sass-resources-loader
  // css: {
  //   modules: true,
  // },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: './src/assets/css/common.scss',
        })
        .end()
    })
  }
}