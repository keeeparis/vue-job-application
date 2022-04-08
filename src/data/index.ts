// тип для массива категорий
interface categoryType {
    id: 'all' | 'active' | 'completed',
    name: string
}

// массив категорий
const categories: categoryType[] = [
    {
        id: 'all',
        name: 'All'
    },
    {
        id: 'active',
        name: 'Active'
    },
    {
        id: 'completed',
        name: 'Completed'
    },

]

export default categories