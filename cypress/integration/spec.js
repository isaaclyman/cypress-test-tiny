describe('clock.restore', () => {
  it('works', () => {
    const clock = cy.clock()
    clock.tick(1000)
    clock.restore()
  })
})
