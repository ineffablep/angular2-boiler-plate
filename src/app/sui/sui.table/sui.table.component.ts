import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FilterModel, FilterKeyValue } from '../sui.util/sui.util.filter.model';
import {
    TableModel, ColumnModel, ISelectModel, SelectModel,
    EnumFieldType, EnumEditType
} from './sui.table.model';
import { SuiHttpService } from '../sui.util/sui.util.httpService';
import { FormBase, DropdownField, TextboxField } from '../sui.util/sui.util.formBase';
import { AlertType } from '../sui.alert/sui.alert.component';

@Component({
    selector: 'sui-table',
    templateUrl: './sui.table.component.html',
    providers: [SuiHttpService]
})
export class TableComponent implements OnInit {
    @Input() tableModel: TableModel;

    @Output() updateRecord: EventEmitter<any> = new EventEmitter<any>();
    @Output() addRecord: EventEmitter<any> = new EventEmitter<any>();
    @Output() deleteRecord: EventEmitter<any> = new EventEmitter<any>();

    filters: FilterModel = new FilterModel();
    hiddenFields: string[] = [];
    sortKey: string;
    descOrder: boolean;
    sortedIcon: string = '';
    currentPage: number;
    pageSize: number;
    totalPageCount: number;
    filterOrCondition: boolean;
    showDialog: boolean = false;
    fields: FormBase[] = [];
    deleteConfirmMessage: string = 'Are you Sure, You want to delete record?';
    confirmDelete: boolean = false;
    showForm: boolean = false;
    showTable: boolean = true;
    deleteRow?: any;
    isEditRow: boolean = false;
    isAddRow: boolean = false;
    errorMessage: string = '';
    modalHeaderText: string = '';
    deleteIndex?: number;
    tableData: any[];
    rowToAdd: any;
     alertType: AlertType = AlertType.error;
    constructor(private suiHttpService: SuiHttpService) { }


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
        if (data) {
            let noOfPages = data.length / this.pageSize;
            this.totalPageCount = noOfPages;
            let pageNumbers: any = [];
            let i = 1;
            while (i <= noOfPages) {
                pageNumbers.push(i++);
            }
            return pageNumbers;
        }
    }

    getData() {
        if (this.tableModel.data && this.tableModel.data.length) {
            this.tableData = this.tableModel.data;
        } else if (this.tableModel.getUrl) {
            this.suiHttpService.get(this.tableModel.getUrl, false).subscribe(data => {
                this.tableData = data;
            }, error => this.errorMessage = <any>error);
        }
        return this.tableData;
    }

    onpageSizeChange(event: any) {
        this.pageSize = event.target.value;
        this.getPages();
    }

    onEditRow(row: any) {
        this.setFormFields(row);
        if (row) {
            this.isEditRow = true;
            this.modalHeaderText = 'Edit record';
        } else {
            this.isAddRow = true;
            this.modalHeaderText = 'Add new record';
        }
        if (this.tableModel.editType === 2) {
            this.showDialog = !this.showDialog;
        } else if (this.tableModel.editType === 3) {
            this.showTable = false;
            this.showForm = true;
        }
    }

    onDeleteRow(row: any) {
        this.deleteRow = row;
        this.confirmDelete = !this.confirmDelete;

    }

    deleteRowFromTable(row: any) {
        let id = this.getIdentityValue(row);
        let identityField = this.getIdentityField();
        this.deleteIndex = this.tableData.findIndex(y => {
            return y[identityField.fieldName] === id;
        });
    }

    updateTableRow(row: any) {
        let id = this.getIdentityValue(row);
        let identityField = this.getIdentityField();
        if (id) {
            let rowToUpdate = this.tableData.find(y => {
                return y[identityField.fieldName] === id;
            });
            if (rowToUpdate) {
                this.tableModel.columns.forEach(col => {
                    rowToUpdate[col.fieldName] = row[col.fieldName];
                });
            }
        }
    }

    saveForm(object: any) {
        let val = JSON.stringify(object);
        this.showTable = true;
        this.showForm = false;
        this.showDialog = false;
        if (typeof object === 'boolean' && !object) {
        } else {
            if (this.isEditRow) {
                if (!this.tableModel.updateUrl) {
                    this.updateTableRow(object);
                    this.updateRecord.emit(object);
                } else {
                    let url = this.tableModel.updateUrl;
                    this.suiHttpService.update(object, url).subscribe(res => {
                        this.updateTableRow(res);
                    }, error => this.errorMessage = <any>error);
                }

            } else if (this.isAddRow) {
                if (!this.tableModel.addUrl) {
                    this.rowToAdd = object;
                    this.addRecord.emit(object);
                } else {
                    this.suiHttpService.add(object, this.tableModel.addUrl)
                        .subscribe(obj => this.tableData.push(obj),
                        error => this.errorMessage = <any>error);
                }

            }
        }
    }

    deleteResponse(response: boolean) {
        this.confirmDelete = !this.confirmDelete;
        if (response) {
            let id = this.getIdentityValue(this.deleteRow);

            if (this.tableModel.deleteUrl) {
                this.suiHttpService.delete(id).subscribe(res => {
                    this.deleteRowFromTable(this.deleteRow);
                }, error => this.errorMessage = <any>error);
            } else {
                this.deleteRecord.emit(this.deleteRow);
                this.deleteRowFromTable(this.deleteRow);
            }
        }
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
        let filterModel = new FilterModel();
        if (key === 'search') {
            let keyValues: FilterKeyValue[] = [];
            this.getColumns().forEach(y => {
                if (y.canFilter) {
                    let filter = new FilterKeyValue();
                    filter.key = y.fieldName;
                    filter.value = value;
                    keyValues.push(filter);
                }
            });
            filterModel.keyValues = keyValues;
            filterModel.orCondition = true;
        } else {

            let prop = this.filters.keyValues.find(y => y.key === key);
            if (prop) {
                prop.value = value;
            } else {
                prop = new FilterKeyValue();
                prop.key = key;
                prop.value = value;
                this.filters.keyValues.push(prop);
            }
            filterModel.keyValues = this.filters.keyValues;
            filterModel.orCondition = false;
        }
        this.filters = filterModel;

    }

    getSelectList(column: ColumnModel) {
        let data: ISelectModel[] = [];
        let opt = new SelectModel();
        opt.key = '';
        opt.value = '';
        data.push(opt);
        if (column.autoCreateSelectListFromData) {
            for (let item of this.tableData) {
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

    onColumnChooserClick(column: ColumnModel) {
        if (!this.hiddenFields.includes(column.fieldName)) {
            this.hiddenFields.push(column.fieldName);
        } else {
            this.hiddenFields = this.hiddenFields.filter(y => y === column.fieldName);
        }
    }

    showColumnIcon(column: ColumnModel) {
        let exist = this.hiddenFields.find(y => y === column.fieldName);
        if (exist === undefined)
            return true;
    }

    onSortClick(column: ColumnModel) {
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

    getIdentityField() {
        let columns = this.getColumns();
        let res = columns.filter(y => y.identityField);
        if (res && res.length) {
            return res[0];
        }
        return null;
    }


    getIdentityValue(row: any) {
        let ideityField = this.getIdentityField();
        if (ideityField) {
            return row[ideityField.fieldName];
        }
        return null;
    }

    setFormFields(row: any) {
        let order = 1;
        this.fields = [];
        this.tableModel.columns.forEach(y => {

            let val = row ? row[y.fieldName] : '';
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
                    disabled: y.fieldName === '_id' || !y.canEdit || y.identityField,
                    readonly: y.fieldName === '_id' || !y.canEdit || y.identityField,
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
                        disabled: y.fieldName === '_id' || !y.canEdit || y.identityField,
                        readonly: y.fieldName === '_id' || !y.canEdit || y.identityField,
                        placeholder: y.displayName,
                        order: order
                    }),
                );
                order = order + 1;
            }

        });
    }
}
