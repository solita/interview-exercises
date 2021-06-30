module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['/build/'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testTimeout: 20000,
}
