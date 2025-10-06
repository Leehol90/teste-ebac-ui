/*
O codigo escrito nesse arquivo irá rodar no cypress. 
Para poder utilizá-lo, baixar e executar o programa.
O começo do arquivo deve conter essas três barras.
o arquivo.cy.js é um arquivo cypress, que por sua vez é um arquivo json.
*/

/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        //cy.visit carrega uma url para fazer os testes
        cy.get('#username').type('Augusto@teste.com')
        cy.get('#password').type('teste@teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, augusto')
    })
})