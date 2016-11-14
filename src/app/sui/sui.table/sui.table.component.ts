import { Component, Input, OnInit } from '@angular/core';
import { FilterModel } from '../sui.util/sui.util.filter.model';
import { FormBase, TextboxField, DropdownField } from '../sui.form/sui.form.component';
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
    sortKey: string;
    descOrder: boolean;
    sortedIcon: string = '';
    currentPage: number;
    pageSize: number;
    totalPageCount: number;
    filterOrCondition: boolean = false;
    showDialog: boolean = false;
    fields: FormBase[] = [];

    ngOnInit(): void {
        this.getColumns().forEach(y => {
            if (y.hidden)
                this.onColumnChooserClick(y);
        });
        this.currentPage = this.tableModel.pagination.currentPage;
        this.pageSize = this.tableModel.pagination.pageSize;
        this.getPages();
    }
    getType(field: EnumFieldType): string {
        return EnumFieldType[field];
    }
    getPages() {
        let data = this.getData();
        let pageSize = this.tableModel.pagination.pageSize;
        let noOfPages = data.length / pageSize;
        this.totalPageCount = noOfPages;
        let pageNumbers: any = [];
        let i = 1;
        while (i <= noOfPages) {
            pageNumbers.push(i++);
        }
        return pageNumbers;
    }
    getData() {
        if (this.tableModel.data && this.tableModel.data.length) {
            return this.tableModel.data;
        } else if (this.tableModel.getUrl) {
            return []; // TODO: replace with http server request
        }
        return [];
    }

    onEditRow(row: any) {
        this.setFormFields(row);
        this.showDialog = !this.showDialog;
    }
    onDeleteRow(row: any) {

    }
    saveForm(object: any) {

    }
    onPageClick(item: number) {
        if (item === 0) {
            this.currentPage = 1;
        } else if (item > this.totalPageCount) {
            this.currentPage = this.totalPageCount;
        } else {
            this.currentPage = item;
        }
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
            this.filterOrCondition = true;
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
            this.filterOrCondition = false;
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
            this.sortKey = column.fieldName;
            this.descOrder = !this.descOrder;
            if (this.descOrder) {
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

    setFormFields(row: any) {
        let order = 1;
        this.fields = [];
        this.tableModel.columns.forEach(y => {
            if (y.fieldName !== '_id' && y.fieldName !== 'index' && y.canEdit) {
                let val = row[y.fieldName];
                let fieldType = this.getType(y.fieldType);
                if (fieldType === 'select') {
                    let selectList = this.getSelectList(y);
                    let options: any[] = [];
                    selectList.forEach(z => {
                        options.push({ key: z.key, value: z.value });
                    });
                    this.fields.push(new DropdownField({
                        key: y.fieldName,
                        label: y.displayName,
                        options: options,
                        value: val,
                        order: order
                    }));
                } else {
                    this.fields.push(
                        new TextboxField({
                            key: y.fieldName,
                            label: y.displayName,
                            type: fieldType,
                            required: y.required,
                            value: val,
                            placeholder: y.displayName,
                            order: order
                        }),
                    );
                    order = order + 1;
                }
            }
        });
    }
}
