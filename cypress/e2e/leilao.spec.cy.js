describe('Leilão de Produto', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/');
  });

  it('deve exibir mensagem de erro para lance menor que o mínimo', () => {
    cy.get('#bid-input').type('50');
    cy.get('#bid-button').click();
    cy.get('#message').should('contain', 'O lance deve ser igual ou maior que R$ 100,00.');
  });

  it('deve aceitar lance válido e exibir mensagem de sucesso', () => {
    cy.get('#bid-input').type('150');
    cy.get('#bid-button').click();
    cy.get('#message').should('contain', 'Lance de R$ 150.00 aceito com sucesso!');
  });
});
