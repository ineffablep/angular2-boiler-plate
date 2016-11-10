import { Component, Input, OnInit } from '@angular/core';
import { SortModel } from '../sui.util/sui.util.sort.model';
import { FilterModel } from '../sui.util/sui.util.filter.model';
import {
    ITableModel, IColumnModel, ISelectModel, SelectModel,
    EnumFieldType, EnumEditType
} from './sui.table.model';

@Component({
    selector: 'sui-table',
    templateUrl: './sui.table.component.html'
})
export class TableComponent implements OnInit {
    @Input() tableModel: ITableModel;
    filters: FilterModel[] = [];
    hiddenFields: string[] = [];
    sortModel: SortModel = new SortModel();
    sortedIcon: string = '';
    ngOnInit(): void {
        this.getColumns().forEach(y => {
            if (y.hidden)
             this.onColumnChooserClick(y);
        });
    }
    getData() {
        if (this.tableModel.data && this.tableModel.data.length) {
            return this.tableModel.data;
        } else if (this.tableModel.getUrl) {
            return []; // TODO: replace with http server request
        }
        return [];
    }
    onFilterChange(event: any, key: string) {
        let value = event.target.value;
        if (key === 'search') {
            this.filters = [];
            this.getColumns().forEach(y => {
                if (y.canFilter) {
                    let filter = new FilterModel();
                    filter.key = y.fieldName;
                    filter.filter = value;
                    this.filters.push(filter);
                }
            });
        } else {
            let filter = new FilterModel();
            let prop = this.filters.find(y => y.key === key);
            if (prop) {
                prop.filter = value;
            } else {
                filter.key = key;
                filter.filter = value;
                this.filters.push(filter);
            }
        }
    }
    getSelectList(column: IColumnModel) {
        let data: ISelectModel[] = [];
        data.push(new SelectModel());
        if (column.autoCreateSelectListFromData) {
            for (let item of this.tableModel.data) {
                let value = item[column.fieldName];
                let exist = data.find(y => y.value === value);
                if (exist === undefined) {
                    let select = new SelectModel();
                    select.key = value;
                    select.value = value;
                    data.push(select);
                }
            }
        } else {
            data = column.selectList;
        }
        return data;
    }

    onColumnChooserClick(column: IColumnModel) {
        if (!this.hiddenFields.includes(column.fieldName)) {
            this.hiddenFields.push(column.fieldName);
        } else {
          this.hiddenFields = this.hiddenFields.filter(y => y === column.fieldName);
        }
    }

    showColumnIcon(column: IColumnModel) {
        let exist = this.hiddenFields.find(y => y === column.fieldName);
        if (exist === undefined)
        return true;
    }
    onSortClick(column: IColumnModel) {
        if (column.canSort) {
            this.sortModel.key = column.fieldName;
            this.sortModel.descOrder = !this.sortModel.descOrder;
            if (this.sortModel.descOrder) {
                this.sortedIcon = this.tableModel.sortDescIcon;
            } else {
                this.sortedIcon = this.tableModel.sortAscIcon;
            }
        }
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
    trackByIndex(index: number, item: any) {
        return index;
    }
}
