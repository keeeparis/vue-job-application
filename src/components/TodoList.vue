<script setup lang="ts">
import { useTodoStore, type Todo } from '@/stores/todo'

// определяем пропсы
defineProps<{
  todos: Todo[]
}>()

// вызываем инстанс стора, чтобы забрать метод deleteTodo
const store = useTodoStore()
</script>

<template>
  <div class="container">
    <!-- итерируем по туду -->
    <div 
      v-for="(todo, index) in todos"
      :key="todo.id"
      class="item" 
      :class="{ active: todo.active }"
    >
      <!-- чекбокс меняет свойство active у туду -->
      <input 
        type="checkbox" 
        class="checkbox" 
        v-model="todo.active"
      >
      <p class="index">{{ index + 1 }}.</p>
      <p class="text">{{ todo.text }}</p>
      <!-- на клик вызываем метод выше с id туду-->
      <button 
        @click="store.deleteTodo(todo.id)" 
        class="close-button"
      >
        x
      </button>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
}

.item {
  display: flex;
  align-items: center;
  color: var(--color-text);
  padding-bottom: 5px;
}

.index {
  flex-basis: 25px;
}

.text {
  flex: 1 0 150px;
  font-size: 1.1em;
}

.item.active p {
  text-decoration: line-through;
}

.checkbox {
  margin-right: 10px;
}

.close-button {
  padding: 4px 8px;
}
</style> 