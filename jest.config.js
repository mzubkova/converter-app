module.exports = {
  collectCoverage: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  globals: {
    window: true,
  },
  collectCoverageFrom: ["**/*.jsx", "**/*.js", "**/*.ts", "**/*.tsx"],
  moduleDirectories: ["node_modules", "<rootDir>", "src"],
  testMatch: [
    "**/*.(test|spec).(js)",
    "**/*.(test|spec).(jsx)",
    "**/*.(test|spec).(ts)",
    "**/*.(test|spec).(tsx)",
  ],
  coverageReporters: ["json", "lcov"],
  setupFilesAfterEnv: ["<rootDir>/__tests__/setupTests.js"],
  setupFiles: ["jest-localstorage-mock"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/public/",
    "/dist/",
    "jest.config.js",
    "package.json",
    "webpack.config.js",
    "/coverage/",
  ],
  moduleNameMapper: {
    "^.+\\.(css|scss)$": "identity-obj-proxy",
    "^/src/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};
