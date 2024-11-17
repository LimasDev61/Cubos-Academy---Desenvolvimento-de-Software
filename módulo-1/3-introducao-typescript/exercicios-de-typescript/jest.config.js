/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  reporters: ["./custom-test-results-processor"],
  cache: false,
};
