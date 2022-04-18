module.exports = {
  collectCoverage: true,
  moduleFileExtensions: ["js", "jsx", "json"],
  globals: {
    window: true,
  },
  collectCoverageFrom: ["**/*.jsx", "**/*.js"],
  testEnvironment: "jest-environment-jsdom",
};
