import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContentComponent {}

