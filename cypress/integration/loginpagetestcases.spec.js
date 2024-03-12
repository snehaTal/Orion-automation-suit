import { LoginPage } from "../page-objects/loginpage";

const loginPage = new LoginPage();

describe("Login Page Test Suit", () => {
  it.only("Verify Login Page Flow of Orion", () => {
    loginPage.navigateURL();
    loginPage.clickOnLoginBtn();
    //cy.wait(8000);

    cy.origin("https://login.microsoftonline.com/", () => {
      cy.get("input[name='loginfmt']").type("orion@talentica.com");
      cy.get("input[type='passwd']").type("Auth@multi!1fact");
      cy.get("input[type='submit']").click();

      cy.get("h1").should(
        "contain",
        "https://staging-orion.talentica.com/customerDashboard"
      );
    });
  });
});
