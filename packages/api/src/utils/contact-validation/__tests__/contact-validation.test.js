const methods = require("../contact-validation");

const {
  validateBotField,
  validateCheckboxValue,
  validateCheckboxActive,
  validateEmail,
  validateFullName,
  validateDate,
  validateMessageMinLength,
  validateMessageMaxLength,
  validateLocale,
  isPromise,
} = methods;

describe("contact validation helpers", () => {
  describe("methods export", () => {
    it("returns the object of methods", () => {
      expect(methods).toMatchObject({
        validateBotField: expect.any(Function),
        validateCheckboxValue: expect.any(Function),
        validateCheckboxActive: expect.any(Function),
        validateEmail: expect.any(Function),
        validateFullName: expect.any(Function),
        validateDate: expect.any(Function),
        validateMessageMinLength: expect.any(Function),
        validateMessageMaxLength: expect.any(Function),
        validateLocale: expect.any(Function),
        isPromise: expect.any(Function),
      });
    });
  });

  describe("validateBotField", () => {
    it("is defined", () => {
      expect(validateBotField).toBeDefined();
    });

    it("throws if called with undefined", () => {
      expect.assertions(1);
      return validateBotField().catch((error) =>
        expect(error.message).toMatch(/required/),
      );
    });

    it("throws if called with a non-empty string", () => {
      expect.assertions(1);
      return validateBotField("hello").catch((error) =>
        expect(error.message).toMatch(/must be/),
      );
    });

    it("throws if called with another primitive value", () => {
      expect.assertions(1);
      return validateBotField(1).catch((error) =>
        expect(error.message).toMatch(/must be/),
      );
    });

    it("doesn't throw if called with the valid empty string", () => {
      expect.assertions(1);
      return validateBotField("").then((res) => expect(res).toBe(""));
    });
  });

  describe("validateCheckboxValue", () => {
    it("is defined", () => {
      expect(validateCheckboxValue).toBeDefined();
    });

    it("throws if called with undefined", () => {
      expect.assertions(1);
      return validateCheckboxValue().catch((error) =>
        expect(error.message).toMatch(/required/),
      );
    });

    it("throws if called with an empty string", () => {
      expect.assertions(1);
      return validateCheckboxValue("").catch((error) =>
        expect(error.message).toMatch(/one of/),
      );
    });

    it("throws if called with a short string", () => {
      expect.assertions(1);
      return validateCheckboxValue("hello").catch((error) =>
        expect(error.message).toMatch(/one of/),
      );
    });

    it("throws if called with a non-string", () => {
      expect.assertions(1);
      return validateCheckboxValue(1).catch((error) =>
        expect(error.message).toMatch(/one of/),
      );
    });

    it("throws if called with a non-valid value", () => {
      expect.assertions(1);
      return validateCheckboxValue("acepto").catch((error) =>
        expect(error.message).toMatch(/one of/),
      );
    });

    it("passes if called with the english value", () => {
      expect.assertions(1);
      return validateCheckboxValue(
        "I have read and accept the legal notice and the privacy policy.",
      ).then((res) => expect(res).toMatch(/accept/));
    });

    it("passes if called with the spanish value", () => {
      expect.assertions(1);
      return validateCheckboxValue(
        "He leído y acepto el aviso legal y la política de privacidad.",
      ).then((res) => expect(res).toMatch(/acepto/));
    });
  });

  describe("validateCheckboxActive", () => {
    it("is defined", () => {
      expect(validateCheckboxActive).toBeDefined();
    });

    it("throws if called without a value", () => {
      expect.assertions(1);
      return validateCheckboxActive().catch((error) =>
        expect(error.message).toMatch(/required/),
      );
    });

    it("throws if called with a false boolean", () => {
      expect.assertions(1);
      return validateCheckboxActive(false).catch((error) =>
        expect(error.message).toMatch(/must be/),
      );
    });

    it("throws if called with a non-boolean", () => {
      expect.assertions(1);
      return validateCheckboxActive(1).catch((error) =>
        expect(error.message).toMatch(/must be/),
      );
    });

    it("passes if called with true", () => {
      expect.assertions(1);
      return validateCheckboxActive(true).then((res) => expect(res).toBe(true));
    });
  });

  describe("validateEmail", () => {
    it("is defined", () => {
      expect(validateEmail).toBeDefined();
    });

    it("throws if called without a value", () => {
      expect.assertions(1);
      return validateEmail().catch((error) =>
        expect(error.message).toMatch(/required/),
      );
    });

    it.each`
      value            | expected
      ${1}             | ${"must be a string"}
      ${true}          | ${"must be a string"}
      ${{}}            | ${"must be a string"}
      ${[]}            | ${"must be a string"}
      ${"hello"}       | ${"valid email"}
      ${"hello@"}      | ${"valid email"}
      ${"hello@mail"}  | ${"valid email"}
      ${"hello@mail."} | ${"valid email"}
    `("throws when called with: $value", ({ value, expected }) => {
      expect.assertions(1);
      return validateEmail(value).catch((error) =>
        expect(error.message).toMatch(expected),
      );
    });

    it("passes if called with a valid email", () => {
      expect.assertions(1);
      return validateEmail("dani@mail.com").then((res) =>
        expect(res).toBe("dani@mail.com"),
      );
    });
  });

  describe("validateFullName", () => {
    it("is defined", () => {
      expect(validateFullName).toBeDefined();
    });

    it("throws if called without a value", () => {
      expect.assertions(1);
      return validateFullName().catch((error) =>
        expect(error.message).toMatch(/required/),
      );
    });

    it("throws if called with a non string primitive", () => {
      expect.assertions(1);
      return validateFullName(1).catch((error) =>
        expect(error.message).toMatch(/must be a string/),
      );
    });

    it("passes if called with a valid full name", () => {
      expect.assertions(1);
      return validateFullName("dani lucaci").then((res) =>
        expect(res).toBe("dani lucaci"),
      );
    });
  });

  describe("validateDate", () => {
    it("is defined", () => {
      expect(validateDate).toBeDefined();
    });

    it("throws if called without a value", () => {
      expect.assertions(1);
      return validateDate().catch((error) =>
        expect(error.message).toMatch(/required/),
      );
    });

    it("throws if called with a non string primitive", () => {
      expect.assertions(1);
      return validateDate(1).catch((error) =>
        expect(error.message).toMatch(/must be a string/),
      );
    });

    it("throws if called with an invalid date", () => {
      expect.assertions(1);
      const date = new Date("2021/03/02").toString();

      return validateDate(date).catch((error) =>
        expect(error.message).toMatch(/must be in iso format/),
      );
    });

    it("passes if called with a valid date", () => {
      expect.assertions(1);
      const date = new Date("2021/03/02").toISOString();

      return validateDate(date).then((res) => expect(res).toBe(date));
    });
  });

  describe("validateMessageMinLength", () => {
    it("is defined", () => {
      expect(validateMessageMinLength).toBeDefined();
    });

    it("throws if called without a value", () => {
      expect.assertions(1);
      return validateMessageMinLength().catch((error) =>
        expect(error.message).toMatch(/required/),
      );
    });

    it("throws if called with a non string primitive", () => {
      expect.assertions(1);
      return validateMessageMinLength(1).catch((error) =>
        expect(error.message).toMatch(/must be a string/),
      );
    });

    it("passes if called with a valid string", () => {
      expect.assertions(1);
      return validateMessageMinLength("hello").then((res) =>
        expect(res).toBe("hello"),
      );
    });
  });

  describe("validateMessageMaxLength", () => {
    it("is defined", () => {
      expect(validateMessageMaxLength).toBeDefined();
    });

    it("throws if called without a value", () => {
      expect.assertions(1);
      return validateMessageMaxLength().catch((error) =>
        expect(error.message).toMatch(/required/),
      );
    });

    it("throws if called with a non string primitive", () => {
      expect.assertions(1);
      return validateMessageMaxLength(1).catch((error) =>
        expect(error.message).toMatch(/must be a string/),
      );
    });

    it("throws if called with a string that is too long", () => {
      expect.assertions(1);
      return validateMessageMaxLength("hello".repeat(1000)).catch((error) =>
        expect(error.message).toMatch(/length must be less than/),
      );
    });

    it("passes if called with a valid string", () => {
      expect.assertions(1);
      return validateMessageMaxLength("hello").then((res) =>
        expect(res).toBe("hello"),
      );
    });
  });

  describe("validateLocale", () => {
    it("is defined", () => {
      expect(validateLocale).toBeDefined();
    });

    it("throws if called without a value", () => {
      expect.assertions(1);
      return validateLocale().catch((error) =>
        expect(error.message).toMatch(/required/),
      );
    });

    it("throws if called with a non string primitive", () => {
      expect.assertions(1);
      return validateLocale(1).catch((error) =>
        expect(error.message).toMatch(/one of/),
      );
    });

    it("passes if called with a valid english locale", () => {
      expect.assertions(1);
      return validateMessageMaxLength("en").then((res) =>
        expect(res).toBe("en"),
      );
    });

    it.each`
      value   | expected
      ${"en"} | ${"en"}
      ${"es"} | ${"es"}
    `("passes when called with an '$value' locale", ({ value, expected }) => {
      expect.assertions(1);
      return validateLocale(value).then(() => expect(value).toMatch(expected));
    });
  });

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
});
