<template>
  <!-- <div class="task-item" v-bind:class="{ 'is-complete': todo.completed }"> -->
  <div class="task-item">
    <p>
      <!-- <input type="checkbox" v-on:change="markComplete" />
      {{ todo.title }}
      <button @click="$emit('del-todo', todo.id)" v-on:change="delTask">X</button> -->
      {{ todo.title }}
    </p>
    <button @click="deleteTodo(todo.id)" class="del">X</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Todoitem",
  // props: ["todo"],
  // methods: {
  //   markComplete() {
  //     this.todo.completed = !this.todo.completed;
  //   },
  // },
  props: {
    todo: {},
  },
  methods: {
    ...mapActions(["deleteTodo"]),
  },
};
</script>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  background: aliceblue;
  padding: 10px;
  border-bottom: 1px solid rgb(23, 53, 78);
}

.is-complete {
  text-decoration: line-through;
}

.del {
  margin-left: 10px;
  color: black;
  background-color: rgb(238, 106, 106);
  border: 0;
  border-radius: 5px;
}
</style>
