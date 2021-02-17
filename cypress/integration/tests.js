describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations',
    {fixture: 'reservations'})

    cy.visit('http://localhost:3000/')
  })

  it('Should have a new reservation form', () => {
    cy.get('input').should('have.length', 4)
  })

  it('Should have reservation cards', () => {
    cy.get('article').should('have.length', 2)
  })
})

describe('ReservationForm', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations',
    {fixture: 'reservations'})

    cy.visit('http://localhost:3000/')
  })

  it('Should allow the user to input a name', () => {
    cy.get('input[name="formName"]').type('new name')
      .should('have.value', 'new name')
  })

  it('Should allow the user to input a date', () => {
    cy.get('input[name="formDate"]').type('2021-12-12')
      .should('have.value', '2021-12-12')
  })

  it('Should allow the user to input a time', () => {
    cy.get('input[name="formTime"]').type('07:00')
      .should('have.value', '07:00')
  })

  it('Should allow the user to input a number of guests', () => {
    cy.get('input[name="formGuests"]').type('3')
      .should('have.value', '3')
  })
})

describe('Integration', () => {
  beforeEach(() => {
    // cy.intercept('GET', 'http://localhost:3001/api/v1/reservations',
    // {fixture: 'reservations'})
    // Not sure how to stub api calls with a post and change

    cy.visit('http://localhost:3000/')
  })

  it.only('As a user I should be able to submit a reservation, and see it appear in the list', () => {
    // cy.get('article').should('have.length', 2)
    cy.get('input[name="formName"]').type('Test')
    cy.get('input[name="formDate"]').type('2021-12-12')
    cy.get('input[name="formTime"]').type('07:00')
    cy.get('input[name="formGuests"]').type('3')
    cy.get('button[name="submit"]').click()
    cy.get('article').last().should('have.text', 'TestParty of 312/12at07:00')
    //this is a bad test because it makes a real post
  })
})
