module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      "vue-router": "^3.0.3",
      "vuex": "^3.0.1",
      "axios": "^0.19.0",
    }
  })
  
  if (options.elementUI) {
    api.extendPackage({
      dependencies: {
        "element-ui": "^2.12.0"
      }
    })
  }

  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('../template')
}