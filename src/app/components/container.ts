import { Component } from '@angular/core';

@Component({
  selector: 'container',
  template: `<div class="container">
    <ng-content />
  </div>`,
})
export class ContainerComponent {}
