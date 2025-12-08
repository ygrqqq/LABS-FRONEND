import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Andre'];

  constructor() { }

  getData(): string[] {
    return this.data;
  }
}