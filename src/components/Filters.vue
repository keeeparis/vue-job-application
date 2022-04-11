<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
import { categories, type categoryType } from '../data/index'

defineEmits<{
  (e: 'setFilter', id: categoryType['id']): void
}>()

const store = useTodoStore()
</script>

<template>
  <div class="filters">
    <div
      v-for="filter in categories" 
      :key="filter.id"
    >
      <button 
        :class="{ active: filter.id === store.filter }"
        @click="$emit('setFilter', filter.id)"
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