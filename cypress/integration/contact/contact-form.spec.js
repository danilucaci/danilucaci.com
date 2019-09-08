describe("Contact From Validation - English", () => {
  beforeEach(() => {
    cy.visit("http://192.168.1.14:8000/contact");
  });

  context("fullname: validation renders all states", () => {
    it("fullname: has the correct border color on the first focus", () => {
      cy.get("input[name=fullname]")
        .focus()
        .should("have.css", "border-color", "rgb(191, 195, 199)");
      cy.get("[data-testid=Fullname__ErrorMessage]").should("not.exist");
      cy.get("button[type=submit]").should("be.disabled");
    });

    it("fullname: returns an error when it has no value, is touched and blured", () => {
      cy.get("input[name=fullname]")
        .focus()
        .blur()
        .should("have.css", "border-color", "rgb(191, 49, 12)");
      cy.get("[data-testid=Fullname__ErrorMessage]")
        .should("exist")
        .and("contain.text", "Please enter your name.");
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
      cy.get("button[type=submit]").should("be.disabled");
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
      cy.get("button[type=submit]").should("be.disabled");
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
      cy.get("input[name=acceptsconsentcheckbox]")
        .focus()
        .should(
          "have.value",
          "I have not read and I do not accept the legal notice and the privacy policy.",
        );
      cy.get("[data-testid=Checkbox__ErrorMessage]").should("not.exist");
      cy.get("button[type=submit]").should("be.disabled");
    });

    it("checkbox: returns an error when it is touched and blured", () => {
      cy.get("input[name=acceptsconsentcheckbox]")
        .focus()
        .blur();
      cy.get("[data-testid=Checkbox__ErrorMessage]")
        .should("exist")
        .and(
          "contain.text",
          "Please accept the legal notice and privacy policy before you can continue",
        );
      cy.get("button[type=submit]").should("be.disabled");
    });

    it("checkbox: has the correct value after it is checked", () => {
      cy.get("input[name=acceptsconsentcheckbox]")
        .check()
        .should("be.checked")
        .and(
          "have.value",
          "I have read and accept the legal notice and the privacy policy.",
        );
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

      cy.get("input[name=acceptsconsentcheckbox]")
        .check()
        .should("be.checked")
        .and(
          "have.value",
          "I have read and accept the legal notice and the privacy policy.",
        );
      cy.get("[data-testid=Checkbox__ErrorMessage]").should("not.exist");
      cy.get("button[type=submit]").should("be.enabled");
      cy.get("button[type=submit]").click();

      cy.get("h1").should("contain", "Thank you for contacting me!");

      cy.url().should("include", "/thanks");
    });
  });

  context("HTML form submission with cy.request", () => {
    it("fails to send an email if event.headers.origin is not present", () => {
      cy.request({
        method: "POST",
        // the test doesn't fail when it receives a status code that is not 200
        failOnStatusCode: false,
        url: "/.netlify/functions/contact",
        body: {
          email: "dani@mail.com",
          fullname: "Dani Lucaci",
          message: "Hello, how are you",
          datesent: "2019-09-08T07:01:36.627Z",
          locale: "en",
          botfield: "",
          acceptsconsentcheckbox: true,
          consentcheckboxvalue:
            "I have read and accept the legal notice and the privacy policy.",
        },
      }).should((res) => {
        expect(res.status).to.eq(403);
        expect(res.body).to.have.string("Invalid origin.");
        expect(res).to.have.property("headers");
      });
    });

    // cypress doesn't have cors
    it.skip("can bypass the ui and send an email with event.headers.origin check removed", () => {
      cy.request({
        method: "POST",
        url: "/.netlify/functions/contact",
        body: {
          email: "dani@mail.com",
          fullname: "Dani Lucaci",
          message: "Hello, how are you",
          datesent: "2019-09-08T07:01:36.627Z",
          locale: "en",
          botfield: "",
          acceptsconsentcheckbox: true,
          consentcheckboxvalue:
            "I have read and accept the legal notice and the privacy policy.",
        },
      }).should((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.deep.eq({
          mail_message: "Mail sent",
          mail_success: true,
        });
        expect(res).to.have.property("headers");
      });
    });

    it.skip("fails to send an email if the botfield has a value", () => {
      cy.request({
        method: "POST",
        // the test doesn't fail when it receives a status code that is not 200
        failOnStatusCode: false,
        url: "/.netlify/functions/contact",
        body: {
          email: "dani@mail.com",
          fullname: "Dani Lucaci",
          message: "Hello, how are you",
          datesent: "2019-09-08T07:01:36.627Z",
          locale: "en",
          botfield: "huehuehuehue",
          acceptsconsentcheckbox: true,
          consentcheckboxvalue:
            "I have read and accept the legal notice and the privacy policy.",
        },
      }).should((res) => {
        expect(res.status).to.eq(403);
        expect(res.body).to.eq("Nope.");
        expect(res).to.have.property("headers");
      });
    });

    it.skip("fails to send an email if the consent checkbox was not checked", () => {
      cy.request({
        method: "POST",
        // the test doesn't fail when it receives a status code that is not 200
        failOnStatusCode: false,
        url: "/.netlify/functions/contact",
        body: {
          email: "dani@mail.com",
          fullname: "Dani Lucaci",
          message: "Hello, how are you",
          datesent: "2019-09-08T07:01:36.627Z",
          locale: "en",
          botfield: "",
          acceptsconsentcheckbox: false,
          consentcheckboxvalue:
            "I have read and accept the legal notice and the privacy policy.",
        },
      }).should((res) => {
        expect(res.status).to.eq(451);
        expect(res.body).to.have.string(
          "Legal notice and privacy policy were not accepted",
        );
        expect(res).to.have.property("headers");
      });
    });

    it.skip("fails to send an email if the email validation fails", () => {
      cy.request({
        method: "POST",
        // the test doesn't fail when it receives a status code that is not 200
        failOnStatusCode: false,
        url: "/.netlify/functions/contact",
        body: {
          email: "dani@",
          fullname: "Dani Lucaci",
          message: "Hello, how are you",
          datesent: "2019-09-08T07:01:36.627Z",
          locale: "en",
          botfield: "",
          acceptsconsentcheckbox: true,
          consentcheckboxvalue:
            "I have read and accept the legal notice and the privacy policy.",
        },
      }).should((res) => {
        expect(res.status).to.eq(500);
        expect(res.body).to.have.string("Input validation failed: ");
        expect(res).to.have.property("headers");
      });
    });

    it.skip("fails to send an email if the date sent validation fails", () => {
      cy.request({
        method: "POST",
        // the test doesn't fail when it receives a status code that is not 200
        failOnStatusCode: false,
        url: "/.netlify/functions/contact",
        body: {
          email: "dani@mail.com",
          fullname: "Dani Lucaci",
          message: "Hello, how are you",
          datesent: "monday",
          locale: "en",
          botfield: "",
          acceptsconsentcheckbox: true,
          consentcheckboxvalue:
            "I have read and accept the legal notice and the privacy policy.",
        },
      }).should((res) => {
        expect(res.status).to.eq(500);
        expect(res.body).to.have.string("Input validation failed: ");
        expect(res).to.have.property("headers");
      });
    });
  });
});
