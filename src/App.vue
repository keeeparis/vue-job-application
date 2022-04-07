<script setup lang="ts">
import { computed, reactive, onMounted } from 'vue'
import { useTodoStore } from './stores/todo';

const store = useTodoStore()

onMounted(() => {
  store.loadTodos()
})

</script>

<template>
  <main>
    <div v-for="todo in store.todo">
      {{ todo.id }}
      {{ todo.text }}
      {{ todo.active }}
    </div>
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
