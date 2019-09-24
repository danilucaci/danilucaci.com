describe("English Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("cy.location() navigates to the english url", () => {
    it("renders '/' location", () => {
      // https://on.cypress.io/location
      cy.location().should((location) => {
        expect(location.href).to.eq(`${Cypress.env("devURLPath")}/`);
        expect(location.pathname).to.eq("/");
      });
    });

    it("renders the correct english current URL", () => {
      // https://on.cypress.io/url
      cy.url().should("eq", `${Cypress.env("devURLPath")}/`);
    });
  });

  context("renders the english index title and subtitle", () => {
    it("renders the spanish h1 title", () => {
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
            "not.exist",
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

describe("Spanish Homepage", () => {
  beforeEach(() => {
    cy.visit("/es");
  });

  context("cy.location() navigates to the spanish url", () => {
    it("renders '/es' location", () => {
      // https://on.cypress.io/location
      cy.location().should((location) => {
        expect(location.href).to.eq(`${Cypress.env("devURLPath")}/es/`);
        expect(location.pathname).to.eq("/es/");
      });
    });

    it("renders the correct spanish current URL", () => {
      // https://on.cypress.io/url
      cy.url().should("eq", `${Cypress.env("devURLPath")}/es/`);
    });
  });

  context("renders the spanish index title and subtitle", () => {
    it("renders the spanish h1 title", () => {
      cy.get("[data-testid=Index__Hero__Title]").should(
        "have.text",
        "Diseñador de Productos y Desarollador Front-End",
      );
    });

    it("renders the spanish subtitle", () => {
      cy.get("[data-testid=Index__Hero__Subtitle]").should(
        "contain.text",
        "Me especializo en diseño UX / UI y desarrollo front-end",
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
            "not.exist",
          );
        });
    });
  });

  context("the contact card is rendered correctly in spanish", () => {
    it("renders the contact card in spanish", () => {
      cy.get("[data-testid=Contact__Card]").within(() => {
        cy.get("h2");
        cy.should("have.text", "¿Tienes un proyecto en mente?");
      });
    });
  });

  context("the cta on the contact card has a link to /contact", () => {
    it("finds the link button that has a link to /es/contacto", () => {
      cy.get("[data-testid=Contact__Card]").within(() => {
        cy.get("a")
          .should("have.attr", "href", "/es/contacto")
          .should("have.attr", "role", "button");
      });
    });
  });
});
