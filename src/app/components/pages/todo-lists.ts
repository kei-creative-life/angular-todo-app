import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-lists',
  template: `
    <ul class="flex flex-col gap-1 list-disc px-4">
      @for (todo of todoLists; track todo.name) {
      <li>
        {{ todo.name }}
      </li>
      }
    </ul>
  `,
})
export class TodoListsComponent {
  @Input() todoLists: { name: string }[] = [];
}
