export interface categoryType {
    id: 'all' | 'active' | 'completed',
    name: string
}

export const categories: categoryType[] = [
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