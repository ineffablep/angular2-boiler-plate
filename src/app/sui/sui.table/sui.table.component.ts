import { Component, Input } from '@angular/core';
import { ITableModel } from './sui.table.model';

@Component({
    selector: 'sui-table',
    templateUrl: './sui.table.component.html'
})
export class TableComponent {
    @Input() tableModel: ITableModel;
    listFilter: string;

    constructor() {
        
    }
    getTableStyles() {
        return this.tableModel.Style;
    }
    getTableClasses() {
        return this.tableModel.CssClass;
    }
    getColumns() {
        return this.tableModel.Columns;
    }
}