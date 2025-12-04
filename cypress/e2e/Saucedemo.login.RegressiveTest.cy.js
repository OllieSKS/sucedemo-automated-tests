/// <reference types="cypress" />

describe('Login Flow', () => {
    beforeEach('Before each login, access the correct website', () => {
        cy.visit('/')
        
    })
    it.only('logs in as standard_user', ()=> {
        
        cy.get('[id="user-name"]').type(Cypress.env('user'));
        cy.get('[id="password"]').type(Cypress.env('default_password'));
        cy.get('[id="login-button"]').click()
        cy.get('.inventory_list').last('have.text','inventory-item-sauce-labs-backpack-img')
    })

    //Given I have a locked out user 
    //When try to log-in into the website
    //Then the system should show a failure message saying the user is locked
    it('logs in as locked_out', ()=> {
        
        cy.get('[id="user-name"]').type(Cypress.env('locked_user'));
        cy.get('[id="password"]').type(Cypress.env('default_password'));
        cy.get('[id="login-button"]').click()
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')

        

        
    })
    //Given o logs in as problem_user
    //When I'm in the system
    //Then we should test smt in the future, too many things on this user lol
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
    