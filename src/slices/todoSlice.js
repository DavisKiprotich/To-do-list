import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  // getting todo list
  const localTodoList = window.localStorage.getItem('todoList');
  // if todo list is not empty
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem('todoList', JSON.stringify([]));
  return [];
};

const initialValue = {
  todoList: getInitialTodo(),
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payLoad);
      const todoList = window.localStorage.getItem('todoList');
      if(todoList){
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payLoad,
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr))
      }
    }
  }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
