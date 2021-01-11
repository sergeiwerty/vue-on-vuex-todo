<template>
  <div class="task-item" v-bind:class="{ 'is-complete': todo.completed }">
    <p>
      <input type="checkbox" v-on:change="markComplete" />
      {{ todo.title }}
      <button @click="$emit('del-todo', todo.id)" v-on:change="delTask">
        X
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Todoitem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
  },
};
</script>

<style scoped>
.task-item {
  background: aliceblue;
  padding: 10px;
  border-bottom: 1px sandybrown dashed;
}

.is-complete {
  text-decoration: line-through;
}

.delete {
  display: none;
}
</style>
