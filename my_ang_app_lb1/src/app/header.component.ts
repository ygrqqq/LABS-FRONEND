import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <h1 class="text-3xl font-bold">
        {{ projectTitle }}
      </h1>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  projectTitle: string = 'Мій Новий Angular Проєкт';
}

