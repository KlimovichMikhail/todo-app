import { visit, getTodoApp, enterTodo,getTodoItems,getNewTodoInput } from '../support/index'

describe('Input form', () => {
  beforeEach(() => visit())
  it('loads the app', () => {
    cy.get('#todoapp',{ timeout: 10000 }).should('be.visible')
  }),
  it('adds 2 todos', () => {
    cy.get('#formEnter',{ timeout: 100000 })
    .type('learn testing{enter}')
    .type('be cool{enter}')

    cy.get('#taskList span')
    .should('have.length', 2)
   })
  
})
describe('UI', () => {
  beforeEach(() => visit())

  context('basic features', () => {
    it('loads application', () => {
      getTodoApp().should('be.visible')
    })

    it('starts with zero items', () => {
      cy.get('#taskList span').should('have.length', 0)
    })

    it('adds two items', () => {
      enterTodo('first item')
      enterTodo('second item')
      getTodoItems().should('have.length', 2)
    })

    it('enters text in the input', () => {
      const text = 'do something'
      getNewTodoInput().type(text)
      getNewTodoInput().should('have.value', text)
    })

    it("change status", () => {
      enterTodo("Task 1")
      
      cy.get("#taskList span")
      .first()
      .click();
      cy.get("#checkbox")
        .first()
        .should("be.checked");
    })

    it("test for footer tabs", () => {
      enterTodo("Task 1")
      enterTodo("Task 2")
      enterTodo("Task 3")
  
      cy.get("#taskList span")
        .first()
        .click();
  
      cy.get("#tabs>label")
        .eq(1)
        .click();
      cy.get("#checkbox").should("not.be.visible"); 
  
      cy.get("#tabs>label")
        .eq(2)
        .click();
      cy.get("#checkbox").should("be.checked");
  
      cy.get("#tabs>label")
        .first()
        .click();
      cy.get("#taskList span").should("have.length",3 );
    });

    it('can add many items', () => {
      const N = 10

      for (let k = 0; k < N; k += 1) {
        enterTodo(`item ${k + 1}`)
      }
      getTodoItems().should('have.length', N)
    })
  })
  context('advanced', () => {
    it('adds two and deletes first', () => {
      enterTodo('first item')
      enterTodo('second item')

      getTodoItems()
      .contains('first item')
      .parent()
      .find('#destroy')
      .click({ force: true }) 

      cy.contains('first item').should('not.exist')
      cy.contains('second item').should('exist')
      getTodoItems().should('have.length', 1)
    })
  })
})  
