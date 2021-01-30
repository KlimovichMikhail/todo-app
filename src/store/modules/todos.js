import { uuid } from "vue-uuid";

export default {
  state: {
    filter: "all",
    todos: [
      {
        id: uuid.v1(),
        title: "Сходить в магазин",
        completed: false
      }
    ],
    tab: [
      {
        id: uuid.v1(),
        tabText: "All",
        selected: true,
        tabName: "all"
      },
      {
        id: uuid.v1(),
        tabText: "Active",
        selected: false,
        tabName: "active"
      },
      {
        id: uuid.v1(),
        tabText: "Completed",
        selected: false,
        tabName: "completed"
      }
    ]
  },
  mutations: {
    addTodo(state, todos) {
      state.todos.push({
        id: todos.id,
        title: todos.title,
        completed: false
      });
    },
    changeStatus(state, id) {
      state.todos.map(todos => {
        if (todos.id === id) todos.completed = !todos.completed;
      });
    },
    updateFilter(state, filter) {
      state.filter = filter;
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex(item => item.id == id);
      state.todos.splice(index, 1);
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => !todo.completed);
    },
    tabChange(state, id) {
      state.tab.map(tab => {
        if (tab.id === id) tab.selected = true;
        else tab.selected = false;
      });
    }
  },
  actions: {
    clearCompleted(context) {
      context.commit("clearCompleted");
    }
  },

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
