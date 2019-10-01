/// <reference types="Cypress" />

describe("testing of EA app",()=>{
    it("Login Application",()=>{

        //Visiting website1
        // cy.visit("http://eaapp.somee.com/");
        // cy.contains("Login").click();
        // cy.url().should("include","/Account/Login");

         //Visiting website2
        // cy.visit("http://eaapp.somee.com/Account/Login");
        // cy.get('#UserName').type("chandra")
        // cy.get('#Password').type("123456@muL")
        // cy.get(".btn").click();

         //Visiting website3
        //  cy.get("#loginLink").then(($link)=>{
        //      let linkText=$link.text();
        //      expect(linkText).is.eql('Login')
        //  }).click();

        //click employee link
        cy.visit("http://eaapp.somee.com/Employee");
        
        // cy.contains("Employee List").click();
       
        //Table
        // cy.get(".table").find("tr > td");

        //after click table 
        // cy.get(".table").find("tr").contains("Prashanth").parent().contains("Benefits").click();
        
        // cy.get(".table").find("tr").as("rows");
        // cy.get("@rows").then(($row)=>{
        //     // wrap:- bring all the objects of the perticular row
        //     cy.wrap($row).click({multiple:true});
        // });

        // verify the value from a property
        cy.wrap({name:"Karthik"}).should("have.property","name").and("eq","Karthik");
        
        //using Wrap
        cy.get(".table").find("tr > td").then(($td)=>{
            cy.wrap($td).contains("Jhon").invoke("wrap").parent().contains("Benefits").click();
        })
    });
});


describe("tesing 2 of EA App",()=>{
    it("login Application  ",()=>{
        cy.visit("http://eaapp.somee.com/");

        //Mehtod 1
        // cy.contains("Login").then(($link)=>{
        //     const linkText = $link.text();
        //      expect(linkText).is.eql("Login");
        // }).click();

        //Method 2
        //  cy.get("#loginLink").then(($link)=>{
        //      let linkText=$link.text();
        //      expect(linkText).is.eql('Login')
        //  }).click();

         //alias mehtod 3(outside of promise testing)
         //long way of working with promise (Closure)

        //  cy.contains("Login").then(($link)=>{
        //      return $link.text();
        //  }).as("linkText");

        //shorthand way of working with promise using invoke
         cy.contains("Login").invoke("text").as("linkText");

        //  cy.contains("Login").click();
         cy.get("@linkText").then(($x)=>{
             expect($x).is.eql("Login")
         })

    });
})