module.exports = {
  presets: [
    '@vue/app',
  ],
  plugins: [
    // ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }], // `style: true` 会加载 less 文件
    ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'lib', style: true }], // `style: true` 会加载 less 文件
  ],
};
