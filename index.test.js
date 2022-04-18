const { it, expect } = require("@jest/globals");
let { getString, isAnagram } = require("./index");

describe("getString", () => {
  it("getString should be defined", () => {
    expect("getString").toBeDefined();
  });
  it("should return string", () => {
    expect(getString("*", "2", "s", "2d")).toBe("2*s*2d");
  });
});

describe("isAnagram", () => {
  it("isAnagram should be defined", () => {
    expect("isAnagram").toBeDefined();
  });
  it("should work with array", function () {
    expect(isAnagram("15, 99")).toBe("Not an array");
  });
  it("should return true", () => {
    expect(isAnagram(["maz", "zam", "amz"])).toBe(true);
  });
  it("should return false", () => {
    expect(isAnagram(["mazZ", "zam", "amz"])).toBe(false);
  });
});
