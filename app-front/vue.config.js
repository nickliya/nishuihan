module.exports = {
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true,
      },
    },
  },
  // 输出目录
  assetsDir: 'static',
  // 基本路径
  baseUrl: './',
};
