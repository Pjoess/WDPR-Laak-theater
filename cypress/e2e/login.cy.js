describe("Login formulier invullen", () => {
    it("Checkt of je kan inloggen", () => {
        cy.visit("/login")
        cy.get("#username").type(Cypress.env("username"))
        cy.get("#password").type(Cypress.env("password"))
        cy.get("#submit").click()
        cy.wait(500)
        cy.get("#currentuser").contains(Cypress.env("username"))
    })
})
