//手动配置一些webpack配置
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [], //增加引入时可以省略的扩展名,脚手架默认已经配置了.js .css .vue
      alias: {
        'assets': '@/assets', //@已经默认配置src路径了
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      },
    }
  },
}