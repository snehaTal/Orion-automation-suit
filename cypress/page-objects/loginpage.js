export class LoginPage {
  navigateURL() {
    cy.visit("https://staging-orion.talentica.com/login");
  }

  clickOnLoginBtn() {
    cy.get(".MuiBox-root").eq(1).click({ force: true });
    //cy.contains("Login").should("be.visible").click();
  }

  verifyCorrectUsername() {
    cy.get("#username").clear({ force: true }).type(Cypress.config().email);
  }

  verifyIncorrectPassword() {
    cy.get("#password").clear({ force: true }).type("ty76%66");
  }
}
