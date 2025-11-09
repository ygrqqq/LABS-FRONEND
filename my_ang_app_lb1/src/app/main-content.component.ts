import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: true,
  template: `
    <main>
      <h2>Основний Контент</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContentComponent {}

