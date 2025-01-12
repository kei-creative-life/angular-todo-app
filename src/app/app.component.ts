import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/projects/container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContainerComponent],
  template: `
    <main>
      <container>
        <router-outlet />
      </container>
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
