<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useTodoStore } from './stores/todo'
import TodoList from './components/TodoList.vue'
import Filters from './components/Filters.vue'

// вызываем инстанс стора для извлечения 
// списка туду и фильтра
const store = useTodoStore()
// создаем реф для инпута
const message = ref('')

// функция обработка сабмита. Если инпут не пустой,
// то вызываем метод стора для создания туду,
// меняем значение инпута на пустую строку
const handleSumbit = () => {
  if (message.value) {
    store.addTodo(message.value)
    message.value = ''
  }
}

// создаем мемоизированную копию списка туду
// отсортированного по значению фильтра
const items = computed(() => {
  return store.todo.filter((item) => {
    switch (store.filter) {
      case 'active':
        return !item.active;
      case 'completed':
        return item.active;
      default:
        return true
    }
  })
})

// на маунт компонента вызываем метод стора
// по загрузке туду с нашего API
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

    <!-- Фильтры -->
    <Filters />
    
    <!-- Список Туду -->
    <TodoList 
      :todos="items"
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
