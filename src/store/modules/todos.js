export default {
  state: {
    todos: []
  },
  mutations: {
    // SET_TODO: (state, payload) => {
    //   state.todos = payload;
    // },
    ADD_TODO: (state, payload) => {
      state.todos.push(payload);
    }
  },
  actions: {
    // async GET_TODO(ctx) {
    //   const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=2");
    //   const td = await res.json();
    //   ctx.commit("SET_TODO", td);
    // }
  },

  getters: {
    validTodos: state => {
      return state.todos.filter(td => {
        td.title;
      });
    },
    TODOS: state => {
      return state.todos;
    }
  }
};
