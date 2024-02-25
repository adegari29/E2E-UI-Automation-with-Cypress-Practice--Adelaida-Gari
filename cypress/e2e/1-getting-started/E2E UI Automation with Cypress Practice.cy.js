describe('template spec', () => {
  it('Test1 and Test2', () => {
    cy.performTest1And2({ test1: 'testCase1', test2: 'testCase2' });
  });

  it('Test3', () => {
    cy.performTest3({ test3: 'testCase3' });
  });
});