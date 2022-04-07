<script setup lang="ts">
import { computed, reactive, onMounted, ref } from 'vue'
import { useTodoStore } from './stores/todo';

const store = useTodoStore()
const message = ref('')

const handleSumbit = () => {
  if (message.value) {
    store.addTodo(message.value)
    message.value = ''
  }
}

onMounted(() => {
  store.loadTodos()
})

</script>

<template>
  <main>
    <input v-model="message" placeholder="type todo..." />
    <button @click="handleSumbit">Add</button>
    <div class="filters">
      <button @click="store.setFilter('all')">All</button>
      <button @click="store.setFilter('active')">Active</button>
      <button @click="store.setFilter('completed')">Finished</button>
    </div>
    <div class="container">
      <div v-if="store.filter === 'all'">
        <div 
          v-for="(todo, index) in store.todo" 
          class="item"
          :class="{ active: todo.active }"
          :key="todo.id"
        >
          <p class="index">{{ index + 1 }}</p>
          <p class="text">{{ todo.text }}</p>
          <input type="checkbox" v-model="todo.active">
        </div>
      </div>

      <div v-if="store.filter === 'active'">
        <div 
          v-for="(todo, index) in store.todo"
          class="item"
          :class="{ active: todo.active }"
          :key="todo.id"
        >
          <div v-if="!todo.active" class="item">
            <p class="index">{{ index + 1 }}</p>
            <p class="text">{{ todo.text }}</p>
            <input type="checkbox" v-model="todo.active">
          </div>
        </div>
      </div>

      <div v-if="store.filter === 'completed'">
        <div 
          v-for="(todo, index) in store.todo"
          class="item"
          :class="{ active: todo.active }"
          :key="todo.id"
        >
          <div v-if="todo.active" class="item">
            <p class="index">{{ index + 1 }}</p>
            <p class="text">{{ todo.text }}</p>
            <input type="checkbox" v-model="todo.active">
          </div>
        </div>
      </div>

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

.filter {
  display: flex;
}

.container {
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  align-items: center;
}

.index {
  flex-basis: 20px;
}

.text {
  flex-basis: 100px;
}

.item.active p {
  text-decoration: line-through;
}
</style>
