/// <reference types="cypress" />
describe('Cart Flow', () => {
    beforeEach('Before each login, access the correct website', () => {
        cy.visit('/')
        
    })
    it('Add to cart', ()=> {
        
        cy.get('[id="user-name"]').type(Cypress.env('user'));
        cy.get('[id="password"]').type(Cypress.env('default_password'));
        cy.get('[id="login-button"]').click()
        cy.get('.app_logo').should('have.text','Swag Labs')
        cy.get('[id=add-to-cart-sauce-labs-bike-light]').click()
        cy.get('.shopping_cart_badge').should('be.visible')
    })
    it('Remove item from Your Cart', () => {
        cy.get('[id="user-name"]').type(Cypress.env('user'));
        cy.get('[id="password"]').type(Cypress.env('default_password'));
        cy.get('[id="login-button"]').click()
        cy.get('.app_logo').should('have.text','Swag Labs')
        cy.get('[id=add-to-cart-sauce-labs-bike-light]').click()
        cy.get('.shopping_cart_badge').should('be.visible')
        cy.get('.shopping_cart_badge').click()
        cy.get('.cart_button').click()
    })
    it('Remove from the cart on Inventory Page', () => {
        cy.get('[id="user-name"]').type(Cypress.env('user'));
        cy.get('[id="password"]').type(Cypress.env('default_password'));
        cy.get('[id="login-button"]').click()
        cy.get('.app_logo').should('have.text','Swag Labs')
        cy.get('[id=add-to-cart-sauce-labs-bike-light]').click()
        cy.get('.shopping_cart_badge').should('be.visible')
        cy.get('[id=remove-sauce-labs-bike-light]').click()
    } )
    it('Checkout Order', ()=> {
        cy.get('[id="user-name"]').type(Cypress.env('user'));
        cy.get('[id="password"]').type(Cypress.env('default_password'));
        cy.get('[id="login-button"]').click()
        cy.get('.app_logo').should('have.text','Swag Labs')
        cy.get('[id=add-to-cart-sauce-labs-bike-light]').click()
        cy.get('.shopping_cart_badge').should('be.visible')
        cy.get('.shopping_cart_badge').click()
        cy.get('[id=checkout]').click()
        cy.get('.title').should('have.text','Checkout: Your Information')
        //we can use json data-tests later in order to not let this hardcoded
        cy.get('[id=first-name]').type('joao')
        cy.get('[id=last-name]').type('duarte')
        cy.get('[id=postal-code]').type('60740745')
        cy.get('[id=continue]').click()
        cy.get('.title').should('have.text','Checkout: Overview'),
        cy.get('[id=finish]').click()
        cy.get('.title').should('have.text','Checkout: Complete'),
        cy.get('.complete-header').should('have.text','Thank you for your order!')


    })
    
});

  