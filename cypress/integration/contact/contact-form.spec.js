describe("Contact From Validation - English", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });

  context("fullname: validation renders all states", () => {
    it("fullname: has the correct border color on the first focus", () => {
      cy.get("input[name=fullname]")
        .focus()
        .should("have.css", "border-color", "rgb(191, 195, 199)");
      cy.get("[data-testid=Fullname__ErrorMessage]").should("not.exist");
      cy.get("button[type=submit]").should("not.be.disabled");
    });

    it("fullname: returns an error when it has no value, is touched and blured", () => {
      cy.get("input[name=fullname]")
        .focus()
        .blur()
        .should("have.css", "border-color", "rgb(191, 49, 12)");
      cy.get("[data-testid=Fullname__ErrorMessage]")
        .should("exist")
        .and(
          "contain.text",
          "Please enter your name so I can get back to you.",
        );
      cy.get("button[type=submit]").should("be.disabled");
    });

    it("fullname: returns an error when the fullname value is too short", () => {
      cy.get("input[name=fullname]")
        .focus()
        .blur()
        .type("a")
        .should("have.css", "border-color", "rgb(191, 49, 12)");
      cy.get("[data-testid=Fullname__ErrorMessage]")
        .should("exist")
        .and("contain.text", "Your name is too short");
      cy.get("button[type=submit]").should("be.disabled");
    });

    it("fullname: renders the success styles", () => {
      cy.get("input[name=fullname]")
        .focus()
        .blur()
        .type("Dani Lucaci")
        .should("have.css", "border-color", "rgb(0, 156, 38)");
      cy.get("[data-testid=Fullname__ErrorMessage]").should("not.exist");
      cy.get("button[type=submit]").should("be.disabled");
    });
  });

  context("email: validation renders all states", () => {
    it("email: has the correct border color on the first focus", () => {
      cy.get("input[name=email]")
        .focus()
        .should("have.css", "border-color", "rgb(191, 195, 199)");
      cy.get("[data-testid=Email__ErrorMessage]").should("not.exist");
      cy.get("button[type=submit]").should("not.be.disabled");
    });

    it("email: returns an error when it has no value, is touched and blured", () => {
      cy.get("input[name=email]")
        .focus()
        .blur()
        .should("have.css", "border-color", "rgb(191, 49, 12)");
      cy.get("[data-testid=Email__ErrorMessage]")
        .should("exist")
        .and("contain.text", "Please enter your email");
      cy.get("button[type=submit]").should("be.disabled");
    });

    it("email: returns an error when the email value is incorrect", () => {
      cy.get("input[name=email]")
        .focus()
        .blur()
        .type("aaa@")
        .should("have.css", "border-color", "rgb(191, 49, 12)");
      cy.get("[data-testid=Email__ErrorMessage]")
        .should("exist")
        .and("contain.text", "Please enter a valid email");
      cy.get("button[type=submit]").should("be.disabled");
    });

    it("email: renders the success styles", () => {
      cy.get("input[name=email]")
        .focus()
        .blur()
        .type("dani@mail.com")
        .should("have.css", "border-color", "rgb(0, 156, 38)");
      cy.get("[data-testid=Email__ErrorMessage]").should("not.exist");
      cy.get("button[type=submit]").should("be.disabled");
    });
  });

  context("message: validation renders all states", () => {
    it("message: has the correct border color on the first focus", () => {
      cy.get("textarea[name=message]")
        .focus()
        .should("have.css", "border-color", "rgb(191, 195, 199)");
      cy.get("[data-testid=Message__ErrorMessage]").should("not.exist");
      cy.get("button[type=submit]").should("not.be.disabled");
    });

    it("message: returns an error when it has no value, is touched and blured", () => {
      cy.get("textarea[name=message]")
        .focus()
        .blur()
        .should("have.css", "border-color", "rgb(191, 49, 12)");
      cy.get("[data-testid=Message__ErrorMessage]")
        .should("exist")
        .and(
          "contain.text",
          "Please enter a message explaining what you would like to ask me",
        );
      cy.get("button[type=submit]").should("be.disabled");
    });

    it("message: returns an error when the value is too short", () => {
      cy.get("textarea[name=message]")
        .focus()
        .blur()
        .type("H")
        .should("have.css", "border-color", "rgb(191, 49, 12)");
      cy.get("[data-testid=Message__ErrorMessage]")
        .should("exist")
        .and("contain.text", "Your message is too short");
      cy.get("button[type=submit]").should("be.disabled");
    });

    it("message: renders the success styles", () => {
      cy.get("textarea[name=message]")
        .focus()
        .blur()
        .type("Hello my friend")
        .should("have.css", "border-color", "rgb(0, 156, 38)");
      cy.get("[data-testid=Message__ErrorMessage]").should("not.exist");
      cy.get("button[type=submit]").should("be.disabled");
    });
  });

  context("checkbox: validation renders all states", () => {
    it("checkbox: has the initial value set", () => {
      cy.get("input[name=consentAccepted]")
        .focus()
        .should("have.value", "false");
      cy.get("[data-testid=Checkbox__ErrorMessage]").should("not.exist");
      cy.get("button[type=submit]").should("not.be.disabled");
    });

    it("checkbox: returns an error when it is touched and blured", () => {
      cy.get("input[name=consentAccepted]").focus().blur();
      cy.get("[data-testid=Checkbox__ErrorMessage]")
        .should("exist")
        .and(
          "contain.text",
          "Please accept the legal notice and privacy policy before you can continue",
        );
      cy.get("button[type=submit]").should("be.disabled");
    });

    it("checkbox: has the correct value after it is checked", () => {
      cy.get("input[name=consentAccepted]")
        .check()
        .should("be.checked")
        .and("have.value", "true");
      cy.get("[data-testid=Checkbox__ErrorMessage]").should("not.exist");
      cy.get("button[type=submit]").should("be.disabled");
    });
  });

  context("Contact Form: Enters all values and submits", () => {
    it("enters all the values with the success styles and submits", () => {
      cy.get("input[name=fullname]")
        .focus()
        .blur()
        .type("Dani Lucaci", { release: false })
        .should("have.css", "border-color", "rgb(0, 156, 38)");
      cy.get("[data-testid=Fullname__ErrorMessage]").should("not.exist");
      cy.get("button[type=submit]").should("be.disabled");

      cy.get("input[name=email]")
        .focus()
        .blur()
        .type("dani@mail.com", { release: false })
        .should("have.css", "border-color", "rgb(0, 156, 38)");
      cy.get("[data-testid=Email__ErrorMessage]").should("not.exist");
      cy.get("button[type=submit]").should("be.disabled");

      cy.get("textarea[name=message]")
        .focus()
        .blur()
        .type("Hello my friend. How are you.", { release: false })
        .should("have.css", "border-color", "rgb(0, 156, 38)");
      cy.get("[data-testid=Message__ErrorMessage]").should("not.exist");
      cy.get("button[type=submit]").should("be.disabled");

      cy.get("input[name=consentAccepted]")
        .check()
        .should("be.checked")
        .and("have.value", "true");
      cy.get("[data-testid=Checkbox__ErrorMessage]").should("not.exist");
      cy.get("button[type=submit]").should("be.enabled");
      cy.get("button[type=submit]").click();

      cy.get("[data-testid=contact-form-error-message]").should("not.exist");

      cy.get("h1").should("contain", "Thank you for contacting me!");
      cy.url().should("include", "/thanks");
    });
  });

  context("Contact form submission to firebase api", () => {
    /**
     * @see https://github.com/request/request#http-authentication
     */
    it("returns 401:Unauthorized if it doesn’t have a Bearer token.", () => {
      cy.request({
        method: "POST",
        // the test doesn't fail when it receives a status code that is not 200
        failOnStatusCode: false,
        url: Cypress.env("apiUrl"),
        body: {
          email: "dani@mail.com",
          fullname: "Dani Lucaci",
          message: "Hello, how are you",
          datesent: new Date().toISOString(),
          locale: "en",
          botfield: "",
          consentAccepted: true,
          consentValue:
            "I have read and accept the legal notice and the privacy policy.",
        },
      }).then((res) => {
        expect(res.status).to.eq(401);
        expect(res.body).to.deep.eq({
          data: null,
          error: "Unauthorized",
        });
        expect(res).to.have.property("headers");
      });
    });

    it("fails to submit if it doesn’t have a valid email.", () => {
      cy.request({
        method: "POST",
        // the test doesn't fail when it receives a status code that is not 200
        failOnStatusCode: false,
        url: Cypress.env("apiUrl"),
        auth: {
          bearer: Cypress.env("jwtToken"),
        },
        body: {
          email: "",
          fullname: "Dani Lucaci",
          message: "Hello, how are you",
          datesent: new Date().toISOString(),
          locale: "en",
          botfield: "",
          consentAccepted: true,
          consentValue:
            "I have read and accept the legal notice and the privacy policy.",
        },
      }).then((res) => {
        expect(res.status).to.eq(400);
        expect(res.body).to.deep.eq({
          data: null,
          error: `Input validation failed.`,
        });
        expect(res).to.have.property("headers");
      });
    });

    it("fails to submit if it doesn’t have a valid full name.", () => {
      cy.request({
        method: "POST",
        // the test doesn't fail when it receives a status code that is not 200
        failOnStatusCode: false,
        url: Cypress.env("apiUrl"),
        auth: {
          bearer: Cypress.env("jwtToken"),
        },
        body: {
          email: "dani@mail.com",
          fullname: "",
          message: "Hello, how are you",
          datesent: new Date().toISOString(),
          locale: "en",
          botfield: "",
          consentAccepted: true,
          consentValue:
            "I have read and accept the legal notice and the privacy policy.",
        },
      }).then((res) => {
        expect(res.status).to.eq(400);
        expect(res.body).to.deep.eq({
          data: null,
          error: `Input validation failed.`,
        });
        expect(res).to.have.property("headers");
      });
    });

    it("fails to submit if it doesn’t have a valid message.", () => {
      cy.request({
        method: "POST",
        // the test doesn't fail when it receives a status code that is not 200
        failOnStatusCode: false,
        url: Cypress.env("apiUrl"),
        auth: {
          bearer: Cypress.env("jwtToken"),
        },
        body: {
          email: "dani@mail.com",
          fullname: "Dani Lucaci",
          message: "",
          datesent: new Date().toISOString(),
          locale: "en",
          botfield: "",
          consentAccepted: true,
          consentValue:
            "I have read and accept the legal notice and the privacy policy.",
        },
      }).then((res) => {
        expect(res.status).to.eq(400);
        expect(res.body).to.deep.eq({
          data: null,
          error: `Input validation failed.`,
        });
        expect(res).to.have.property("headers");
      });
    });

    it("fails to submit if it has a botfield message.", () => {
      cy.request({
        method: "POST",
        // the test doesn't fail when it receives a status code that is not 200
        failOnStatusCode: false,
        url: Cypress.env("apiUrl"),
        auth: {
          bearer: Cypress.env("jwtToken"),
        },
        body: {
          email: "dani@mail.com",
          fullname: "Dani Lucaci",
          message: "Hello how are you",
          datesent: new Date().toISOString(),
          locale: "en",
          botfield: "hola",
          consentAccepted: true,
          consentValue:
            "I have read and accept the legal notice and the privacy policy.",
        },
      }).then((res) => {
        expect(res.status).to.eq(401);
        expect(res.body).to.deep.eq({
          data: null,
          error: "Unauthorized",
        });
        expect(res).to.have.property("headers");
      });
    });

    it("fails to submit if the consent wasn’t accepted.", () => {
      cy.request({
        method: "POST",
        // the test doesn't fail when it receives a status code that is not 200
        failOnStatusCode: false,
        url: Cypress.env("apiUrl"),
        auth: {
          bearer: Cypress.env("jwtToken"),
        },
        body: {
          email: "dani@mail.com",
          fullname: "Dani Lucaci",
          message: "Hello how are you",
          datesent: new Date().toISOString(),
          locale: "en",
          botfield: "",
          consentAccepted: false,
          consentValue:
            "I have read and accept the legal notice and the privacy policy.",
        },
      }).then((res) => {
        expect(res.status).to.eq(451);
        expect(res.body).to.deep.eq({
          data: null,
          error: "Legal notice and privacy policy were not accepted.",
        });
        expect(res).to.have.property("headers");
      });
    });

    it("fails to submit if the consent doesn’t have a value.", () => {
      cy.request({
        method: "POST",
        // the test doesn't fail when it receives a status code that is not 200
        failOnStatusCode: false,
        url: Cypress.env("apiUrl"),
        auth: {
          bearer: Cypress.env("jwtToken"),
        },
        body: {
          email: "dani@mail.com",
          fullname: "Dani Lucaci",
          message: "Hello how are you",
          datesent: new Date().toISOString(),
          locale: "en",
          botfield: "",
          consentAccepted: true,
          consentValue: "",
        },
      }).then((res) => {
        expect(res.status).to.eq(451);
        expect(res.body).to.deep.eq({
          data: null,
          error: "Legal notice and privacy policy were not accepted.",
        });
        expect(res).to.have.property("headers");
      });
    });

    it("returns 404 with any other method than POST.", () => {
      cy.request({
        method: "GET",
        // the test doesn't fail when it receives a status code that is not 200
        failOnStatusCode: false,
        url: Cypress.env("apiUrl"),
        auth: {
          bearer: Cypress.env("jwtToken"),
        },
        body: {
          email: "dani@mail.com",
          fullname: "Dani Lucaci",
          message: "Hello, how are you",
          datesent: new Date().toISOString(),
          locale: "en",
          botfield: "",
          consentAccepted: true,
          consentValue:
            "I have read and accept the legal notice and the privacy policy.",
        },
      }).then((res) => {
        expect(res.status).to.eq(404);
        expect(res.statusText).to.eq("Not Found");
        expect(res).to.have.property("headers");
      });
    });

    it("returns 200:Ok if all the data is correct.", () => {
      cy.request({
        method: "POST",
        // the test doesn't fail when it receives a status code that is not 200
        url: Cypress.env("apiUrl"),
        auth: {
          bearer: Cypress.env("jwtToken"),
        },
        body: {
          email: "dani@mail.com",
          fullname: "Dani Lucaci",
          message: "Hello, how are you",
          datesent: new Date().toISOString(),
          locale: "en",
          botfield: "",
          consentAccepted: true,
          consentValue:
            "I have read and accept the legal notice and the privacy policy.",
        },
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.deep.eq({
          data: "Ok",
          error: null,
        });
        expect(res).to.have.property("headers");
      });
    });
  });
});
