import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByField',
  standalone: true,
  pure: false
})
export class FilterByFieldPipe implements PipeTransform {

  transform(items: any[], field: string, search: string): any[] {
    if (!items || !field) {
      return items;
    }

    if (!search) {
      return items;
    }

    const term = search.toLowerCase();

    return items.filter(item => {
      const value = item[field];
      if (value == null) return false;
      return String(value).toLowerCase().includes(term);
    });
  }
}
