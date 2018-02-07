describe('page', () => {
  beforeEach(() => {
    cy.clock()
    cy.visit('index.html')    
  })

  // This test fails
  it('loads with a single tick', () => {
    cy.tick(2000)
    cy.get('#main').contains('Loaded').should('exist')
  })

  // This test passes
  it('loads with a double tick', () => {
    cy.tick(1000)
    cy.tick(1000)
    cy.get('#main').contains('Loaded').should('exist')
  })
})
