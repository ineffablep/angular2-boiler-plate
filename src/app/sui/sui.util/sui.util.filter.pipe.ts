
import { PipeTransform, Pipe } from '@angular/core';
import { FilterModel } from './sui.util.filter.model';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filters: FilterModel[], orCondition: boolean = false): any {
        if (filters && filters.length) {
            if (!orCondition) {
                for (let filter of filters) {
                    items = items.filter(item => {
                        return contains(item[filter.key], filter.filter);
                    });
                }
            } else {
                let res: any[] = [];
                for (let item of items) {
                    for (let filter of filters) {
                        if (contains(item[filter.key], filter.filter))
                            res.push(item);
                    }
                }
                return res;
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

