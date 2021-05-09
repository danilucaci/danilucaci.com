const { UserRepository } = require("../user-repository");
const { makeTestServerMethods } = require("../../utils/tests/test-utils");

describe("UserRepository", () => {
  const {
    startTestServer,
    stopTestServer,
    clearUsersCollection,
  } = makeTestServerMethods();

  beforeAll(async () => await startTestServer());
  afterEach(async () => await clearUsersCollection());
  afterAll(async () => {
    await clearUsersCollection();
    await stopTestServer();
  });

  it("creates a new user", async () => {
    const firebaseUID = "12345";
    const fullName = "dani lucaci";
    const email = "dani@mail.com";

    const userData = await UserRepository.create({
      firebaseUID: firebaseUID,
      fullName: fullName,
      email: email,
    });

    expect(userData).toMatchObject({
      data: {
        _id: expect.anything(),
        firebaseUID: firebaseUID,
        fullName: fullName,
        email: email,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
        __v: expect.any(Number),
      },
      error: null,
    });
  });

  it("fails to create a new user with an invalid email", async () => {
    const firebaseUID = "12345";
    const fullName = "dani lucaci";
    const email = "nada";

    const userData = await UserRepository.create({
      firebaseUID: firebaseUID,
      fullName: fullName,
      email: email,
    });

    expect(userData).toMatchObject({
      data: null,
      error: expect.stringContaining("is not valid"),
    });
  });

  it("finds a user by email", async () => {
    const firebaseUID = "12345";
    const fullName = "dani lucaci";
    const email = "dani@mail.com";

    await UserRepository.create({
      firebaseUID: firebaseUID,
      fullName: fullName,
      email: email,
    });

    const found = await UserRepository.findByEmail(email);

    expect(found).toMatchObject({
      data: {
        _id: expect.anything(),
        firebaseUID: firebaseUID,
        fullName: fullName,
        email: email,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      },
      error: null,
    });
  });

  it("finds many users by a query", async () => {
    const firebaseUID = "12345";
    const fullName = "dani lucaci";
    const email_1 = "dani_1@mail.com";
    const email_2 = "dani_2@mail.com";

    await UserRepository.create([
      {
        firebaseUID: firebaseUID,
        fullName: fullName,
        email: email_1,
      },
      {
        firebaseUID: firebaseUID,
        fullName: fullName,
        email: email_2,
      },
    ]);

    const found = await UserRepository.findMany({
      email: { $in: [email_1, email_2] },
    });

    expect(found.data.length).toBe(2);
  });
});
