import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'orderBy'
})
export  class OrderByPipe implements PipeTransform {
    transform(items: any, key: string): any {
        return sortArray(items, key);
    }
}

export function sortArray<T>(items: Array<T>, key: string, desc: boolean = true): Array<T> {
    if (!items || items.length < 2) return items;
    let len = items.length, array: T[];
    if (len > 65536) {
        array = new Array(len);
    } else {
        array = [];
        array.length = len;
    }
    for (let i = 0; i < len; i++) {
        array[i] = items[i];
    }
    return array.sort(function (a, b) {
        let x = a[key];
        let y = b[key];

        if (typeof x === 'string') {
            x = x.toLowerCase();
        }
        if (typeof y === 'string') {
            y = y.toLowerCase();
        }
        if (desc)
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });


}
