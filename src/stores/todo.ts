import { defineStore } from "pinia"
import { v4 } from 'uuid'

// типы для стэйта и туду
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
    // асинхронный метод загрузки туду с внешнего API
    // и замены state.todo на результат запроса
    async loadTodos() {
      const response = await fetch('https://my-json-server.typicode.com/falk20/demo/todos')
      const json = await response.json()
      this.todo = json
    },
    // метод добавления нового туду в state.todo
    // создаем объект по типу Todo и методом push 
    // помещаем в конец массива
    addTodo(mes: string) {
      const newTodo = {
        active: false,
        id: v4(),
        text: mes
      }
      this.todo.push(newTodo)
    },
    // метод установки нового значения фильтра по 
    // переданному аргументу
    setFilter(category: Props['filter']) {
      this.filter = category
    },
    // метод удаления туду из state.todo путем
    // вызова метода массива filter, который 
    // возвращает все туду с отличным от аргумента id
    deleteTodo(id: Todo['id']) {
      this.todo = this.todo.filter(item => item.id !== id)
    }
  },
})
