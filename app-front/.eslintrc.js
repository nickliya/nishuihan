module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [
    "vue"
  ],
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "linebreak-style": [0 ,"error", "windows"],
    "max-len": ["error", { "code": 200 }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};

