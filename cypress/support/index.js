export const visit = () => cy.visit('/')

export const getTodoApp = () => cy.get('#todoapp')

export const getTodoItems = () => getTodoApp().find('#taskList span')

export const getNewTodoInput = () => getTodoApp().find('#inputText')

export const enterTodo = (text)=> {
    getNewTodoInput().type(`${text} {enter}`)
    const lastItem = '#todoapp #taskList span:last'
    cy.get(lastItem).should('contain', text)
  }