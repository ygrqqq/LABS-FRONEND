import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    MainContentComponent 
  ],

})
export class AppComponent {}