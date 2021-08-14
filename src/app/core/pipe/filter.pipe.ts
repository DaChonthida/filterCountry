import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(list: any[], search: string): any {
    return list.filter((val: any) =>
      val.name
        .toString()
        .toLowerCase()
        .includes(search?.trim().toString().toLowerCase() || '')
    );
  }
}
