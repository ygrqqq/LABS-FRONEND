export enum UserStatus {
  Active = 'Активний',
  Inactive = 'Неактивний',
  Pending = 'В очікуванні'
}

export interface User {
  id: number;
  name: string;
  status: UserStatus;
  address: {
    city: string;
    street: string;
  };
  hobbies: string[];
}