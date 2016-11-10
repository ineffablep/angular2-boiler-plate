import { PipeTransform, Pipe } from '@angular/core';
import { IColumnModel } from '../sui.table/sui.table.model';

@Pipe({
    name: 'visible'
})
export class VisibleFilter implements PipeTransform {
     transform(items: IColumnModel[], hiddenFields: string[]): any {
         return items.filter(item => {
            return !hiddenFields.includes(item.fieldName);
        });
    }
}
