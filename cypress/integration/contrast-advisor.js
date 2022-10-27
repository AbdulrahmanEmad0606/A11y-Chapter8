/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress" />

describe('Contrast Advisor Demo', () => {
    it('should show contrast issues on Applitools dashboard', () => {
        
          cy.visit('https://heavyweight.nl/');
          cy.checkA11y();
    });
  });