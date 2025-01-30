describe('My First Test', () => {
    it('Visits the app and checks the title', () => {
        cy.visit('index.html');
        cy.contains('Hello, Cypress!');
    });
});
