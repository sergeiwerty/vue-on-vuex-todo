<template>
  <div id="app">
    <!-- {{ msg }} -->
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "./components/Todos";

export default {
  name: "App",
  components: {
    Todos,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Встать в 7:00",
          completed: true,
          text: "dfgsdfgsdfg",
        },
        {
          id: 2,
          title: "Приготовить завтрак",
          completed: false,
          text: "m,m,m,m,m,",
        },
        {
          id: 3,
          title: "Составить план на день",
          completed: false,
          text: "",
        },
      ],
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
