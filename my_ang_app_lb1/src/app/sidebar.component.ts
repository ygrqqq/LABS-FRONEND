import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <aside>
      <h2>Навігація</h2>
      <nav>
        <ul>
          <li><a href="#">Головна</a></li>
          <li><a href="#">Про нас</a></li>
          <li><a href="#">Послуги</a></li>
          <li><a href="#">Контакти</a></li>
        </ul>
      </nav>
    </aside>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {}

