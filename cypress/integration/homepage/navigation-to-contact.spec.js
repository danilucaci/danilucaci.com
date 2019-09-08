describe("English Homepage - Navigates to /contact", () => {
  beforeEach(() => {
    cy.visit("http://192.168.1.14:8000/");
  });

  context("the cta on the contact card navigates to /contact", () => {
    it("finds the link button and navigates to /contact", () => {
      cy.get("[data-testid=Contact__Card]").within(() => {
        cy.get("a").click();
        cy.location().should((location) => {
          expect(location.pathname).to.eq("/contact");
        });
      });
    });
  });
});

describe("Spanish Homepage - Navigates to /es/contacto", () => {
  beforeEach(() => {
    cy.visit("http://192.168.1.14:8000/es");
  });

  context("the cta on the contact card navigates to /es/contacto", () => {
    it("finds the link button and navigates to /es/contacto", () => {
      cy.get("[data-testid=Contact__Card]").within(() => {
        cy.get("a").click();
        cy.location().should((location) => {
          expect(location.pathname).to.eq("/es/contacto");
        });
      });
    });
  });
});
