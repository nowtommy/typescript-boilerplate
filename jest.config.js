// jest.config.js
const {defaults} = require('jest-config');
module.exports = {
  // ...
  moduleNameMapper: {
    "^#/(.+)": "<rootDir>/src/$1"
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'js'],
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  testMatch: [
    "**/tests/**/*.test.ts"
  ]
};