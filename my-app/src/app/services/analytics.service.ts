import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  logEvent(event: string): void {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[Analytics - ${timestamp}]: ${event}`);
  }
}