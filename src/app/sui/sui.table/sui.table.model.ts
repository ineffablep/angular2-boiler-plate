export enum EnumFieldType {
    String, Number, Date, DateTime, Boolean, Select
}
export enum EnumEditType {
    RowEdit,CellEdit,DialogEdit,FormEdit,None
}
export interface IColumnModel {
    FieldName: string;
    DisplayName: string;
    Hidden: boolean;
    CanEdit: boolean;
    CanDelete: boolean;
    CanAdd: boolean;
    CanFilter: boolean;
    CanSort: boolean;
    CanGroup: boolean;
    IdentityField:boolean;
    CssClass: Object;
    Style: Object;
    FieldType: EnumFieldType
}
export interface ITableModel {
    CssClass: Object;
    Style: Object;
    GetUrl?: string;
    EditUrl?: string;
    AddUrl?: string;
    DeleteUrl?: string;
    Columns:IColumnModel[];
    Data:any;
    ShowSearch:boolean;
    EditType:EnumEditType;
}

export class TableModel implements ITableModel {
    public ShowSearch:boolean=true;
    public CssClass:string="sui-table-all";
    public Style:Object={};
    public  EditType:EnumEditType=EnumEditType.FormEdit;
    constructor(public Columns:IColumnModel[]=[], public Data:any=[]) {}
}

export class ColumnModel implements IColumnModel {
    public Hidden: boolean=false;
    public CanEdit: boolean=true;
    public CanDelete: boolean=true;
    public CanAdd: boolean=true;
    public CanFilter: boolean=true;
    public CanSort: boolean=true;
    public CanGroup: boolean=true;
    public IdentityField:boolean=false;
    public Style:Object={};
    public CssClass:Object={};
    constructor(public FieldName:string,public DisplayName:string,public FieldType: EnumFieldType=EnumFieldType.String ){}
}