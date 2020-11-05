module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest'
  },
  testMatch: ['<rootDir>/test/*.test.(ts|js)'],
  testEnvironment: 'node'
}
