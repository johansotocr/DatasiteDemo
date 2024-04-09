import globalMenu from "../../../pageObjects/components/globalMenu";
import moveInOnline from "../../../pageObjects/moveInOnline";
import storageResults from "../../../pageObjects/storageResults";

describe('Test suite: Find the Nearest Storage Facility (FTNSF)', () => {
    
    beforeEach(function() {
      cy.getHomePage(Cypress.env('domain'));
     })

    it('TC_0002: Validate that FTNSF form can be submitted using valid zip code only.', () => {
      const location = 33022;
      //Assertion
      cy.url().should('eq', 'https://www.uhaul.com/');
      globalMenu.clickMenu('Storage', 'Move-In Online Today!');
      //Assertion 
       cy.url().should('contain', 'Storage/Online-Move-In/');
       moveInOnline.addlocation(location);
       moveInOnline.clickFindStorageBtn();
       //Assertion 
       cy.url().should('contain', '/Results/');
       storageResults.getHeadLbl().should('contain',`Find a Storage Unit Near You in ${location}`);
      })

      it('TC-0004: Validate that FTNSF form cannot be sumitted with an invalid zip code.', () => {
         const location = 33;
         //Assertion
         cy.url().should('eq', 'https://www.uhaul.com/');
         globalMenu.clickMenu('Storage', 'Move-In Online Today!');
         //Assertion 
          cy.url().should('contain', 'Storage/Online-Move-In/');
          moveInOnline.addlocation(location);
          moveInOnline.clickFindStorageBtn();
          //Assertion
          moveInOnline.getErrorMsg().should('contain', 'We could not find your location. Please enter your zip/postal code, city or address again.');
      })
  })