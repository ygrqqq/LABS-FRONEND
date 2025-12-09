import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { FilterByFieldPipe } from './pipes/filter-by-field.pipe';

interface Item {
  id: number;
  name: string;
  category: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    FilterByFieldPipe
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm: string = '';

  // 🔹 назва нового елемента, яку вводить користувач
  newItemName: string = '';

  items: Item[] = [
    { id: 1, name: 'Apple',  category: 'Fruit' },
    { id: 2, name: 'Orange', category: 'Fruit' },
    { id: 3, name: 'Carrot', category: 'Vegetable' },
    { id: 4, name: 'Potato', category: 'Vegetable' },
  ];

  addItem() {
    const name = this.newItemName.trim();
    if (!name) {
      return; // можна замість цього показати alert, якщо хочеш
    }

    const nextId = this.items.length + 1;

    this.items.push({
      id: nextId,
      name: name, // ✅ використовується те, що ввів користувач
      category: nextId % 2 === 0 ? 'Fruit' : 'Vegetable'
    });

    // очистити поле після додавання
    this.newItemName = '';
  }
}
