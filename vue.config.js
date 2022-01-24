module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
    devServer:{disableHostCheck: true},

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    }
  }
}
