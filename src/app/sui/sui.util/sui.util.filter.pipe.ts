
import { PipeTransform, Pipe } from '@angular/core';
import { FilterModel } from './sui.util.filter.model';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filters: FilterModel[]): any {
        if (filters && filters.length) {
            for (let filter of filters) {
                items = items.filter(item => {
                    return contains(item[filter.key], filter.filter);
                });
            }
        }
        return items;
    }
}

export function contains(val: Object, search: Object) {
    if (!search)
        return true;
    if (typeof val === 'string') {
        if (val.toLowerCase().includes(search.toString().toLowerCase())) {
            return true;
        }
    } else if (typeof val === 'number') {
       return Number(val) === Number(search);
    } else if (typeof val === 'boolean') {
       return val.toString() === search.toString();
    }
}

