const { UserRepo, MessageRepo } = require("../");
const { makeTestServerMethods } = require("../../utils/tests/test-utils");

describe("MessageRepo", () => {
  const {
    startTestServer,
    stopTestServer,
    clearMessagesCollection,
  } = makeTestServerMethods();

  beforeAll(async () => await startTestServer());
  afterEach(async () => await clearMessagesCollection());
  afterAll(async () => {
    await clearMessagesCollection();
    await stopTestServer();
  });

  it("creates a new message", async () => {
    const firebaseUID = "12345";
    const fullName = "dani lucaci";
    const email = "dani@mail.com";
    const locale = "en";
    const message = "hello there";
    const consentAccepted = true;
    const consentValue = "I accept";
    const dateSent = new Date().toISOString();

    const user = await UserRepo.create({
      firebaseUID: firebaseUID,
      fullName: fullName,
      email: email,
    });

    const newMessage = await MessageRepo.create({
      user: user._id,
      locale: locale,
      message: message,
      consentAccepted: consentAccepted,
      consentValue: consentValue,
      dateSent: dateSent,
    });

    expect(newMessage).toMatchObject({
      data: {
        _id: expect.anything(),
        consentAccepted: true,
        consentValue: "I accept",
        dateSent: expect.any(Date),
        message: expect.any(String),
        locale: "en",
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
        __v: expect.any(Number),
      },
      error: null,
    });
  });

  it("fails to create a new message with an invalid locale", async () => {
    const firebaseUID = "12345";
    const fullName = "dani lucaci";
    const email = "dani@mail.com";
    const locale = "de";
    const message = "hello there";
    const consentAccepted = true;
    const consentValue = "I accept";
    const dateSent = new Date().toISOString();

    const user = await UserRepo.create({
      firebaseUID: firebaseUID,
      fullName: fullName,
      email: email,
    });

    const newMessage = await MessageRepo.create({
      user: user._id,
      locale: locale,
      message: message,
      consentAccepted: consentAccepted,
      consentValue: consentValue,
      dateSent: dateSent,
    });

    expect(newMessage).toMatchObject({
      data: null,
      error: expect.stringContaining("not a valid enum"),
    });
  });

  it("fails to create a new message without a message", async () => {
    const firebaseUID = "12345";
    const fullName = "dani lucaci";
    const email = "dani@mail.com";
    const locale = "en";
    const message = "";
    const consentAccepted = true;
    const consentValue = "I accept";
    const dateSent = new Date().toISOString();

    const user = await UserRepo.create({
      firebaseUID: firebaseUID,
      fullName: fullName,
      email: email,
    });

    const newMessage = await MessageRepo.create({
      user: user._id,
      locale: locale,
      message: message,
      consentAccepted: consentAccepted,
      consentValue: consentValue,
      dateSent: dateSent,
    });

    expect(newMessage).toMatchObject({
      data: null,
      error: expect.stringContaining("message is required"),
    });
  });

  it("fails to create a new message with a short message", async () => {
    const firebaseUID = "12345";
    const fullName = "dani lucaci";
    const email = "dani@mail.com";
    const locale = "en";
    const message = "a";
    const consentAccepted = true;
    const consentValue = "I accept";
    const dateSent = new Date().toISOString();

    const user = await UserRepo.create({
      firebaseUID: firebaseUID,
      fullName: fullName,
      email: email,
    });

    const newMessage = await MessageRepo.create({
      user: user._id,
      locale: locale,
      message: message,
      consentAccepted: consentAccepted,
      consentValue: consentValue,
      dateSent: dateSent,
    });

    expect(newMessage).toMatchObject({
      data: null,
      error: expect.stringContaining("in more detail"),
    });
  });

  it("fails to create a new message with a long message", async () => {
    const firebaseUID = "12345";
    const fullName = "dani lucaci";
    const email = "dani@mail.com";
    const locale = "en";
    const message = "a".repeat(1000);
    const consentAccepted = true;
    const consentValue = "I accept";
    const dateSent = new Date().toISOString();

    const user = await UserRepo.create({
      firebaseUID: firebaseUID,
      fullName: fullName,
      email: email,
    });

    const newMessage = await MessageRepo.create({
      user: user._id,
      locale: locale,
      message: message,
      consentAccepted: consentAccepted,
      consentValue: consentValue,
      dateSent: dateSent,
    });

    expect(newMessage).toMatchObject({
      data: null,
      error: expect.stringContaining("too long"),
    });
  });

  it("fails to create a new message without a consent", async () => {
    const firebaseUID = "12345";
    const fullName = "dani lucaci";
    const email = "dani@mail.com";
    const locale = "en";
    const message = "hello there";
    const consentAccepted = false;
    const consentValue = "I accept";
    const dateSent = new Date().toISOString();

    const user = await UserRepo.create({
      firebaseUID: firebaseUID,
      fullName: fullName,
      email: email,
    });

    const newMessage = await MessageRepo.create({
      user: user._id,
      locale: locale,
      message: message,
      consentAccepted: consentAccepted,
      consentValue: consentValue,
      dateSent: dateSent,
    });

    expect(newMessage).toMatchObject({
      data: null,
      error: expect.stringContaining("was not accepted"),
    });
  });

  it("fails to create a new message without a consent value", async () => {
    const firebaseUID = "12345";
    const fullName = "dani lucaci";
    const email = "dani@mail.com";
    const locale = "en";
    const message = "hello there";
    const consentAccepted = true;
    const consentValue = "";
    const dateSent = new Date().toISOString();

    const user = await UserRepo.create({
      firebaseUID: firebaseUID,
      fullName: fullName,
      email: email,
    });

    const newMessage = await MessageRepo.create({
      user: user._id,
      locale: locale,
      message: message,
      consentAccepted: consentAccepted,
      consentValue: consentValue,
      dateSent: dateSent,
    });

    expect(newMessage).toMatchObject({
      data: null,
      error: expect.stringContaining("consent value is required"),
    });
  });

  it("fails to create a new message without a date sent value", async () => {
    const firebaseUID = "12345";
    const fullName = "dani lucaci";
    const email = "dani@mail.com";
    const locale = "en";
    const message = "hello there";
    const consentAccepted = true;
    const consentValue = "i accept";
    const dateSent = null;

    const user = await UserRepo.create({
      firebaseUID: firebaseUID,
      fullName: fullName,
      email: email,
    });

    const newMessage = await MessageRepo.create({
      user: user._id,
      locale: locale,
      message: message,
      consentAccepted: consentAccepted,
      consentValue: consentValue,
      dateSent: dateSent,
    });

    expect(newMessage).toMatchObject({
      data: null,
      error: expect.stringContaining("date is required"),
    });
  });
});
