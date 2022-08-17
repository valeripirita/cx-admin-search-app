import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('that the customer advisor is on the search page', () => {
    cy.visit('/');
});

When('I enter the screen name JOHN123 and click on the search', () => {
    cy.get('[data-test="screen-name-input"]').type('JOHN123');
    cy.get('[data-test="search-form"]').submit();
});

Then('the search result displays id 123, name JOHN, screen name JOHN123 and venture BBNJ', () => {
    cy.get('[data-test="search-result-table"] > tr').eq(0).contains("123");
    cy.get('[data-test="search-result-table"] > tr').eq(0).contains("BBNJ");
    cy.get('[data-test="search-result-table"] > tr').eq(0).contains("JOHN");
    cy.get('[data-test="search-result-table"] > tr').eq(0).contains("JOHN123");
});