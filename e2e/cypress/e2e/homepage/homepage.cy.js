describe("English Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("cy.location() navigates to the english url", () => {
    it("renders the correct english current URL", () => {
      const path = Cypress.env("baseUrl") + "/";
      cy.url().should("eq", path);
    });
  });

  context("renders the english index title and subtitle", () => {
    it("renders the english h1 title", () => {
      cy.get("[data-testid=Index__Hero__Title]").should(
        "contain.text",
        "Product Designer and Front-End Developer"
      );
    });

    it("renders the english subtitle", () => {
      cy.get("[data-testid=Index__Hero__Subtitle]").should(
        "contain.text",
        "I specialize in UX/UI Design and front-end"
      );
    });
  });

  context("renders all the services svg", () => {
    it("renders the 1st services svg with alt code", () => {
      cy.get("[data-testid=Homepage__SVG__01]").should("have.attr", "alt");
    });
    it("renders the 2nd services svg with alt code", () => {
      cy.get("[data-testid=Homepage__SVG__02]").should("have.attr", "alt");
    });
    it("renders the 3rd services svg with alt code", () => {
      cy.get("[data-testid=Homepage__SVG__03]").should("have.attr", "alt");
    });
    it("renders the 4th services svg with alt code", () => {
      cy.get("[data-testid=Homepage__SVG__04]").should("have.attr", "alt");
    });
  });

  context("the Dribbble posts have loaded", () => {
    it("loads the initial 6 dribbble posts", () => {
      cy.get("[data-testid=Dribbble__Posts__Wrapper]")
        .scrollIntoView()
        .within(() => {
          cy.get("figure")
            .should("be.visible")
            .find("img")
            .should("have.attr", "srcset");
        });
    });
  });

  context("the Dribbble posts have not returned an error", () => {
    it("checks that an error message was not returned", () => {
      cy.get("[data-testid=Dribbble__Posts__Wrapper]")
        .scrollIntoView()
        .within(() => {
          cy.get("[data-testid=Dribbble__Posts__ErrorMessage]").should(
            "not.exist"
          );
        });
    });
  });

  context("the contact card is rendered correctly in english", () => {
    it("renders the contact card in english", () => {
      cy.get("[data-testid=Contact__Card]").within(() => {
        cy.get("h2");
        cy.should("have.text", "Have a project in mind?");
      });
    });
  });

  context("the cta on the contact card has a link to /contact", () => {
    it("finds the link button that has a link to /contact", () => {
      cy.get("[data-testid=Contact__Card]").within(() => {
        cy.get("a")
          .should("have.attr", "href", "/contact")
          .should("have.attr", "role", "button");
      });
    });
  });
});
