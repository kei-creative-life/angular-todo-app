import { Component } from '@angular/core';

@Component({
  selector: 'container',
  template: `<div class="container p-4">
    <ng-content />
  </div>`,
})
export class ContainerComponent {}
