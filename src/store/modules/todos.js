export default {
  state: {
    status: { type: "completedTasks" },
    todos: [
      {
        id: 1,
        title: "Сходить в магазин",
        completed: false
      }
    ]
  },
  mutations: {
    ADD_TODO(state, todos) {
      state.todos.push({
        id: todos.id,
        title: todos.title,
        completed: false
      });
    },
    changeStatus(state, givenId) {
      state.todos.map(todos => {
        if (todos.id === givenId) todos.completed = !todos.completed;
      });
    }
  },
  actions: {
    ADD_TODO(context, todos) {
      context.commit("ADD_TODO", todos);
    }
  },

  getters: {
    remaining(state) {
      return state.todos.filter(todo => todo.completed === false).length;
    },
    todosFiltered: (state, getters) => {
      if (state.status === "activeTasks") {
        return getters.allTasks;
      } else if (state.status === "allTasks") {
        return getters.activeTasks;
      } else if (state.status === "completedTasks") {
        return getters.completedTasks;
      }
      return state.todos;
    },
    TODOS: state => {
      return state.todos;
    },

    allTasks(state) {
      return state.todos;
    },

    activeTasks(state) {
      return state.todos.filter(todos => todos.completed === true);
    },
    completedTasks(state) {
      return state.todos.filter(todos => todos.completed === false);
    }
  }
};
