describe("Homepage - English Locale", () => {
  beforeEach(() => {
    cy.visit("http://192.168.1.14:8000/");
  });

  context("cy.location() navigates to the correct url", () => {
    it("renders '/' location", () => {
      // https://on.cypress.io/location
      cy.location().should((location) => {
        expect(location.href).to.eq("http://192.168.1.14:8000/");
        expect(location.pathname).to.eq("/");
      });
    });

    it("renders the correct current URL", () => {
      // https://on.cypress.io/url
      cy.url().should("eq", "http://192.168.1.14:8000/");
    });
  });

  context("testing it renders the index title and subtitle", () => {
    it("renders the english h1 title", () => {
      cy.get("[data-testid=Index__Hero__Title]").should(
        "have.text",
        "Product Designer & Front-End Developer",
      );
    });

    it("renders the english subtitle", () => {
      cy.get("[data-testid=Index__Hero__Subtitle]").should(
        "contain.text",
        "I specialize in UX/UI Design and front-end",
      );
    });
  });

  context("testing it renders the services svg", () => {
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

  context("testing if the Dribbble posts have loaded", () => {
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

  context.only(
    "testing if the Dribbble posts have not returned an error",
    () => {
      it("checks that an error message was not returned", () => {
        cy.get("[data-testid=Dribbble__Posts__Wrapper]")
          .scrollIntoView()
          .within(() => {
            cy.get("[data-testid=Dribbble__Posts__ErrorMessage]").should(
              "not.exist",
            );
          });
      });
    },
  );

  context("testing if the contact card is rendered correctly", () => {
    it("renders the contact card in english", () => {
      cy.get("[data-testid=Contact__Card]").within(() => {
        cy.get("h2");
        cy.should("have.text", "Have a project in mind?");
      });
    });
  });

  context(
    "testing if the cta on the contact card navigates to /contact",
    () => {
      it("finds the link button and navigates to /contact", () => {
        cy.get("[data-testid=Contact__Card]").within(() => {
          cy.get("a").click();
          cy.location().should((location) => {
            expect(location.pathname).to.eq("/contact");
          });
        });
      });
    },
  );
});
