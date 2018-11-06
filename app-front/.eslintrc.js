module.exports = {
  root: true,
  env: {
    node: true,
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  plugins: [
    "vue",
    "html"
  ],
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    "eslint:recommended"
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "linebreak-style": [0 ,"error", "windows"],
    "max-len": ["error", { "code": 200 }],
    "indent": [
      "error",
      2
    ],
    "quotes": [
        "error",
        "single"
    ],
    "semi": [
        "error",
        // "never"
    ]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};

