export enum EnumFieldType {
    String, Number, Date, DateTime, Boolean, Select, Currency, Image , Email , Phone
}
export enum EnumEditType {
    RowEdit, CellEdit, DialogEdit, FormEdit, None
}
export interface IColumnModel {
    fieldName: string;
    displayName: string;
    hidden: boolean;
    canEdit: boolean;
    canDelete: boolean;
    canAdd: boolean;
    canFilter: boolean;
    canSort: boolean;
    canExport: boolean;
    identityField: boolean;
    cssClass: Object;
    style: Object;
    fieldType: EnumFieldType;
}
export interface ITableModel {
    cssClass: Object;
    style: Object;
    getUrl?: string;
    updateUrl?: string;
    insertUrl?: string;
    deleteUrl?: string;
    columns: IColumnModel[];
    data: any;
    enableQuickFilterBy: boolean;
    enablePaging: boolean;
    enableSorting: boolean;
    enableFiltering: boolean;
    enableExport: boolean;
    editType: EnumEditType;
    enableServerSideFiltering: boolean;
    enableServerSideSorting: boolean;
    enableServerSideQuickFilterBy: boolean;
    enableServerSidePaging: boolean;
    enableServerSideExport: boolean;
}

export class TableModel implements ITableModel {
    public enableQuickFilterBy: boolean = true;
    public enablePaging: boolean = true;
    public enableSorting: boolean = true;
    public enableFiltering: boolean = true;
    public enableExport: boolean = true;
    public enableServerSideFiltering: boolean = false;
    public enableServerSideSorting: boolean = false;
    public enableServerSideQuickFilterBy: boolean = false;
    public enableServerSidePaging: boolean = false;
    public enableServerSideExport: boolean = false;
    public cssClass: string = 'sui-table-all';
    public style: Object = {};
    public editType: EnumEditType = EnumEditType.FormEdit;
    constructor(public columns: IColumnModel[] = [], public data: any = []) { }
}

export class ColumnModel implements IColumnModel {
    public hidden: boolean = false;
    public canEdit: boolean = true;
    public canDelete: boolean = true;
    public canAdd: boolean = true;
    public canFilter: boolean = true;
    public canSort: boolean = true;
    public canExport: boolean = true;
    public identityField: boolean = false;
    public style: Object = {};
    public cssClass: Object = {};
    constructor(public fieldName: string,
        public displayName: string,
        public fieldType: EnumFieldType = EnumFieldType.String) { }
}
