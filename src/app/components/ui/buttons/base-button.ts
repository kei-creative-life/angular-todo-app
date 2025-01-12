import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-button',
  standalone: true,
  template: `<button
    (click)="onClick()"
    class="text-white px-4 py-2 rounded-md"
  >
    {{ label }}
  </button>`,
})
export class BaseButtonComponent {
  @Input() label: string = '';
  @Input() onClick: () => void = () => {};
  @Input() classes: string = '';
}
