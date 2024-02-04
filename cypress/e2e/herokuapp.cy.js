//Herokuapp Forms Demo

describe('Herokuapp Forms Demo site', () => {

    it('Opens the site', () => {
        cy.visit('https://the-internet.herokuapp.com/')
})

    it('Opens the site and adds/removes elements', () => {
        cy.visit('https://the-internet.herokuapp.com/') 
        cy.contains('Add/Remove Elements').click()
        cy.url().should('include', 'add_remove_elements')
        
        //write for loop for repetitive iterations

        const repeat = 4;
    for (let i = 0; i < repeat; i++) 
    {
    cy.get('[onclick="addElement()').click();
    }

    const r = repeat
    cy.get('#elements > :nth-child(n)').first().click();
    //write eq(n) where n=number of items for fetching specific items starting from 0
    cy.get('#elements > :nth-child(n)').eq(1).click();

    })

})
