module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'array-bracket-spacing': ['error', 'never'],
    '@typescript-eslint/no-explicit-any': 0,
    'vue/multi-word-component-names': 0,
    'vue/attribute-hyphenation': [
      'error',
      'always',
      {
        ignore: ['modelValue'],
      },
    ],
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      {
        autofix: false,
        ignore: ['modelValue'],
      },
    ],
  },
};
