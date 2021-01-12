<template>
  <div>
    <h1>Список дел</h1>
    <div class="add-task-block">
      <h2>Добавьте задачу</h2>
      <div class="wrapper">
        <input @change="todoTextChange" v-bind:value="todoText" type="text" />
        <button @click="addTodoItem" type="submit">Добавить</button>
        <button @click="clearAllTodos" type="submit" class="clear">
          Очистить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";
export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    ...mapActions(["addTodo", "clearAllTodos"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    addTodoItem() {
      this.addTodo({
        id: v1(),
        title: this.todoText,
      });
      this.todoText = "";
    },
  },
};
</script>

<style scoped>
h1 {
  height: 60px;

  background-color: rgb(141, 172, 199);
  margin-bottom: 0;
}

h2 {
  text-align: left;
}

.add-task-block {
  background: aliceblue;
  margin-top: 0;
  padding: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
}

.wrapper {
  display: flex;
  align-items: flex-start;
}
input[type="text"] {
  min-height: 25px;
  min-width: 190px;
  border-radius: 5px;
}

button[type="submit"] {
  max-width: 100px;
  height: 30px;
  margin-left: 15px;
}

button[type="submit"].clear {
  margin-left: auto;
  color: red;
}
</style>
