/// <reference types="Cypress" />

export const VisitSite = () => cy.visit('http://cash-register-app.s3-website-us-east-1.amazonaws.com/');

export const TotalLabel = () => cy.get('[data-qa="total"]');

export const ItemButton = (text = '') => cy.get(`[alt="${text}"]`);
