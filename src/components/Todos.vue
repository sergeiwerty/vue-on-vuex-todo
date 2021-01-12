<template>
  <div>
    <div v-for="todo in allTodos" :key="todo.id" class="todos">
      <!-- <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo">
        {{ todo.title }}
      </div> -->
      <Todoitem :todo="todo" />
      <!-- <Todoitem />
      <Todoitem /> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { mapGetters, mapActions } from "vuex";
import Todoitem from "./Todoitem";

export default {
  name: "Todos",
  // computed: mapGetters(["allTodos"]),
  components: {
    Todoitem,
  },
  computed: {
    ...mapGetters(["allTodos"]),
  },
};
</script>

<style scoped>
.todos {
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: auto;
  background-color: aliceblue;
}

.todo {
  padding: 2em;
  border-radius: 7px;
  border: 1px solid #7294b2;
}
</style>
