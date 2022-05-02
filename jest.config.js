module.exports = {
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  coverageProvider: 'v8',
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/main/**'],
  watchPathIgnorePatterns: ['globalConfig'],
  preset: '@shelf/jest-mongodb'

}
