import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByField',
  pure: true
})
export class FilterByFieldPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) return [];
    if (!value) return items;

    return items.filter(item => {
      return item[field] && item[field].toString().toLowerCase().includes(value.toLowerCase());
    });
  }
}