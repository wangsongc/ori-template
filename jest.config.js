module.exports = {
  preset: 'ts-jest',
  testMatch: [ "**/tests/components/*.[jt]s?(x)"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/components/**/*.vue'],
  testEnvironment: 'jsdom',
}
