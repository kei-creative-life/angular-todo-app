import { Injectable } from '@angular/core';
import { addTodo, resetAllTodoList } from '../stores/reducers/todo';
import { store } from '../stores';
import { TodoState } from '../types/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoLists: TodoState[] = [];
  inputValue: string = '';

  addTodoList() {
    if (this.inputValue === '') return;
    store.dispatch(addTodo({ name: this.inputValue }));
    this.inputValue = '';
  }

  resetAllTodoList() {
    store.dispatch(resetAllTodoList());
  }

  resetInputValue() {
    this.inputValue = '';
  }

  handleInputChange(value: string) {
    this.inputValue = value;
  }
}
