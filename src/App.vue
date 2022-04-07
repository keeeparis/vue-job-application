<script setup lang="ts">
import { computed, reactive, onMounted, ref } from 'vue'
import { useTodoStore } from './stores/todo';

const store = useTodoStore()
const message = ref('')

const handleSumbit = () => {
  store.addTodo(message.value)
  message.value = ''
}

onMounted(() => {
  store.loadTodos()
})

</script>

<template>
  <main>
    <input v-model="message" placeholder="type todo..." />
    <button @click="handleSumbit">Add</button>
    <div v-for="(todo, index) in store.todo">
      {{ index + 1 }}
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
