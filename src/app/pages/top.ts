import { Component, inject } from '@angular/core';
import { BaseButtonComponent } from '../components/ui/buttons/base-button';
import { InputFormComponent } from '../components/ui/forms/input-form';
import { TodoListsComponent } from '../components/pages/todo-lists';
import { TodoService } from '../composables/todo';
import { injectAppSelector } from '../stores';
@Component({
  selector: 'top',
  template: `
    <h1 class="text-2xl font-bold text-red-500 mb-4">{{ title }}</h1>
    <!-- TODO: コンポーネント化する -->
    <div class="flex gap-4 items-center">
      <input-form
        label="タスク"
        placeholder="タスクを入力してください"
        [value]="todoService.inputValue"
        (valueChange)="todoService.handleInputChange($event)"
      />
      <base-button
        (click)="todoService.addTodoList()"
        label="追加"
        class="bg-blue-500"
      />
      <base-button
        (click)="todoService.resetInputValue()"
        label="フォームの内容をリセット"
        class="bg-red-500"
      />
      <base-button
        (click)="todoService.resetAllTodoList()"
        label="全タスクを削除"
        class="bg-red-500"
      />
    </div>
    <div class="p-2">
      <todo-lists [todoLists]="todoLists()" />
    </div>
  `,
  imports: [BaseButtonComponent, InputFormComponent, TodoListsComponent],
})
export class TopComponent {
  title = 'TODO App';
  todoService = inject(TodoService);
  todoLists = injectAppSelector((state) => state.todo);

  constructor() {
    console.log(this.todoLists());
  }
}
