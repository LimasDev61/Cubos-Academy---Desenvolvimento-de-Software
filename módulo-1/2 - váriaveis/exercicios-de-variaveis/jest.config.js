/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  reporters: ["./custom-test-results-processor"],
  cache: false,
};
