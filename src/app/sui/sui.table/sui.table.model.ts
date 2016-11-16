

export enum EnumFieldType {
    text = 0,
    number = 1,
    date = 2,
    datetime = 3,
    checkbox = 4,
    select = 5,
    password = 6,
    image = 7,
    email = 8,
    tel = 9,
    radio = 10,
    range = 11,
    time = 12,
    url = 13,
    file = 14,
    hidden = 15,
    week = 16,
    month = 17,
    color = 18
}
export enum EnumEditType {
    RowEdit = 0,
    CellEdit = 1,
    DialogEdit = 2,
    FormEdit = 3,
    None = 4
}
export interface ISelectModel {
    key: string;
    value: string;
}
export class PaginationModel {
    public showPaging: boolean = true;
    public pageSize: number = 10;
    public quickAccessMaxPages: number = 5;
    public showGoToEndArrow: boolean = true;
    public showGoToStartArrow: boolean = true;
    public showGoToNextArrow: boolean = true;
    public showGoToPreviousArrow: boolean = true;
    public currentPage: number = 1;
    public activePageCssClass: string = 'sui-theme';
    public clsGoToNextPageIcon: string = 'fa fa-angle-right';
    public clsGoToPreviousPageIcon: string = 'fa fa-angle-left';
    public clsGoToStartIcon: string = 'fa fa-angle-double-left';
    public clsGoToEndIcon: string = 'fa fa-angle-double-right';
    public toolTipGoToNext = 'Go to next page';
    public toolTipGoToPrevious = 'Go to next page';
    public toolTipGoToStart = 'Go to first page';
    public toolTipGoToEnd = 'Go to last page';
}


export class SelectModel implements ISelectModel {
    public key: string = '';
    public value: string = '';
}
export class TableModel {
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
    public searchInputPlaceholderText: string = 'Search ...';
    public pagination: PaginationModel = new PaginationModel();
    public showColumnChooserButton: boolean = true;
    public cssClassColumnChooser: string = 'sui-btn sui-theme';
    public columnChooserText: string = 'Choose Columns';
    public tableHeader: string = '';
    public cssTableHeader: string = '';
    public styleTableHeader: Object = {};
    public pageSizeArray: number[] = [5, 10, 25, 50, 100, 500, 1000];
    public canEdit: boolean = true;
    public canAdd: boolean = true;
    public canDelete: boolean = true;

    public getUrl?: string;
    public addUrl?: string;
    public updateUrl?: string;
    public deleteUrl?: string;

    public txtAddBtn: string = 'Add New';
    public cssAddBtn: string = 'sui-btn';
    public cssAddIcon: string = 'fa fa-plus-circle';

    public cssEditIcon: string = 'fa fa-edit';
    public cssDeleteIcon: string = 'fa fa-times';
    constructor(public columns: ColumnModel[] = [], public data: any[] = []) { }
}

export class ColumnModel {
    public hidden: boolean = false;
    public canFilter: boolean = true;
    public canSort: boolean = true;
    public canExport: boolean = true;
    public canEdit: boolean = true;
    public identityField: boolean = false;
    public selectList: SelectModel[] = [];
    public cssfilterRow: string = 'sui-input ';
    public styleFilterRow: Object = {};
    public autoCreateSelectListFromData: boolean = true;
    public required: boolean = false;
    public showInQuickFilter: boolean = false;
    constructor(public fieldName: string,
        public displayName: string,
        public fieldType: EnumFieldType = EnumFieldType.text) { }
}
