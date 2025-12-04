import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserStatus } from '../user.model';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user: User = {
    id: 101,
    name: 'Олена Петренко',
    status: UserStatus.Inactive,
    address: {
      city: 'Київ',
      street: 'вул. Хрещатик, 25'
    },
    hobbies: ['Фотографія', 'Подорожі', 'Йога', 'Читання']
  };

  eUserStatus = UserStatus;

  getHobbiesCount(): number {
    return this.user.hobbies.length;
  }
}