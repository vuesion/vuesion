import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default [
  {
    ignores: [
      '**/tools',
      '**/coverage',
      '**/cypress',
      '**/i18n',
      '**/node_modules',
      '**/.nuxt',
      '**/.output',
      '**/_templates',
      '**/.storybook',
      '**/storybook-static',
      '**/test',
      '**/*.spec.ts',
      '**/*.stories.ts',
    ],
  },
  {
    files: ['**/*.{ts,vue}'],
    rules: {},
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
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

      'import/no-named-as-default': 0,
      'vue/no-v-text-v-html-on-component': 0,
      'vue/no-v-html': 0,
      'import/no-duplicates': 0,
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
];
