const assert = require("node:assert/strict");
const { add } = require("./app");

assert.equal(add(10, 20), 30);

console.log("All tests passed!");