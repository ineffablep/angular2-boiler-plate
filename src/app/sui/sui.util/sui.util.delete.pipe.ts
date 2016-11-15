import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'delete'
})
export class DeletePipe implements PipeTransform {
    transform(items: any[], index: number) {
        if (index && items) {
            items.splice(index, 1);
        }
        return items;
    }
}
