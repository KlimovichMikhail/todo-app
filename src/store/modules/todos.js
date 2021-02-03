import { v4 as uuidv4 } from "uuid";

export default {
  state: {
    filter: "All",
    todos: []
  },
  mutations: {
    getFromStorage(state) {
      state.todos = JSON.parse(localStorage.getItem("todos") || "[]");
    },
    addTodo(state, newTitle) {
      state.todos.push({
        id: uuidv4(),
        title: newTitle,
        completed: false
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setFilter(state, filter) {
      state.filter = filter;
    },
    changeStatus(state, id) {
      state.todos.map(todos => {
        if (todos.id === id) todos.completed = !todos.completed;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo(state, idDelete) {
      state.todos = state.todos.filter(todo => todo.id !== idDelete);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => !todo.completed);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }
  },
  actions: {},

  getters: {
    remaining(state) {
      return state.todos.filter(todo => todo.completed === false).length;
    },
    todosFiltered: (state, getters) => {
      if (state.filter == "Active") {
        return getters.activeTasks;
      } else if (state.filter == "Completed") {
        return getters.completedTasks;
      } else return getters.allTasks;
    },
    allTasks(state) {
      return state.todos;
    },
    activeTasks(state) {
      return state.todos.filter(todo => !todo.completed);
    },
    completedTasks(state) {
      return state.todos.filter(todo => todo.completed);
    },
    allTabs(state) {
      return state.tab;
    }
  }
};
