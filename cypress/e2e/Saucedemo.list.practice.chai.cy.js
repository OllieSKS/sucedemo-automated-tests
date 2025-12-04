describe('testing chai fundamentals', ()=> {
    it('Test all the elements on the list', () => {
        cy.visit('/')
        cy.get('[id="user-name"]').type(Cypress.env('user'));
        cy.get('[id="password"]').type(Cypress.env('default_password'));
        cy.get('[id="login-button"]').click()

        cy.get('.inventory_list').then(($elements) => {
            expect($elements.eq(0)).to.have.text('inventory-item-sauce-labs-backpack-img')
        })
   
    }
)})