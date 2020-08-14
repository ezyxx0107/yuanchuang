/*
 * @LastEditTime: 2020-08-14 16:48:11
 * @Description: Vue全局配置
 */

module.exports = { 
  publicPath: "./",
  css: {
    loaderOptions: {
      // 全局样式变量
      less: {
        globalVars: {
          'theme-color': '#F74556'
        }
      }
    }
  } 
}
