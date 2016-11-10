export enum EnumFieldType {
    String = 0,
    Number = 1,
    Date = 2,
    DateTime = 3,
    Boolean = 4,
    Select = 5,
    Currency = 6,
    Image = 7,
    Email = 8,
    Phone = 9
}
export enum EnumEditType {
    RowEdit, CellEdit, DialogEdit, FormEdit, None
}
export interface ISelectModel {
    key: string;
    value: string;
}

export interface IColumnModel {
    fieldName: string;
    displayName: string;
    hidden: boolean;
    canFilter: boolean;
    canSort: boolean;
    canExport: boolean;
    identityField: boolean;
    fieldType: EnumFieldType;
    autoCreateSelectListFromData: boolean;
    selectList: SelectModel[];
}
export interface ITableModel {

    getUrl?: string;
    updateUrl?: string;
    insertUrl?: string;
    deleteUrl?: string;
    columns: IColumnModel[];
    data: any[];
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
    sortIcon: string;
    sortDescIcon: string;
    sortAscIcon: string;
    cssClass: Object;
    headerCssClass: Object;
    rowCssClass: Object;
    style: Object;
    rowStyle: Object;
    headerStyle: Object;

}
export class SelectModel implements ISelectModel {
    public key: string = '';
    public value: string = '';
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
    public cssClass: Object = 'sui-table-all';
    public style: Object = {};
    public headerCssClass: Object = {};
    public rowCssClass: Object = '';
    public rowStyle: Object = {};
    public headerStyle: Object = {};
    public editType: EnumEditType = EnumEditType.FormEdit;
    public sortIcon: string = 'fa fa-sort';
    public sortDescIcon: string = 'fa fa-sort-desc';
    public sortAscIcon: string = 'fa fa-sort-asc';
    public searchInputCssClass: string = 'sui-input';
    public searchInputPlaceholderText: string= 'Search ...';
    constructor(public columns: IColumnModel[] = [], public data: any[] = []) { }
}

export class ColumnModel implements IColumnModel {
    public hidden: boolean = false;
    public canFilter: boolean = true;
    public canSort: boolean = true;
    public canExport: boolean = true;
    public identityField: boolean = false;
    public selectList: SelectModel[] = [];
    public filterInputCssClass: string= 'sui-input';
    public autoCreateSelectListFromData: boolean = true;
    constructor(public fieldName: string,
        public displayName: string,
        public fieldType: EnumFieldType = EnumFieldType.String) { }
}
