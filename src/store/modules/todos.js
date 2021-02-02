import { v4 as uuidv4 } from "uuid";

export default {
  state: {
    filter: "all",
    todos: [],
    tab: [
      {
        id: uuidv4(),
        tabText: "All",
        selected: true,
        tabName: "all"
      },
      {
        id: uuidv4(),
        tabText: "Active",
        selected: false,
        tabName: "active"
      },
      {
        id: uuidv4(),
        tabText: "Completed",
        selected: false,
        tabName: "completed"
      }
    ]
  },
  mutations: {
    getFromStorage(state) {
      state.todos = JSON.parse(localStorage.getItem("todos") || "[]");
    },
    addTodo(state, todos) {
      state.todos.push({
        id: todos.id,
        title: todos.title,
        completed: false
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    changeStatus(state, id) {
      state.todos.map(todos => {
        if (todos.id === id) todos.completed = !todos.completed;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateFilter(state, filter) {
      state.filter = filter;
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex(item => item.id == id);
      state.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => !todo.completed);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    tabChange(state, id) {
      state.tab.map(tab => {
        if (tab.id === id) tab.selected = true;
        else tab.selected = false;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }
  },
  actions: {},

  getters: {
    remaining(state) {
      return state.todos.filter(todo => todo.completed === false).length;
    },
    todosFiltered: (state, getters) => {
      if (state.filter == "all") {
        return getters.allTasks;
      } else if (state.filter == "active") {
        return getters.activeTasks;
      } else if (state.filter == "completed") {
        return getters.completedTasks;
      }
      return getters.allTasks;
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
