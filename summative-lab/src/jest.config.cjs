module.exports = {
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/src/tests/setupPolyfills.cjs"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.cjs"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/src/tests/styleMock.cjs",
  },
};