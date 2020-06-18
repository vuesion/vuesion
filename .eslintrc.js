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
    'prettier/vue',
    'plugin:nuxt/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
  ],
  plugins: [
    'prettier',
    '@typescript-eslint', 
    'vue'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-async-promise-executor': 0,
    '@typescript-eslint/camelcase': ['error', { allow: ['access_token', 'refresh_token'] }],
    'vue/max-attributes-per-line': 0,
    'vue/no-v-html': 0,
    'vue/html-self-closing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/html-indent': 0,
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
