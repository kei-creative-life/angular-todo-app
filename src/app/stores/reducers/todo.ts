import { TodoState } from '../../types/todo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TodoState[] = [];

export const todoReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getTodoLists: (state) => {
      return state;
    },
    addTodo: (state, action: PayloadAction<TodoState>) => {
      const newState = [...state, action.payload];
      return newState;
    },
    resetAllTodoList: () => {
      return [];
    },
  },
});

export const { getTodoLists, addTodo, resetAllTodoList } = todoReducer.actions;
export default todoReducer.reducer;
