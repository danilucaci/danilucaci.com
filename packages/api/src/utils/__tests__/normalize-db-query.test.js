const { normalizeDBQuery } = require("../normalize-db-query");

describe("normalizeDBQuery", () => {
  it("is defined", () => {
    expect(normalizeDBQuery).toBeDefined();
  });

  it("throws if the value is not a promise", async () => {
    await expect(normalizeDBQuery({})).resolves.toMatchObject({
      data: null,
      error: expect.stringMatching(/not a promise/i),
    });
  });

  it("handles rejections", async () => {
    await expect(
      normalizeDBQuery(Promise.reject(new Error("nope"))),
    ).resolves.toMatchObject({
      data: null,
      error: "nope",
    });
  });

  it("returns the data if the value is a promise", async () => {
    await expect(
      normalizeDBQuery(Promise.resolve("done")),
    ).resolves.toMatchObject({
      data: "done",
      error: null,
    });
  });
});
