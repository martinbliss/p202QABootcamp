/// <reference types="Cypress" />

import { TotalLabel, ItemButton, VisitSite } from "../pages/cash-register.page";


context('Inventory Bar', () => {
    before(() => {
        VisitSite();
    });

    it('should start with $0.00 total', () => {
        TotalLabel().should('have.text', '$0.00');
    });

    it('should have a non-zero balance after an item is selected', () => {
        ItemButton('1 Banana').click();
        expect(TotalLabel()).to.not.have.text('$0.00');
    });
});