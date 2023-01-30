describe("Een bestelling plaatsen", () => {
    it("Checkt of je kan inloggen", () => {
        // stoelen aanklikken
        cy.visit("/seatpicker/1")
        cy.get(".table > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(3) > button:nth-child(1)").click()
        cy.get(".table > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(2) > button:nth-child(1)").click()
        cy.wait(500)
        cy.get(".btn.btn-primary").click()
        
        cy.wait(500)
        // check data
        cy.get("#root > div > div > div.container > table > tbody > tr:nth-child(1) > td:nth-child(1)").contains("Concert at the Park")
        cy.get("#root > div > div > div.container > table > tbody > tr:nth-child(1) > td:nth-child(2)").contains("Zaal 1")
        cy.get("#root > div > div > div.container > table > tbody > tr:nth-child(1) > td:nth-child(3)").contains("Rij 1 Stoel 2")
        cy.get("#root > div > div > div.container > table > tbody > tr:nth-child(1) > td:nth-child(4)").contains("€9.99")

        cy.get("#root > div > div > div.container > table > tbody > tr:nth-child(2) > td:nth-child(1)").contains("Concert at the Park")
        cy.get("#root > div > div > div.container > table > tbody > tr:nth-child(2) > td:nth-child(2)").contains("Zaal 1")
        cy.get("#root > div > div > div.container > table > tbody > tr:nth-child(2) > td:nth-child(3)").contains("Rij 2 Stoel 1")
        cy.get("#root > div > div > div.container > table > tbody > tr:nth-child(2) > td:nth-child(4)").contains("€9.99")
    })
})
