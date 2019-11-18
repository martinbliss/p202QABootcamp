/// <reference types="Cypress" />

const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');


const url = 'http://cash-register-app.s3-website-us-east-1.amazonaws.com/';

Given('I open the app', () => {
    return cy.visit(url);
});

When('I select {string}', (item) => {
    cy.get(`img[alt="${item}"]`).click();
});

When('I hit the tender button', () => {
    cy.get('button:contains("Tender")').click();
});

When('I enter tender amount {string}', (value) => {
    cy.get('button:contains("Tender")').click();
    cy.get('input[aria-label="tender-amount"]').type(value);
});

Then('I see a total of {string}', (value) => {
    cy.get('[data-qa="total"]').should('have.text', value);
});

Then('there is a balance', () => {
    cy.get('[data-qa="total"]').should('not.have.text', '$0.00');
});

Then('the tender modal total matches the inventory bar total', () => {
    cy.get('[data-qa="total"]').then(totalLabel =>
        cy.get('span[aria-label="tender-total"]').should('have.text',
            totalLabel.text()
        )
    );
});

Then('the tender modal total is {string}', value => {
    cy.get('span[aria-label="tender-total"]').should('have.text', value);
});
