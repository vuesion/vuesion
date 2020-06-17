module.exports = {
  globals: {
    window: true,
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  rootDir: 'src',
  setupFiles: ['<rootDir>/test/jestsetup.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/jest-dom-importer.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    // necessary to handle differences in alias for ts vs js
    '^~@/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  collectCoverageFrom: [
    '<rootDir>/assets/**/*.vue',
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/store/**/*.vue',
  ],
};
