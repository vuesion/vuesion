/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue'],
  plugins: ['stylelint-scss', './tools/stylelint/namespaced-include.mjs'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': [
      '^[a-z0-9-]+$',
      {
        message: 'Variable definitions must use lowercase-dash format without namespace (e.g. $textarea-border-radius)',
      },
    ],
    'declaration-property-value-disallowed-list': [
      {
        '/.*/': ['\\$(?![a-z0-9]+\\.)[a-zA-Z0-9_-]+'],
      },
      {
        message: 'Variable usage must be namespaced (e.g. ds.$space-2)',
      },
    ],
    'scss/at-mixin-pattern': [
      '^[a-z0-9-]+$',
      {
        message: 'Mixin definitions must use lowercase-dash format without namespace (e.g. @mixin media-min)',
      },
    ],
    'selector-class-pattern': [
      '^[a-z0-9]+(?:-[a-z0-9]+)*$',
      {
        message: 'Expected class selector to be kebab-case (e.g. .justify-between)',
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['palette-color-level', 'palette-color'],
      },
    ],
    'vuesion/namespaced-include': [true],
  },
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        'selector-class-pattern': [
          '^(?:[a-z][a-zA-Z0-9]*|[a-z][a-z0-9]*(?:-[a-z0-9]+)*)$',
          {
            message: 'Expected class selector to be lowerCamelCase in Vue SFCs (e.g. .vueBackToTop)',
          },
        ],
      },
    },
  ],
};
