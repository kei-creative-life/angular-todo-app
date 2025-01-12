import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseButtonComponent } from './components/buttons/base-button';
import { ContainerComponent } from './components/container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BaseButtonComponent, ContainerComponent],
  template: `
    <main class="main">
      <container>
        <h1 class="text-2xl font-bold text-red-500">{{ title }}</h1>
        <base-button (click)="onClick()" label="削除" />
        <router-outlet />
      </container>
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TODO App';

  onClick() {
    console.log('Button clicked');
  }
}
