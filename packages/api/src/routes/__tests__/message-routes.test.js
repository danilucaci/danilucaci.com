// eslint-disable-next-line node/no-unpublished-require
const supertest = require("supertest");
const { app } = require("../../server");

const { UserRepo } = require("../../repositories");
const { makeTestServerMethods } = require("../../utils/tests/test-utils");

const mockEmailService = require("../../services/email-service");

jest.mock("../../services/email-service", () => ({
  sendEmail: jest.fn().mockImplementation(() => Promise.resolve({})),
}));

jest.mock("../../services/logger-service", () => ({
  warn: jest.fn().mockImplementation(() => {}),
  info: jest.fn().mockImplementation(() => {}),
  error: jest.fn().mockImplementation(() => {}),
  trace: jest.fn().mockImplementation(() => {}),
  debug: jest.fn().mockImplementation(() => {}),
}));

jest.mock("../../services/auth-service", () => {
  const {
    firebaseMockUserClaims,
  } = require("../../utils/tests/test-auth-data");
  const mockAuthServer = jest.requireActual("../../services/auth-service");

  return {
    ...mockAuthServer,
    verifyAuthToken: jest
      .fn()
      .mockImplementation(() => Promise.resolve(firebaseMockUserClaims)),
  };
});

const request = supertest(app);

describe("/api/ping", () => {
  const {
    startTestServer,
    stopTestServer,
    clearUsersCollection,
  } = makeTestServerMethods();

  beforeAll(async () => await startTestServer());

  afterEach(async () => {
    await clearUsersCollection();
  });

  afterAll(async () => {
    await clearUsersCollection();
    await stopTestServer();
  });

  it("POST /api/ping returns 200 with a pong response", async () => {
    const res = await request
      .post("/api/ping")
      .send({ message: "ping" })
      .set("Authorization", "Bearer random_test_uid");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      data: {
        message: "pong",
      },
      error: null,
    });
  });

  it("POST /api/ping returns 400 without a ping message", async () => {
    const res = await request
      .post("/api/ping")
      .send({})
      .set("Authorization", "Bearer random_test_uid");

    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      data: null,
      error: "Bad request",
    });
  });

  it("POST /api/ping returns 401 without a bearer token", async () => {
    const res = await request
      .post("/api/ping")
      .send({})
      .set("Authorization", "Bearer");

    expect(res.status).toBe(401);
    expect(res.body).toEqual({
      data: null,
      error: "Unauthorized",
    });
  });
});

describe("/api/contact", () => {
  const {
    startTestServer,
    stopTestServer,
    clearUsersCollection,
    clearMessagesCollection,
  } = makeTestServerMethods();

  beforeAll(async () => await startTestServer());
  afterEach(async () => {
    await clearUsersCollection();
    await clearMessagesCollection();
    mockEmailService.sendEmail.mockClear();
  });
  afterAll(async () => {
    await clearUsersCollection();
    await clearMessagesCollection();
    await stopTestServer();
  });

  it("POST /api/contact creates a new message with a previous user", async () => {
    const messageData = {
      email: "dani@mail.com",
      fullName: "dani",
      message: "hola que ase de nuevo",
      dateSent: "2021-04-03T13:50:24.132Z",
      locale: "es",
      botField: "",
      consentAccepted: true,
      consentValue:
        "He leído y acepto el aviso legal y la política de privacidad.",
    };

    await UserRepo.create({
      firebaseUID: "12345",
      fullName: messageData.fullName,
      email: messageData.email,
    });

    const res = await request
      .post("/api/contact")
      .send(messageData)
      .set("Authorization", "Bearer random_test_uid");

    expect(res.status).toBe(201);
    expect(res.body).toEqual({
      data: { message: "Ok", email: "Ok" },
      error: null,
    });
    expect(mockEmailService.sendEmail).toHaveBeenCalledWith(messageData);
    expect(mockEmailService.sendEmail).toHaveBeenCalledTimes(1);

    const users = await UserRepo.findMany({ email: messageData.email });
    expect(users.data.length).toBe(1);
  });

  describe("[es] locale", () => {
    it("POST /api/contact creates a new message with a new user", async () => {
      const messageData = {
        email: "dani@mail.com",
        fullName: "dani",
        message: "hola que ase de nuevo",
        dateSent: "2021-04-03T13:50:24.132Z",
        locale: "es",
        botField: "",
        consentAccepted: true,
        consentValue:
          "He leído y acepto el aviso legal y la política de privacidad.",
      };

      const res = await request
        .post("/api/contact")
        .send(messageData)
        .set("Authorization", "Bearer random_test_uid");

      expect(res.status).toBe(201);
      expect(res.body).toEqual({
        data: { message: "Ok", email: "Ok" },
        error: null,
      });
      expect(mockEmailService.sendEmail).toHaveBeenCalledWith(messageData);
      expect(mockEmailService.sendEmail).toHaveBeenCalledTimes(1);
    });
  });

  describe("[en] locale", () => {
    it("POST /api/contact creates a new message with a new user", async () => {
      const messageData = {
        email: "dani@mail.com",
        fullName: "dani",
        message: "hello there",
        dateSent: "2021-04-03T13:50:24.132Z",
        locale: "en",
        botField: "",
        consentAccepted: true,
        consentValue:
          "I have read and accept the legal notice and the privacy policy.",
      };

      const res = await request
        .post("/api/contact")
        .send(messageData)
        .set("Authorization", "Bearer random_test_uid");

      expect(res.status).toBe(201);
      expect(res.body).toEqual({
        data: { message: "Ok", email: "Ok" },
        error: null,
      });
      expect(mockEmailService.sendEmail).toHaveBeenCalledWith(messageData);
      expect(mockEmailService.sendEmail).toHaveBeenCalledTimes(1);
    });

    it("POST /api/contact fails to create a message with an invalid email", async () => {
      const messageData = {
        email: "",
        fullName: "dani",
        message: "hello there",
        dateSent: "2021-04-03T13:50:24.132Z",
        locale: "en",
        botField: "",
        consentAccepted: true,
        consentValue:
          "I have read and accept the legal notice and the privacy policy.",
      };

      const res = await request
        .post("/api/contact")
        .send(messageData)
        .set("Authorization", "Bearer random_test_uid");

      expect(res.status).toBe(400);
      expect(res.body).toEqual({
        data: null,
        error: expect.stringContaining("email"),
      });
      expect(mockEmailService.sendEmail).not.toHaveBeenCalled();
    });

    it("POST /api/contact fails to create a message with an empty name", async () => {
      const messageData = {
        email: "dani@mail.com",
        fullName: "",
        message: "hello there",
        dateSent: "2021-04-03T13:50:24.132Z",
        locale: "en",
        botField: "",
        consentAccepted: true,
        consentValue:
          "I have read and accept the legal notice and the privacy policy.",
      };

      const res = await request
        .post("/api/contact")
        .send(messageData)
        .set("Authorization", "Bearer random_test_uid");

      expect(res.status).toBe(400);
      expect(res.body).toEqual({
        data: null,
        error: expect.stringContaining("full name"),
      });
      expect(mockEmailService.sendEmail).not.toHaveBeenCalled();
    });

    it("POST /api/contact fails to create a message with an empty message", async () => {
      const messageData = {
        email: "dani@mail.com",
        fullName: "dani",
        message: "",
        dateSent: "2021-04-03T13:50:24.132Z",
        locale: "en",
        botField: "",
        consentAccepted: true,
        consentValue:
          "I have read and accept the legal notice and the privacy policy.",
      };

      const res = await request
        .post("/api/contact")
        .send(messageData)
        .set("Authorization", "Bearer random_test_uid");

      expect(res.status).toBe(400);
      expect(res.body).toEqual({
        data: null,
        error: expect.stringContaining("message is not allowed to be empty"),
      });
      expect(mockEmailService.sendEmail).not.toHaveBeenCalled();
    });

    it("POST /api/contact fails to create a message with a null dateSent", async () => {
      const messageData = {
        email: "dani@mail.com",
        fullName: "dani",
        message: "hello",
        dateSent: null,
        locale: "en",
        botField: "",
        consentAccepted: true,
        consentValue:
          "I have read and accept the legal notice and the privacy policy.",
      };

      const res = await request
        .post("/api/contact")
        .send(messageData)
        .set("Authorization", "Bearer random_test_uid");

      expect(res.status).toBe(400);
      expect(res.body).toEqual({
        data: null,
        error: expect.stringContaining("date must be a string"),
      });
      expect(mockEmailService.sendEmail).not.toHaveBeenCalled();
    });

    it("POST /api/contact fails to create a message with an empty dateSent", async () => {
      const messageData = {
        email: "dani@mail.com",
        fullName: "dani",
        message: "hello",
        dateSent: "",
        locale: "en",
        botField: "",
        consentAccepted: true,
        consentValue:
          "I have read and accept the legal notice and the privacy policy.",
      };

      const res = await request
        .post("/api/contact")
        .send(messageData)
        .set("Authorization", "Bearer random_test_uid");

      expect(res.status).toBe(400);
      expect(res.body).toEqual({
        data: null,
        error: expect.stringContaining("date is not allowed"),
      });
      expect(mockEmailService.sendEmail).not.toHaveBeenCalled();
    });

    it("POST /api/contact fails to create a message with a wrong locale", async () => {
      const messageData = {
        email: "dani@mail.com",
        fullName: "dani",
        message: "hello",
        dateSent: "2021-04-03T13:50:24.132Z",
        locale: "de",
        botField: "",
        consentAccepted: true,
        consentValue:
          "I have read and accept the legal notice and the privacy policy.",
      };

      const res = await request
        .post("/api/contact")
        .send(messageData)
        .set("Authorization", "Bearer random_test_uid");

      expect(res.status).toBe(400);
      expect(res.body).toEqual({
        data: null,
        error: expect.stringContaining("one of"),
      });
      expect(mockEmailService.sendEmail).not.toHaveBeenCalled();
    });

    it("POST /api/contact fails to create a message with a botfield value", async () => {
      const messageData = {
        email: "dani@mail.com",
        fullName: "dani",
        message: "hello",
        dateSent: "2021-04-03T13:50:24.132Z",
        locale: "en",
        botField: "das",
        consentAccepted: true,
        consentValue:
          "I have read and accept the legal notice and the privacy policy.",
      };

      const res = await request
        .post("/api/contact")
        .send(messageData)
        .set("Authorization", "Bearer random_test_uid");

      expect(res.status).toBe(401);
      expect(res.body).toEqual({
        data: null,
        error: expect.stringContaining("Unauthorized"),
      });
      expect(mockEmailService.sendEmail).not.toHaveBeenCalled();
    });

    it("POST /api/contact fails to create a message with the consent not accepted", async () => {
      const messageData = {
        email: "dani@mail.com",
        fullName: "dani",
        message: "hello",
        dateSent: "2021-04-03T13:50:24.132Z",
        locale: "en",
        botField: "",
        consentAccepted: false,
        consentValue:
          "I have read and accept the legal notice and the privacy policy.",
      };

      const res = await request
        .post("/api/contact")
        .send(messageData)
        .set("Authorization", "Bearer random_test_uid");

      expect(res.status).toBe(451);
      expect(res.body).toEqual({
        data: null,
        error: expect.stringContaining("were not accepted"),
      });
      expect(mockEmailService.sendEmail).not.toHaveBeenCalled();
    });

    it("POST /api/contact fails to create a message with a wrong consentValue", async () => {
      const messageData = {
        email: "dani@mail.com",
        fullName: "dani",
        message: "hello",
        dateSent: "2021-04-03T13:50:24.132Z",
        locale: "en",
        botField: "",
        consentAccepted: true,
        consentValue: "ce and the privacy policy.",
      };

      const res = await request
        .post("/api/contact")
        .send(messageData)
        .set("Authorization", "Bearer random_test_uid");

      expect(res.status).toBe(451);
      expect(res.body).toEqual({
        data: null,
        error: expect.stringContaining("were not accepted"),
      });
      expect(mockEmailService.sendEmail).not.toHaveBeenCalled();
    });
  });
});
