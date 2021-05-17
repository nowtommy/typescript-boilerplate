// jest.config.js
module.exports = {
  // ...
  moduleNameMapper: {
    "^#/(.+)": "<rootDir>/src/$1"
  },
  moduleFileExtensions: ['ts', 'js'],
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