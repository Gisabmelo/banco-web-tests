describe ('Login', () => {
  it('Login com dados validos deve permitir entrada no sistema', () => {
    //arrange
    cy.visit('http://localhost:4000/')

    //action
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()

    //assert
  cy.contains('h4', 'Realizar Transferência').should('be.visible')

  })


 it('Login com dados invalidos deve permitir entrada no sistema', () => {
    //arrange
    cy.visit('http://localhost:4000/')

    //action
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('45678')
    cy.contains('button', 'Entrar').click()

    //assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')


})

})
