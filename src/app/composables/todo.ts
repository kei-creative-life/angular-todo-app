import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoLists: { name: string }[] = [];
  inputValue: string = '';

  addTodoList() {
    if (this.inputValue === '') return;
    const newTodoLists = [...this.todoLists, { name: this.inputValue }];
    this.todoLists = newTodoLists;
  }

  resetAllTodoList() {
    this.todoLists = [];
  }

  resetInputValue() {
    this.inputValue = '';
  }

  handleInputChange(value: string) {
    this.inputValue = value;
  }
}
