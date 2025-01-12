import { Component } from '@angular/core';
import { BaseButtonComponent } from '../components/ui/buttons/base-button';
import { InputFormComponent } from '../components/ui/forms/input-form';
import { TodoListsComponent } from '../components/pages/todo-lists';
@Component({
  selector: 'top',
  template: `
    <h1 class="text-2xl font-bold text-red-500 mb-4">{{ title }}</h1>
    <div class="flex gap-4 items-center">
      <input-form
        label="タスク"
        placeholder="タスクを入力してください"
        [value]="inputValue"
        (valueChange)="handleInputChange($event)"
      />
      <base-button (click)="addTodoList()" label="追加" class="bg-blue-500" />
      <base-button
        (click)="resetInputValue()"
        label="フォームの内容をリセット"
        class="bg-red-500"
      />
      <base-button
        (click)="resetAllTodoList()"
        label="全タスクを削除"
        class="bg-red-500"
      />
    </div>
    <div class="p-2">
      <todo-lists [todoLists]="todoLists" />
    </div>
  `,
  imports: [BaseButtonComponent, InputFormComponent, TodoListsComponent],
})
export class TopComponent {
  title = 'TODO App';
  inputValue: string = '';
  todoLists: { name: string }[] = [];

  addTodoList() {
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
