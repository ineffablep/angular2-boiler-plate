import { Component, Input } from '@angular/core';
import {
    ITableModel, IColumnModel,
    EnumFieldType, EnumEditType, EnumSortDirection
} from './sui.table.model';

@Component({
    selector: 'sui-table',
    templateUrl: './sui.table.component.html'
})
export class TableComponent {
    @Input() tableModel: ITableModel;
    listFilter: string;
    sortType: string= '';
    sortReverse: false;
    constructor() {

    }
    getData() {
        if (this.tableModel.data && this.tableModel.data.length) {
            return this.tableModel.data;
        } else if (this.tableModel.getUrl) {
            return []; // TODO: replace with http server request
        }
        return [];
    }
    getTableStyles() {
        return this.tableModel.style;
    }
    getTableClasses() {
        return this.tableModel.cssClass;
    }
    getColumns() {
        return this.tableModel.columns;
    }
}
