describe("Perform actions in Conduit app", () => {

    //Test1: Check for login function
    it("Logs in and adds blog post and logs out in the end", () => {


        //SignIn function has been written in commands.js file
        cy.SignIn()

        //Alternate Method

        // cy.get('form').within(($form) => {

        //     cy.get('input[type="email"]').type('zabilac@mailper.com')
        //     cy.get('input[type="password"]').type('Z@B!L@C-8798')
        //     cy.root().submit()
        // })

        //assert for homepage feed after login
        cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')

        //create a new post and publish
        cy.contains('New Post').click() //cy.get('ul.navbar-nav').children().contains('New Post).click --uncomment this for finding a precise element under a class
        cy.hash().should('include', '#/editor')
        cy.get('input[placeholder="Article Title"]').type('AAAAAA123') //cy.get('input').first().type('Test1')
        cy.get('input[placeholder="What\'s this article about?"]').type('Test1') //cy.get('input).eq(1).type('Test 2')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test2') //cy.get('textholder').last().type('Test1')
        cy.contains('Publish Article').click()


        //navigate to Home
        cy.get('.nav-link').contains('Home').should('be.visible').click()

        //go to settings
        cy.get('.nav-link').contains('Settings').should('be.visible').click()
        

        //log out
        cy.get('.btn-outline-danger').contains('logout').click()

        //
        cy.get('.nav-link').contains('Global Feed').should('be.visible')
    })


})

