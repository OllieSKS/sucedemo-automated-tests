/// <reference types="cypress" />

describe('Login Flow', () => {
    beforeEach('Before each login, access the correct website', () => {
        cy.visit('/')
        
    })
    it('logs in as standard_user', ()=> {
        
        cy.get('[id="user-name"]').type(Cypress.env('user'));
        cy.get('[id="password"]').type(Cypress.env('default_password'));
        cy.get('[id="login-button"]').click()
    })
    it('logs in as locked_out', ()=> {
        
        cy.get('[id="user-name"]').type(Cypress.env('locked_user'));
        cy.get('[id="password"]').type(Cypress.env('default_password'));
        cy.get('[id="login-button"]').click()
    })
    it('logs in as problem_user', ()=> {
        
        cy.get('[id="user-name"]').type(Cypress.env('problem_user'));
        cy.get('[id="password"]').type(Cypress.env('default_password'));
        cy.get('[id="login-button"]').click()
    })
    it('logs in as performance_glitch_user', ()=> {
        
        cy.get('[id="user-name"]').type(Cypress.env('glitch_user'));
        cy.get('[id="password"]').type(Cypress.env('default_password'));
        cy.get('[id="login-button"]').click()
    })
    it('logs in as error_user', ()=> {
        
        cy.get('[id="user-name"]').type(Cypress.env('error_user'));
        cy.get('[id="password"]').type(Cypress.env('default_password'));
        cy.get('[id="login-button"]').click()
    })
    it('logs in as visual_user', ()=> {
        
        cy.get('[id="user-name"]').type(Cypress.env('visual_user'));
        cy.get('[id="password"]').type(Cypress.env('default_password'));
        cy.get('[id="login-button"]').click()
    })
             
})
    