//Cura Healthcare App Demo

describe('Create Appointment in Cura', () => {

    it('Visit the URL and click on Make Appointment', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
    //     // perform other options

        // cy.click('#combo_facility').select('Seoul CURA Health Center');
        cy.get('#chk_hospotal_readmission').click()
        cy.get('#radio_program_medicaid').click()
        cy.get('#txt_visit_date').type('28/12/2023')
        cy.get('#txt_comment').click({force: true})
        cy.get('#txt_comment').type('Date confirmation on 28/12/2023')
        cy.get('#btn-book-appointment').click()
        cy.get('h2').contains('Appointment Confirmation')
        cy.get('#comment').contains('confirmation')
        // cy.contains('Go to Homepage').click()

})


})