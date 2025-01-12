import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-form',
  template: `
    <label [for]="labelId">
      {{ labelText }}
      <input
        class="border border-gray-300 rounded-md p-2 w-60"
        type="text"
        [placeholder]="placeholder"
        [(ngModel)]="inputValue"
        (ngModelChange)="onInputChange($event)"
      />
    </label>
  `,
  imports: [FormsModule],
})
export class InputFormComponent {
  @Input() labelId: string = '';
  @Input() labelText: string = '';
  @Input() placeholder: string = '';
  @Input() set value(val: string) {
    this.inputValue = val;
  }

  @Output() valueChange = new EventEmitter<string>();

  inputValue: string = '';

  onInputChange(value: string) {
    this.valueChange.emit(value);
  }
}
