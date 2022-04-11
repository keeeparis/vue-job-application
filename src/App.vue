<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useTodoStore, type Todo } from './stores/todo'
import TodoList from './components/TodoList.vue'
import Filters from './components/Filters.vue'
import type { categoryType } from './data'

const store = useTodoStore()

const message = ref('')

const handleSumbit = () => {
  if (message.value) {
    store.addTodo(message.value)
    message.value = ''
  }
}

const handleDelete = (id: Todo['id']) => {
  store.deleteTodo(id)
}

const handleSetFilter = (id: categoryType['id']) => {
  store.setFilter(id)
}

const items = computed(() => {
  return store.todo.filter((item) => {
    switch (store.filter) {
      case 'active':
        return item.active;
      case 'completed':
        return !item.active;
      default:
        return true
    }
  })
})

onMounted(() => {
  store.loadTodos()
})
</script>

<template>
  <main>
    <input 
      v-model="message" 
      placeholder="type todo..." 
      class="input" 
    />
    <button @click="handleSumbit" class="add-button">Add</button>

    <Filters 
      @set-filter="handleSetFilter"
    />
    
    <TodoList 
      :todos="items"
      @delete-todo="handleDelete"
    />
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 100px auto 0;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  font-weight: normal;
}

.input {
  padding: 16px 24px;
}

button {
  padding: 16px;
  cursor: pointer;
}

.add-button {
  margin-left: 10px;
}

</style>
