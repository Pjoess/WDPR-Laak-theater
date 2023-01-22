describe("Login formulier incorrect invullen", () => {
    it("Logt in met incorrecte gegevens", () => {
        cy.visit("/login")

        // invullen
        cy.get("#username").type(Cypress.env("username"))
        let passwordIncorrect = Cypress.env("password").slice(0, -4)
        cy.get("#password").type(passwordIncorrect)

        // verzenden intercept
        cy.intercept({
            method: "POST",
            url: "http://synchronicity.ddns.net:7002/api/Login/user",
        }).as("badRequest")

        // verzendknop
        cy.get("#submit").click()

        // spy
        cy.wait("@badRequest").then(({ request, response }) => {
            expect(response.statusCode).to.eq(400)
        })
    })
})
