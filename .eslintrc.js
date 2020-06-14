const path = require('path');

module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: path.resolve(__dirname),
    ecmaVersion: 2018,
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    serviceworker: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    '@typescript-eslint/camelcase': ['error', { allow: ['$_veeValidate', 'access_token', 'refresh_token'] }],
  },
  globals: {
    CLIENT: false,
    SERVER: false,
    PRODUCTION: false,
    DEVELOPMENT: false,
    TEST: false,
    SPA: false,
    nodeRequire: false,
  },
}
