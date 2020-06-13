module.exports = {
  globals: {
    window: true,
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  rootDir: 'src',
  setupFiles: ['<rootDir>/test/jestsetup.ts'],
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
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/components/**/*.vue', '<rootDir>/pages/**/*.vue'],
};
