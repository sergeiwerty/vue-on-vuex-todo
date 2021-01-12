import Vuex from "vuex";
import Vue from "vue";
// import todos from "./modules/todos";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "Встать в 7:00",
        completed: false,
      },
      {
        id: 2,
        title: "Приготовить завтрак",
        completed: false,
      },
      {
        id: 3,
        title: "Составить план на день",
        completed: false,
      },
    ],
  },

  getters: {
    allTodos: (state) => state.todos,
  },

  actions: {
    addTodo({ commit }, todo) {
      commit("add_todo", todo);
    },
    deleteTodo({ commit }, id) {
      commit("delete_todo", id);
    },
    makeComplited({ commit }, completed) {
      commit("make_complited", completed);
    },
    clearAllTodos({ commit }) {
      commit("clear_all_todos");
    },
  },

  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
      // console.log(todo);
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    make_complited(state, todo) {
      state.todos = state.todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      );
    },
    clear_all_todos(state) {
      state.todos = [];
    },
  },
});
