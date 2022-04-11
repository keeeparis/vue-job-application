import { defineStore } from "pinia"
import { v4 } from 'uuid'

interface Props {
  todo: Todo[],
  filter: 'all' | 'active' | 'completed'
}

export type Todo = {
  active: boolean,
  id: number | string,
  text: string
}

export const useTodoStore = defineStore({
  id: "todo",
  state: (): Props => ({
    todo: [],
    filter: 'all'
  }),
  actions: {
    async loadTodos() {
      const response = await fetch('https://my-json-server.typicode.com/falk20/demo/todos')
      const json = await response.json()
      this.todo = json
    },
    addTodo(mes: string) {
      const newTodo = {
        active: true,
        id: v4(),
        text: mes
      }
      this.todo.push(newTodo)
    },
    setFilter(category: Props['filter']) {
      this.filter = category
    },
    deleteTodo(id: Todo['id']) {
      this.todo = this.todo.filter(item => item.id !== id)
    }
  },
})
