/*
 * @Date: 2020-08-11 17:41:26
 * @LastEditors: cola
 * @LastEditTime: 2020-08-12 16:12:02
 * @Description: Vue全局配置
 */

module.exports = { 
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
