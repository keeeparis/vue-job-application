<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';
import categories from '../data'

// вызываем инстанс стора, чтобы забрать метод setFilter
const store = useTodoStore()
</script>

<template>
  <div class="filters">
    <!-- итерируем по массиву категорий -->
    <div
      v-for="filter in categories" 
      :key="filter.id"
    >
      <!-- рендерим кнопку с он-кликом на метод выше -->
      <button 
        :class="{ active: filter.id === store.filter }"
        @click="store.setFilter(filter.id)"
      >
        {{ filter.name }}
      </button>
    </div>
  </div>
</template>

<style>
.filters {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}

button.active {
  background-color: aqua;
  border-radius: 999px;
}
</style>