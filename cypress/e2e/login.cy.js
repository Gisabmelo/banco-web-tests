describe ('Login', () => {
  beforeEach(() => {
    //arrange
    cy.visit('http://localhost:4000/')
    cy.screenshot('apos-visitar-a-pagina-de-login')
   
  })
  it.only('Login com dados validos deve permitir entrada no sistema', () => {

    

    //action
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.screenshot('apos-preencher-dados-de-login-validos')
    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos-clicar-no-botao-entrar-com-dados-validos')

    //assert
  cy.contains('h4', 'Realizar Transferência').should('be.visible')

  })


 it('Login com dados invalidos deve apresentar mensagem de erro', () => {

    //action
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('45678')
    cy.screenshot('apos-preencher-dados-de-login-invalidos')
    cy.contains('button', 'Entrar').click()

    //assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')


})

})
