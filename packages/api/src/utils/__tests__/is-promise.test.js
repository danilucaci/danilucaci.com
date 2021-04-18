const { isPromise } = require("../is-promise");

describe("isPromise", () => {
  it("returns true for a promise resolve constructor", () => {
    const promise = new Promise((res) => {
      res();
    });
    expect(isPromise(promise)).toBe(true);
  });

  it("returns true for a promise.resolve", () => {
    const promise = Promise.resolve();
    expect(isPromise(promise)).toBe(true);
  });

  it.each`
    value
    ${1}
    ${true}
    ${{}}
    ${[]}
    ${"hello"}
    ${Promise.resolve}
  `("returns false when called with: $value", ({ value }) => {
    expect(isPromise(value)).toBe(false);
  });
});
