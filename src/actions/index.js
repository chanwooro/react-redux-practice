let todoId = 0;

export const addTodo = (text) => ({
  type: 'ADD',
  id: todoId++,
  text
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_LIST',
  id
});

export const setFilter = (filter) => ({
  type: 'SET_CURRENT_FILTER',
  filter
});