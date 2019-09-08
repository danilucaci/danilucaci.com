describe("English Homepage - Site Nav Links", () => {
  beforeEach(() => {
    cy.visit("http://192.168.1.14:8000/");
  });

  context("site nav has english links with an href", () => {
    it("finds the english site nav links", () => {
      cy.get("header nav")
        .find("a")
        .then(($links) => {
          expect($links[0]).to.have.attr("href", "/");
          expect($links[1]).to.have.attr("href", "/work");
          expect($links[2]).to.have.attr("href", "/blog");
          expect($links[3]).to.have.attr("href", "/about-me");
          expect($links[4]).to.have.attr("href", "/contact");
        });
    });
  });
});

describe("Spanish Homepage -Site Nav Links", () => {
  beforeEach(() => {
    cy.visit("http://192.168.1.14:8000/es");
  });

  context("site nav has spanish links with an href", () => {
    it("finds the spanish site nav links", () => {
      cy.get("header nav")
        .find("a")
        .then(($links) => {
          expect($links[0]).to.have.attr("href", "/es");
          expect($links[1]).to.have.attr("href", "/es/trabajos");
          expect($links[2]).to.have.attr("href", "/es/blog");
          expect($links[3]).to.have.attr("href", "/es/sobre-mi");
          expect($links[4]).to.have.attr("href", "/es/contacto");
        });
    });
  });
});
