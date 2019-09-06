// describe("Homepage - English Navigation", () => {
//   beforeEach(() => {
//     cy.visit("http://192.168.1.14:8000/");
//   });

//   context("cy.location() navigates to the correct url", () => {
//     it("sets auth cookie when logging in via form submission", function() {
//       // destructuring assignment of the this.currentUser object
//       const { username, password } = this.currentUser;

//       cy.visit("/login");

//       cy.get("input[name=username]").type(username);

//       // {enter} causes the form to submit
//       cy.get("input[name=password]").type(`${password}{enter}`);

//       // we should be redirected to /dashboard
//       cy.url().should("include", "/dashboard");

//       // our auth cookie should be present
//       cy.getCookie("your-session-cookie").should("exist");

//       // UI should reflect this user being logged in
//       cy.get("h1").should("contain", "jane.lane");
//     });
//   });
// });

// cy.contains('Submit')      // 6.
// .click()                 // 7.

// cy.url()                   // 8.
// .should('include', '/posts/my-first-post')

// cy.get('h1')               // 9.
// .should('contain', 'My First Post')
// cy.get(':checkbox').should('be.disabled')
