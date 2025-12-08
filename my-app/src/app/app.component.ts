import { Component, OnInit } from '@angular/core';
import { AppLogicService } from './services/app-logic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: string[] = [];

  constructor(private appLogic: AppLogicService) {}

  ngOnInit(): void {
    this.processData();
  }

  processData(): void {
    console.log('Component: Запит до AppLogicService...');
    this.items = this.appLogic.getDataAndLog();
  }
}