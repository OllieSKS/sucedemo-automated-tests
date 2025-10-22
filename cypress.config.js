const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    $schema: 'https://on.cypress.io/cypress.schema.json',
   baseUrl: "https://www.saucedemo.com/" ,
   
    user: "standard_user" ,
    locked_user : 'locked_out_user',
    problem_user: 'problem_user',
    glitch_user: 'performance_glitch_user',
    error_user: 'error_user',
    visual_user: 'visual_user',
    default_password : 'secret_sauce'

  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl:'https://www.saucedemo.com/',
    viewportHeight: 600,
    viewportWidth: 800,
  },
  
  
});
