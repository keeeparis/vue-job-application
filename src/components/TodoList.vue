<script setup lang="ts">
import type { Todo } from '@/stores/todo'

defineProps<{
  todos: Todo[]
}>()
defineEmits<{
  (e: 'deleteTodo', id: Todo['id']): void
}>()

</script>

<template>
  <div class="container">
    <div 
      v-for="(todo, index) in todos"
      :key="todo.id"
      class="item" 
      :class="{ active: todo.active }"
    >
      <input 
        type="checkbox" 
        class="checkbox"
        v-model="todo.active"
        :true-value="false"
        :false-value="true"
      >
      <p class="index">{{ index + 1 }}.</p>
      <p class="text">{{ todo.text }}</p>
      <button
        @click="$emit('deleteTodo', todo.id)"
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

.item p {
  text-decoration: line-through;
}

.item.active p {
  text-decoration: none;
}

.checkbox {
  margin-right: 10px;
}

.close-button {
  padding: 4px 8px;
}
</style> 