/// <reference types="Cypress" />

describe("testing of EA app",()=>{
    it("Login Application",()=>{

        //Visiting website1
        cy.visit("http://eaapp.somee.com/");
        // cy.contains("Login").click();
        // cy.url().should("include","/Account/Login");

         //Visiting website2
        // cy.visit("http://eaapp.somee.com/Account/Login");
        // cy.get('#UserName').type("chandra")
        // cy.get('#Password').type("123456@muL")
        // cy.get(".btn").click();

         //Visiting website3
         cy.get("#loginLink").then(($link)=>{
             let linkText=$link.text();
             expect(linkText).is.eql('Login')
         }).click();

        //click employee link
        // cy.visit("http://eaapp.somee.com/Employee");
        
        // cy.contains("Employee List").click();
       
        //Table
        // cy.get(".table").find("tr > td");
        // cy.get(".table").find("tr").contains("Prashanth").parent().contains("Benefits").click();
    })
})