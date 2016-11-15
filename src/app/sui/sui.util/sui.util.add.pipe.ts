import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'add'
})
export class AddPipe implements PipeTransform {
    transform(items: any[], item: any) {
        if (item && items)
         items.push(item);
        return items;
    }
}
