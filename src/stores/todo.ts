import { defineStore } from "pinia"
import { v4 } from 'uuid'

interface Props {
  todo: Todo[],
  filter: string
}

type Todo = {
  active: boolean,
  id: number | string,
  text: string
}

export const useTodoStore = defineStore({
  id: "todo",
  state: (): Props => ({
    todo: [],
    filter: ''
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
    }
  },
})
