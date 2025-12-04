import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [UserProfileComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContentComponent {}